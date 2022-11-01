"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Router } from "next/router"
import nprogress from "nprogress"
import { useEffect } from "react"
import queryClient from "../services/queryClient"
import "./globals.css"

nprogress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 800,
	showSpinner: true,
})

Router.events.on("routeChangeStart", () => nprogress.start())
Router.events.on("routeChangeComplete", () => nprogress.done())
Router.events.on("routeChangeError", () => nprogress.done())

const RootLayout = ({ children }) => {
	useEffect(() => {
		const check = () => {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty("--vh", `${vh}px`)
		}
		check()
		window.addEventListener("resize", check)
		return () => window.removeEventListener("resize", check)
	}, [])

	return (
		<html>
			<head>
				<title>Typography</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</head>
			<body>
				<QueryClientProvider client={queryClient}>
					{children}
					{process.env.NODE_ENV === "development" ? (
						<ReactQueryDevtools
							initialIsOpen={true}
							position="top-right"
						/>
					) : null}
				</QueryClientProvider>
			</body>
		</html>
	)
}

export default RootLayout
