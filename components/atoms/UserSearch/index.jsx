import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { Loader } from "..";
import useDebounce from "../../../hooks/useDebounce";
import { fetchUser } from "../../../queries";
import { classNames } from "../../../utils";

const UserSearch = ({ selected, setSelected, placeholder }) => {
	const [query, setQuery] = useState("");

	const deboucedQuery = useDebounce(query, 500);
	const { data: searchResult, isLoading } = useQuery(
		["search", deboucedQuery],
		fetchUser,
		{
			enabled: deboucedQuery.length > 0,
			retry: false,
		}
	);

	return (
		<Combobox value={selected} onChange={setSelected}>
			<div className="relative mt-1 w-full">
				<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
					<Combobox.Input
						className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
						displayValue={(selectedValue) => selectedValue?.name}
						onChange={(event) => setQuery(event.target.value)}
						autoComplete="off"
						placeholder={placeholder}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<span className='absolute text-xxs'>* Username only</span>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{isLoading && query !== "" ? (
							<Loader />
						) : Object.prototype.toString.call(searchResult) ===
								"[object Undefined]" ||
						  Object.prototype.toString.call(searchResult) ===
								"[object Null]" ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								Nothing found.
							</div>
						) : (
							<Combobox.Option
								className={({ active }) =>
									classNames(
										"relative cursor-default select-none py-2 px-4 rounded-md",
										active
											? "bg-purple-500 text-slate-200"
											: "text-gray-900"
									)
								}
								value={searchResult}
							>
								{({ selected }) => (
									<>
										<span
											className={classNames(
												"block truncate",
												selected
													? "font-medium"
													: "font-normal"
											)}
										>
											{searchResult.name}
										</span>
									</>
								)}
							</Combobox.Option>
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
};

UserSearch.defaultProps = {
	placeholder: "Search for a user",
	selected: null,
	setSelected: () => false,
};

export default UserSearch;
