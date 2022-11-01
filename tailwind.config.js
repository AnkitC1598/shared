/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			height: {
				navScreen: "calc(100vh - 65px)",
				navScreenSpaced: "calc(100vh - 90px)",
				chatTab: "calc(100vh - 172px)",
				screen: "calc(var(--vh) * 100)",
			},
			minHeight: theme => theme("height"),
			maxHeight: theme => theme("height"),
			width: {
				excludeSidebarIcon: "calc(100vw - 62px)",
				sidebarIcon: "62px",
				"8xl": "1440px",
				"9xl": "1600px",
			},
			minWidth: theme => theme("width"),
			maxWidth: theme => theme("width"),
			colors: {
				lu: {
					50: "#FFD4B8",
					100: "#FFC8A3",
					200: "#FFAF7A",
					300: "#FF9752",
					400: "#FF7E29",
					500: "#FF6600",
					600: "#E05A00",
					700: "#C24E00",
					800: "#A34100",
					900: "#853500",
				},
			},
			spacing: {
				120: "120%",
			},
			scale: {
				102: "1.02",
			},
			fontSize: {
				xxs: "0.625rem",
			},
			textColor: theme => theme("colors"),
			backgroundColor: theme => theme("colors"),
			borderColor: theme => theme("colors"),
			ringColor: theme => theme("colors"),
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		plugin(({ addUtilities }) => {
			addUtilities(
				{
					".scrollbar-hide": {
						/* IE and Edge */
						"-ms-overflow-style": "none",
						/* Firefox */
						"scrollbar-width": "none",
						/* Safari and Chrome */
						"&::-webkit-scrollbar": {
							display: "none",
						},
					},
					".scrollbar-default": {
						/* IE and Edge */
						"-ms-overflow-style": "auto",
						/* Firefox */
						"scrollbar-width": "auto",
						/* Safari and Chrome */
						"&::-webkit-scrollbar": {
							display: "block",
						},
					},
				},
				["responsive"]
			)
		}),
		plugin(function ({ addUtilities }) {
			const supportsTouchRule = "@supports (-webkit-touch-callout: none)"
			const webkitFillAvailable = "-webkit-fill-available"

			const utilities = {
				".min-h-screen-ios": {
					[supportsTouchRule]: {
						minHeight: webkitFillAvailable,
					},
				},
				".h-screen-ios": {
					[supportsTouchRule]: {
						height: webkitFillAvailable,
					},
				},
				".max-h-screen-ios": {
					[supportsTouchRule]: {
						height: webkitFillAvailable,
					},
				},
			}

			addUtilities(utilities, ["responsive"])
		}),
	],
}
