import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../utils";

const Input = ({
	handleSubmit,
	placeholder,
	defaultValue,
	setValue,
	submitIcon,
	className,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit} className="relative w-full">
				<input
					className={classNames(
						"block w-full flex-1 rounded-md p-2 pr-10 text-slate-900 placeholder:text-slate-400 border-0 focus:outline-none focus:ring-0 sm:text-sm",
						className
					)}
					type="text"
					defaultValue={defaultValue}
					placeholder={placeholder}
					name="text"
					onChange={(e) => {
						setValue(e.target.value);
					}}
					autoComplete="off"
				/>
				<button
					type="submit"
					disabled={!defaultValue}
					className="absolute inset-y-0 right-0 inline-flex items-center rounded-r-md border-0px-2 text-sm disabled:opacity-50 hover:scale-105 transform transition duration-200 ease-in-out"
				>
					{submitIcon}
				</button>
			</form>
		</>
	);
};

Input.defaultProps = {
	handleSubmit: (e) => {
		e?.preventDefault();
		console.debug(e.target);
	},
	placeholder: "",
	defaultValue: "",
	setValue: console.log,
	submitIcon: <PaperAirplaneIcon className="h-6 w-6" />,
	className:
		"text-slate-900 dark:text-slate-200 bg-neutral-50 dark:bg-neutral-900 focus:text-slate-900 dark:focus:text-slate-200 focus:bg-neutral-50 dark:focus:bg-neutral-900",
};

export default Input;
