import { classNames } from "../../../utils";

const Button = ({ action, textColor, bgColor, icon, label }) => {
	return (
		<>
			<button
				type="button"
				onClick={action}
				className={classNames(
					"rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-0 flex space-x-1 items-center justify-center",
					bgColor,
					textColor
				)}
			>
				{icon ? icon : null}
				<span>{label}</span>
			</button>
		</>
	);
};

Button.defaultProps = {
	action: console.log,
	textColor: "text-slate-200",
	bgColor: "bg-neutral-900",
	icon: null,
	label: "",
};

export default Button;
