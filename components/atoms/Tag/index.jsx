import React from "react";
import { classNames } from "../../../utils";

const Tag = ({ tag, bgColor, rounded, px, py, font }) => {
	return (
		<>
			<span
				className={classNames(
					"inline-flex items-center font-medium text-slate-900 dark:text-slate-200",
					bgColor,
					rounded,
					px,
					py,
					font
				)}
			>
				{tag}
			</span>
		</>
	);
};

Tag.defaultProps = {
	tag: "Tag",
	bgColor: "bg-neutral-200 dark:bg-neutral-800",
	rounded: "rounded-md",
	px: "px-2.5",
	py: "py-0.5",
	font: "text-xxs",
};

export default Tag;
