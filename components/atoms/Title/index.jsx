import React from "react";

const Title = ({ title }) => {
	if (!title) return null;
	return (
		<>
			<h1 className="text-3xl font-bold leading-tight tracking-tight">
				{title}
			</h1>
		</>
	);
};

Title.defaultProps = {
	title: null,
};

export default Title;
