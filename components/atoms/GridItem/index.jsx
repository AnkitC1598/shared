import { createElement } from "react"

const GridItem = ({ children }) => {
	return (
		<>
			<li className="col-span-1 flex flex-col rounded-lg bg-white shadow dark:shadow-lg hover:scale-102 hover:shadow-xl dark:bg-neutral-800 dark:hover:shadow-slate-900">
				{children}
			</li>
		</>
	)
}

GridItem.defaultProps = {
	children: createElement("div"),
}

export default GridItem
