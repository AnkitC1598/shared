import { classNames } from "../../../utils";

const Button = ({
	action,
	textColor,
	bgColor,
	className,
	icon,
	label,
	type,
	disabled,
}) => {
	return (
		<>
			<button
				type={type}
				onClick={disabled ? () => false : action}
				disabled={disabled}
				className={classNames(
					"rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-0 flex space-x-1 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
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
	action: () => false,
	bgColor:
		"bg-neutral-800 enabled:hover:bg-purple-600 dark:bg-neutral-100 dark:enabled:hover:bg-purple-200",
	textColor: "dark:text-slate-900 text-slate-200",
	icon: null,
	label: "",
	className: "w-full",
	type: "button",
	disabled: false,
};

export default Button;
