import { PaperAirplaneIcon } from "@heroicons/react/solid";

const Input = ({
	handleSubmit,
	placeholder,
	defaultValue,
	setValue,
	submitIcon,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit} className="relative">
				<input
					className="block w-full flex-1 rounded-md border border-neutral-300 px-4 py-2 pr-10 text-slate-900 placeholder:text-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-0 dark:border-neutral-800 sm:text-sm"
					type="text"
					defaultValue={defaultValue}
					placeholder={placeholder}
					name="text"
					onChange={(e) => {
						setValue(e.target.value);
					}}
					autoFocus
				/>
				<button
					type="submit"
					disabled={!defaultValue}
					className="absolute inset-y-0 right-0 inline-flex items-center rounded-r-md border border-l-0 border-neutral-300 bg-slate-50 px-2 text-sm text-slate-500 disabled:opacity-50 dark:border-neutral-800"
				>
					{/* <PaperAirplaneIcon className="h-6 w-6 rotate-90" /> */}
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
	submitIcon: <PaperAirplaneIcon className="h-6 w-6 rotate-90" />,
};

export default Input;
