import { classNames } from "../../../utils";

const Button = ({ action, textColor, bgColor, className, icon, label }) => {
	return (
		<>
			<button
				type="button"
				onClick={action}
				className={classNames(
					"rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-0 flex space-x-1 items-center justify-center",
					bgColor,
					textColor,
					className
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
	bgColor:
		"bg-neutral-800 hover:bg-purple-600 dark:bg-gray-100 dark:hover:bg-purple-200",
	textColor: "dark:text-slate-900 text-slate-200",
	icon: null,
	label: "",
	className: "w-full",
};

export default Button;
