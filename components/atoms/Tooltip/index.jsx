import { classNames } from "../../../utils";

const Tooltip = ({ position = "top", label, bgColor }) => {
	let positionClass;
	switch (position) {
		case "top":
			positionClass = "bottom-120 left-0";
			break;
		case "bottom":
			positionClass = "top-120 left-0";
			break;
		case "left":
			positionClass = "right-120";
			break;
		case "right":
			positionClass = "left-120";
			break;
		default:
			break;
	}
	return (
		<span
			className={classNames(
				"invisible absolute w-max rounded-md px-2 py-1 text-xxs font-normal capitalize text-white group-hover:visible",
				positionClass,
				bgColor
			)}
		>
			{label}
		</span>
	);
};

Tooltip.defaultProps = {
	position: "top",
	label: "Tooltip",
	bgColor: "bg-neutral-500",
};

export default Tooltip;
