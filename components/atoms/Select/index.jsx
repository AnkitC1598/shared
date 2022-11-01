import { Listbox, Transition } from "@headlessui/react"
import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { Fragment, useMemo } from "react"
import { classNames } from "../../../utils"

const Select = ({
	label,
	id,
	options,
	placeholder,
	selected,
	multiple,
	setSelected,
	removeSelected,
}) => {
	if (Object.prototype.toString.call(selected) === "[object String]")
		selected = useMemo(
			() =>
				options.find(optionsEle => optionsEle.value === selected) ||
				null,
			[options, selected]
		)

	return (
		<>
			<Listbox
				value={selected}
				onChange={e => setSelected({ target: { name: id, value: e } })}
			>
				{({ open }) => (
					<>
						<Listbox.Label className="block text-sm font-medium text-gray-700">
							{label}
						</Listbox.Label>
						<div className="relative w-full mt-1">
							<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
								{selected ? (
									multiple ? (
										selected.length ? (
											<div className="flex items-center space-x-1">
												{selected.map((s, idx) => (
													<span
														key={`${s?.label}_${idx}`}
														className="flex items-center justify-betweeen bg-neutral-300 px-1 rounded"
													>
														<span className="block truncate text-xxs">
															{s?.label ||
																placeholder}
														</span>
														<XMarkIcon
															className="w-3 h-3 cursor-pointer"
															onClick={e =>
																removeSelected({
																	key: id,
																	value: s,
																})
															}
														/>
													</span>
												))}
											</div>
										) : (
											<span className="block truncate">
												{placeholder}
											</span>
										)
									) : (
										<span className="block truncate">
											{selected?.label || placeholder}
										</span>
									)
								) : (
									<span className="block truncate">
										{placeholder}
									</span>
								)}
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronUpDownIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>

							<Transition
								show={open}
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
									{options.map(option => (
										<Listbox.Option
											key={option.value}
											className={({ active }) =>
												classNames(
													active
														? "text-white bg-indigo-600"
														: "text-gray-900",
													"relative cursor-default rounded-md select-none py-2 pl-3 pr-9"
												)
											}
											value={option}
										>
											{({ selected }) => (
												<>
													<span
														className={classNames(
															selected
																? "font-semibold"
																: "font-normal",
															"block truncate"
														)}
													>
														{option.label}
													</span>
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</>
				)}
			</Listbox>
		</>
	)
}

Select.defaultProps = {
	options: [],
	multiple: false,
	placeholder: "Select an option",
	label: "Select",
	id: "select",
	selected: null,
	multiple: false,
	setSelected: () => false,
	removeSelected: () => false,
}

export default Select
