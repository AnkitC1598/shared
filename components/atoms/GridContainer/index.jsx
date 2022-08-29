import { createElement } from "react";
import { classNames } from "../../../utils";
import { Title } from "..";

const GridContainer = ({ children, className, title }) => {
	return (
		<>
			<Title title={title} />
			<ul
				role="list"
				className={classNames(
					"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					className
				)}
			>
				{children}
			</ul>
		</>
	);
};

GridContainer.defaultProps = {
	children: createElement("li"),
	className: "",
	title: null,
};

export default GridContainer;
