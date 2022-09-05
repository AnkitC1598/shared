import axios from "axios";
import CookieService from "./cookie.service";

const fetchWithToken = axios.create({
	baseURL: "https://service.letsupgrade.in",
	headers: {
		"Content-Type": "application/json",
	},
});

const fetchWithoutToken = axios.create({
	baseURL: "https://service.letsupgrade.in",
	headers: {
		"Content-Type": "application/json",
	},
});

fetchWithToken.interceptors.request.use(
	(config) => {
		const token = CookieService.getLocalAccessToken();

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

fetchWithToken.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {
		const originalConfig = err.config;

		if (err.response?.status !== 401) {
			return Promise.reject(err);
		}
		if (originalConfig.url === "/v2/auth/access") {
			// Refresh Token was expired
			return Promise.reject(err);
		}

		return await axiosInstance
			.post("/v2/auth/access", {
				refresh: CookieService.getLocalRefreshToken(),
			})
			.then((resp) => {
				const { token } = resp.data;
				CookieService.updateLocalAccessToken(token);

				return axiosInstance(originalConfig);
			})
			.catch((_error) => {
				return Promise.reject(_error);
			});

		// return Promise.reject(err);
	}
);

export { fetchWithToken, fetchWithoutToken };
