import { classNames } from "../../../utils";

const FormInput = ({
	showLabel,
	label,
	type,
	name,
	id,
	autoComplete,
	onChange,
	className,
}) => {
	return (
		<>
			{showLabel ? (
				<label
					htmlFor={id}
					className="block text-sm font-medium text-gray-700"
				>
					{label}
				</label>
			) : null}
			<input
				type={type}
				name={name}
				id={id}
				autoComplete={autoComplete}
				onChange={onChange}
				className={classNames(
					"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
					className
				)}
			/>
		</>
	);
};

FormInput.defaultProps = {
	showLabel: true,
	label: "Input",
	type: "text",
	name: "",
	id: "",
	autoComplete: "off",
	onChange: console.log,
	className: "",
};

export default FormInput;
