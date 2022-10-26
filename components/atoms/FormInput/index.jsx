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
	placeholder,
	required,
	defaultValue,
}) => {
	return (
		<>
			{showLabel ? (
				<label htmlFor={id} className="block text-sm font-medium">
					<span>{label}</span>{" "}
					{required ? <span className="text-red-500">*</span> : null}
				</label>
			) : null}
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				autoComplete={autoComplete}
				onChange={onChange}
				required={required}
				defaultValue={defaultValue}
				className={classNames(
					"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
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
	onChange: () => false,
	className: "",
	placeholder: null,
	required: false,
	defaultValue: '',
};

export default FormInput;
