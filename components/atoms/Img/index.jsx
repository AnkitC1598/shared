import React from "react";
import { classNames } from "../../../utils";

const Img = ({ className, alt, src }) => {
	return (
		<>
			<img
				className={classNames(
					"h-5 w-5 flex-shrink-0 rounded-md bg-slate-300",
					className
				)}
				src={src}
				alt={alt}
			/>
		</>
	);
};

Img.defaultProps = {
	src: "https://via.placeholder.com/150",
	alt: "",
	className: "",
};

export default Img;
