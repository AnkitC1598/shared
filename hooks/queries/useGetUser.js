import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../../queries"

const useGetUser = ({ username }) => {
	const { isLoading, isError, data, error } = useQuery(
		[`user-${username}`, username],
		fetchUser,
		{
			enabled: !!username,
			retry: false,
		}
	)

	return {
		isLoading,
		isError,
		data,
		error,
	}
}

export default useGetUser
