import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../queries";

const useGetSelf = ({ username }) => {
	const { isLoading, isError, data, error } = useQuery(
		["selfDetails", username],
		fetchUser
	);

	return {
		isLoading,
		isError,
		data,
		error,
	};
};

export default useGetSelf;
