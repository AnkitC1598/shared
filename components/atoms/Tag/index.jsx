import React from "react";
import { classNames } from "../../../utils";

const Tag = ({ tag, bgColor, rounded }) => {
	return (
		<>
			<span
				class={classNames(
					"inline-flex items-center px-2.5 py-0.5 text-xxs font-medium text-slate-900 dark:text-slate-200",
					bgColor,
					rounded
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
};

export default Tag;
