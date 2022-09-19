const getRGB = (val) => {
	try {
		val = parseInt(val, 16);
	} catch (err) {
		val = false;
	}
	return val;
};

const getsRGB = (val) => {
	val = getRGB(val) / 255;
	val = val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	return val;
};

const getL = (hex) => {
	return (
		0.2126 * getsRGB(hex.substr(1, 2)) +
		0.7152 * getsRGB(hex.substr(3, 2)) +
		0.0722 * getsRGB(hex.substr(-2))
	);
};

const checkContrast = (hex) => {
	var L1 = getL(hex),
		L2 = getL("#ffffff"),
		ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
	return ratio;
};

const getHex = (str) => {
	for (
		var i = 0, hash = 0;
		i < str.length;
		hash = str.charCodeAt(i++) + ((hash << 5) - hash)
	);

	let hex = Math.floor(
		Math.abs(((Math.sin(hash) * 10000) % 1) * 16777216)
	).toString(16);

	const hexCode = `#${Array(7 - hex.length).join("0")}${hex}`;

	return checkContrast(hexCode) < 2 ? getHex(`${str}$`) : hexCode;
};

export default getHex;
