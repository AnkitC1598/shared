import useMediaQuery from "./useMediaQuery";

const useBreakpoints = () => {
	const breakpoints = {
		isXS: useMediaQuery("(max-width: 640px)"),
		isSM: useMediaQuery("(min-width: 641px)"),
		isMD: useMediaQuery("(min-width: 769px)"),
		isLG: useMediaQuery("(min-width: 1025px)"),
		active: "xs",
	};

	if (breakpoints.isXS) breakpoints.active = "xs";
	if (breakpoints.isSM) breakpoints.active = "sm";
	if (breakpoints.isMD) breakpoints.active = "md";
	if (breakpoints.isLG) breakpoints.active = "lg";

	return breakpoints;
};

export default useBreakpoints;

