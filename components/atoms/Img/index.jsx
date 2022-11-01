import React from "react"
import { classNames } from "../../../utils"

const Img = ({ className, size, alt, src }) => {
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
