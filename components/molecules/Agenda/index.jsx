import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { classNames } from "../../../utils";
import { Input } from "../../atoms";

const Agenda = ({ agenda }) => {
	const [editing, setEditing] = useState(false);
	const [input, setInput] = useState(agenda.text);

	const handleSubmit = (e) => {
		e?.preventDefault();
		if (input !== agenda.text) console.log(input);
		else agenda.text = input;
		setEditing(false);
	};

	return (
		<>
			<li className="flex select-none items-center justify-between bg-white py-4 dark:bg-neutral-900">
				{editing ? (
					<span className="px-3">
						<Input
							placeholder={agenda.text}
							defaultValue={agenda.text}
							submitIcon={<CheckIcon className="h-6 w-6" />}
							handleSubmit={handleSubmit}
							setValue={setInput}
						/>
					</span>
				) : (
					<span
						className="flex flex-1 select-text space-x-4 px-6"
						onClick={() => setEditing(true)}
					>
						<div className="flex items-center">
							<input
								type="checkbox"
								className="h-4 w-4 rounded border-neutral-300 text-lu-500 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-neutral-800"
								checked={agenda.isCompleted}
								readOnly
							/>
						</div>
						<div
							className={classNames(
								"flex-1 text-sm",
								agenda.isCompleted
									? "text-slate-500 dark:text-slate-400"
									: " text-slate-900 dark:text-slate-200"
							)}
						>
							{agenda.text}
						</div>
					</span>
				)}
			</li>
		</>
	);
};

export default Agenda;
