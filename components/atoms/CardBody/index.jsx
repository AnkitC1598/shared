import React, { createElement } from "react";
import { classNames } from "../../../utils";

const CardBody = ({ children, className }) => {
	return (
		<>
			<div
				className={classNames(
					"flex w-full flex-1 px-6",
					className
				)}
			>
				<div className="flex-1 w-full space-y-1">{children}</div>
			</div>
		</>
	);
};

CardBody.defaultProps = {
	children: createElement("div"),
	className: "",
};

export default CardBody;
