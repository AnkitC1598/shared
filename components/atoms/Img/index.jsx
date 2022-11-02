import React from "react"
import { classNames } from "../../../utils"

const Img = ({ className, alt, src }) => {
	if (Object.prototype.toString.call(src) !== "[object String]")
		throw new Error("Img: src must be a string")

	return (
		<>
			<img
				className={classNames(
					"flex-shrink-0 rounded-md bg-slate-300",
					className
				)}
				src={src}
				alt={alt}
			/>
		</>
	)
}

Img.defaultProps = {
	src: "https://via.placeholder.com/150",
	alt: "",
	className: "h-5",
}

export default Img
