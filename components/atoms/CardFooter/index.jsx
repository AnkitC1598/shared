import React, { createElement } from "react"
import { classNames } from "../../../utils"

const CardFooter = ({ children, className }) => {
	return (
		<>
			<div
				className={classNames(
					"flex items-center space-x-3 px-6 py-4",
					className
				)}
			>
				{children}
			</div>
		</>
	)
}

CardFooter.defaultProps = {
	children: createElement("div"),
	className: "",
}

export default CardFooter
