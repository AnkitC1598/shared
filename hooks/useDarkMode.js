import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import useMediaQuery from "./useMediaQuery"

const useDarkMode = () => {
	const [enabledState, setEnabledState] = useLocalStorage("luDarkMode")
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
	const enabled =
		typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

	useEffect(() => {
		const classList = window.document.body.classList
		enabled
			? classList.value !== "dark" && classList.add("dark")
			: classList.remove("dark")
	}, [enabled])

	return [enabled, setEnabledState]
}

export default useDarkMode
