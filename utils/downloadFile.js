const downloadFile = (file) => {
	const link = document.createElement("a");
	link.href = file.link;
	link.setAttribute("download", file.name);
	link.setAttribute("target", "_blank");
	link.setAttribute("noreferrer", true);
	document.body.appendChild(link);
	link.click();
	setTimeout(() => document.body.removeChild(link), 1000);
};

export default downloadFile;
