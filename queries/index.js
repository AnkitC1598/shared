import { fetchWithToken } from "../services/axios";

export const fetchUser = async ({ queryKey }) => {
	const [_, username] = queryKey;
	let resp = await fetchWithToken.get(`/v1/users/${username}`);
	resp = resp.data.results.data;

	if (resp.profileImage === null)
		resp.profileImage = `https://avatars.dicebear.com/api/initials/${resp.username.replace(
			" ",
			"-"
		)}.svg`;
	if (resp.coverImage === null)
		resp.coverImage = "https://source.unsplash.com/1600x900/?technology";

	return resp;
};
