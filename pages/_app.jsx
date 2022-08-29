import Head from "next/head";
import { Router } from "next/router";
import nprogress from "nprogress";
import { useEffect } from "react";
import "../styles/globals.css";

nprogress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 800,
	showSpinner: true,
});

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		const check = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	return (
		<>
			<Head>
				<title>Typography</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
