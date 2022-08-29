import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		setMatches(mediaQuery.matches);
		const handler = (event) => setMatches(event.matches);
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return matches;
};

export default useMediaQuery;

