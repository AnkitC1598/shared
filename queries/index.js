import { fetchWithToken } from "../services/axios";

export const fetchUser = async ({ queryKey }) => {
	const [_, username] = queryKey;
	const resp = await fetchWithToken.get(`/v1/users/${username}`);
	return resp.data.results.data;
};
