import React from "react";
import { classNames } from "../../../utils";

const Subtitle = ({ text }) => {
	return (
		<>
			<p className={classNames("mt-1 truncate text-sm", color)}>{text}</p>
		</>
	);
};

Subtitle.defaultProps = {
	text: "",
	color: "text-slate-500",
};

export default Subtitle;
