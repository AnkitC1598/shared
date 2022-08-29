const CookieService = {
	getAll() {
		return { accessToken: localStorage.getItem("luNext.token"), refreshToken: localStorage.getItem("luNext.refresh") } || false;
		// return Cookie.get() || false;
	},

	getLocalRefreshToken() {
		return localStorage.getItem("luNext.refresh") || false;
		// return Cookie.get("luNext.refresh") || false;
	},

	getLocalAccessToken() {
		return localStorage.getItem("luNext.token") || false;
		// return Cookie.get("luNext.token") || false;
	},

	updateLocalAccessToken(token) {
		localStorage.setItem("luNext.token", token);
		// Cookie.set("luNext.token", token);
	},

	setTokens({ accessToken, refreshToken }) {
		localStorage.setItem("luNext.token", accessToken);
		// Cookie.set("luNext.token", accessToken);
		localStorage.setItem("luNext.refresh", refreshToken);
		// Cookie.set("luNext.refresh", refreshToken);
	},

	removeTokens() {
		localStorage.removeItem("luNext.token");
		// Cookie.remove("luNext.token");
		localStorage.removeItem("luNext.refresh");
		// Cookie.remove("luNext.refresh");
	},
};

export default CookieService;