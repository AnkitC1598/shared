const urlify = (text) => {
	let urls = [];
	var urlRegex = /(https?:\/\/[^\s]+)/g;

	return {
		text: text
			? text.replace(urlRegex, function (url) {
					urls.push(url);
					return `<a class="text-blue-500 hover:underline" target="_blank" href="${url}">${url}</a>`;
			  })
			: "",
		urls,
	};
};

export default urlify;
