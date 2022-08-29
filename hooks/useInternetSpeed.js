import { useEffect, useRef, useState } from "react";

const useInternetSpeed = (props) => {
	const {
		pingInterval = 4000,
		threshold = 20,
		imageUrl = "https://res.cloudinary.com/de8eknmis/image/upload/v1634730491/sample.jpg",
		downloadSize = "117438", //bytes
	} = props;
	const [isNetworkDown, setIsNetworkDown] = useState(false),
		[speed, setSpeed] = useState(false),
		intervalFun = useRef();

	window.addEventListener("offline", () => setIsNetworkDown(true));
	window.addEventListener("online", () => setIsNetworkDown(false));

	const startCalculating = () => {
		return setTimeout(MeasureConnectionSpeed, pingInterval);
	};

	useEffect(() => {
		intervalFun.current = startCalculating();
		return () => clearInterval(intervalFun.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const MeasureConnectionSpeed = () => {
		var startTime, endTime;
		var download = new Image();
		startTime = new Date().getTime();

		var cacheBuster = "?nnn=" + startTime;
		download.src = imageUrl + cacheBuster;

		download.onload = function (d) {
			endTime = new Date().getTime();
			showResults(startTime, endTime);
		};

		download.onerror = function (err, msg) {
			console.log("err", err);
			clearInterval(intervalFun.current);
		};
		startCalculating();
	};

	const showResults = (startTime, endTime) => {
		const duration = (endTime - startTime) / 1000;

		const bitsLoaded = downloadSize * 8;
		const speedBps = (bitsLoaded / duration).toFixed(2);
		const speedKbps = (speedBps / 1024).toFixed(2);
		const speedMbps = (speedKbps / 1024).toFixed(2);
		if (speedMbps > 0) {
			setNetworStatus(speedMbps);
		}
	};

	const setNetworStatus = (speedMbps) => {
		console.log(speedMbps);
		if (speedMbps < threshold) {
			setIsNetworkDown(true);
		} else {
			setIsNetworkDown(false);
		}
		setTimeout(() => setSpeed(speedMbps), 200);
	};

	return { isNetworkDown, speed };
};

export default useInternetSpeed;

