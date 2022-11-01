import Cookies from "js-cookie"

const cookieOptions = {
	domain: process.browser ? window.location.hostname : "localhost",
	path: "/",
}

const CookieService = {
	getAll() {
		// return { accessToken: localStorage.getItem("lupower"), refreshToken: localStorage.getItem("lupower_refresh") } || false;
		return Cookies.get() || false
	},

	getLocalRefreshToken() {
		// return localStorage.getItem("lupower_refresh") || false;
		return Cookies.get("lupower_refresh") || false
	},

	getLocalAccessToken() {
		// return localStorage.getItem("lupower") || false;
		return Cookies.get("lupower") || false
	},

	updateLocalAccessToken(token) {
		// localStorage.setItem("lupower", token);
		Cookies.set("lupower", token, cookieOptions)
	},

	setTokens({ accessToken, refreshToken }) {
		// localStorage.setItem("lupower", accessToken);
		// localStorage.setItem("lupower_refresh", refreshToken);
		if (accessToken.includes("Bearer")) {
			accessToken = accessToken.split(" ")[1]
		}
		Cookies.set("lupower", accessToken, cookieOptions)
		Cookies.set("lupower_refresh", refreshToken, cookieOptions)
	},

	removeTokens() {
		// localStorage.removeItem("lupower");
		// localStorage.removeItem("lupower_refresh");
		Cookies.remove("lupower", cookieOptions)
		Cookies.remove("lupower_refresh", cookieOptions)
	},

	getServerCookie(key, cookies) {
		// Get name followed by anything except a semicolon
		var cookieString = RegExp(key + "=[^;]+").exec(cookies)
		// Return everything after the equal sign, or an empty string if the cookie name not found
		return decodeURIComponent(
			!!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : ""
		)
	},
}

export default CookieService
