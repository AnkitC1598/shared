import { classNames } from "../../../utils"
import { Tooltip } from ".."

const CardInfoTitle = ({ label, tooltip }) => {
	if (Object.prototype.toString.call(label) !== "[object String]")
		throw new Error("CardInfoTitle: label must be a string")

	return (
		<>
			<p
				className={classNames(
					"text-sm text-slate-500",
					tooltip && "group relative flex !overflow-visible"
				)}
			>
				<span className="line-clamp-1">{label}</span>
				{tooltip ? (
					<Tooltip
						position="top"
						label={tooltip}
					/>
				) : null}
			</p>
		</>
	)
}

CardInfoTitle.defaultProps = {
	label: null,
	tooltip: null,
}

export default CardInfoTitle
