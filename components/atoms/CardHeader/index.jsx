import React, { createElement } from "react"
import { classNames } from "../../../utils"

const CardHeader = ({ children, className }) => {
	return (
		<>
			<div className={classNames("flex w-full flex-1 p-6", className)}>
				<div className="flex-1 w-full space-y-2">{children}</div>
			</div>
		</>
	)
}

CardHeader.defaultProps = {
	children: createElement("div"),
	className: "",
}

export default CardHeader
