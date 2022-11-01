import { classNames } from "../../../utils"
import { Tooltip } from ".."

const CardTitle = ({ title, tooltip }) => {
	if (!title) return null

	return (
		<>
			<h3
				className={classNames(
					"font-medium text-slate-900 dark:text-slate-200",
					tooltip && "group relative flex !overflow-visible"
				)}
			>
				<span className="line-clamp-2">{title}</span>
				{tooltip ? (
					<Tooltip
						position="top"
						label={tooltip}
					/>
				) : null}
			</h3>
		</>
	)
}

CardTitle.defaultProps = {
	title: null,
	tooltip: null,
}

export default CardTitle
