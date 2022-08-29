import { Switch } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/solid";
import { classNames } from "../../../utils";

const Toggle = ({
	size,
	label,
	id,
	value,
	onChange,
	vertical,
	trueState,
	falseState,
}) => {
	let toggleClass;
	let thumbClass;
	let translate;
	switch (size) {
		case "sm":
			toggleClass = "h-4 w-7";
			thumbClass = "h-3 w-3";
			translate = "translate-x-3";
			break;
		default:
			toggleClass = "h-6 w-11";
			thumbClass = "h-5 w-5";
			translate = "translate-x-5";
			break;
	}

	return (
		<>
			<Switch.Group
				as="div"
				className="rotat flex items-center justify-between"
			>
				{label && (
					<span className="flex flex-grow flex-col">
						<Switch.Label
							as="span"
							className="text-slate-900 dark:text-slate-200"
							passive
						>
							{label}
						</Switch.Label>
					</span>
				)}
				<Switch
					checked={value}
					onChange={onChange}
					className={classNames(
						"relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
						value ? trueState.bg : falseState.bg,
						toggleClass,
						vertical ? "rotate-90" : ""
					)}
				>
					<span
						className={classNames(
							"pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
							value ? translate : "translate-x-0",
							thumbClass
						)}
					>
						{size !== "sm" ? (
							<>
								<span
									className={classNames(
										"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
										value
											? "opacity-0 duration-100 ease-out"
											: "opacity-100 duration-200 ease-in"
									)}
									aria-hidden="true"
								>
									<falseState.icon
										className={classNames(
											"h-3 w-3",
											falseState.iconColor
										)}
									/>
								</span>
								<span
									className={classNames(
										"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
										value
											? "opacity-100 duration-200 ease-in"
											: "opacity-0 duration-100 ease-out"
									)}
									aria-hidden="true"
								>
									<trueState.icon
										className={classNames(
											"h-3 w-3",
											trueState.iconColor
										)}
									/>
								</span>
							</>
						) : null}
					</span>
				</Switch>
			</Switch.Group>
		</>
	);
};

Toggle.defaultProps = {
	size: null,
	label: null,
	id: "toggle",
	value: false,
	onChange: () => false,
	trueState: {
		bg: "bg-lu-500",
		icon: CheckIcon,
		iconColor: "text-gray-900",
	},
	falseState: {
		bg: "bg-slate-200",
		icon: XMarkIcon,
		iconColor: "text-gray-900",
	},
};

export default Toggle;
