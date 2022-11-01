import { createElement } from "react"
import { Title } from ".."
import { classNames } from "../../../utils"

const GridContainer = ({ children, className, title }) => {
	return (
		<>
			<Title text={title} />
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
	)
}

GridContainer.defaultProps = {
	children: createElement("li"),
	className: "",
	title: null,
}

export default GridContainer
