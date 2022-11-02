"use client"

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Combobox, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useQuery } from "@tanstack/react-query"
import { Fragment, useState } from "react"
import { Avatar, Loader } from ".."
import useDebounce from "../../../hooks/useDebounce"
import { fetchUser } from "../../../queries"
import { classNames } from "../../../utils"

const UserSearch = ({ selected, add, remove, placeholder, maxListHeight }) => {
	const [query, setQuery] = useState("")

	const deboucedQuery = useDebounce(query, 500)
	const { data: searchResult, isLoading } = useQuery(
		["search", deboucedQuery],
		fetchUser,
		{
			enabled: deboucedQuery.length > 0,
			retry: false,
		}
	)

	const [listAnimationRef] = useAutoAnimate()

	return (
		<div className="flex flex-1 flex-col space-y-4 h-full divide-y divide-neutral-200 dark:divide-neutral-800 text-slate-900 dark:text-slate-200">
			<Combobox
				value={selected}
				onChange={add}
			>
				<div className="relative mt-1 w-full">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0 bg-neutral-50 dark:bg-neutral-900"
							// displayValue={(selectedValue) => selectedValue?.name}
							onChange={event => setQuery(event.target.value)}
							autoComplete="off"
							placeholder={placeholder}
						/>
					</div>
					<span className="absolute text-xxs text-slate-900 dark:text-slate-200">
						* Username only
					</span>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute mt-0.5 max-h-60 w-full overflow-auto rounded-md bg-neutral-50 dark:bg-neutral-900 p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10 text-slate-900 dark:text-slate-200 border border-neutral-200 dark:border-neutral-800">
							{isLoading && query !== "" ? (
								<Loader />
							) : Object.prototype.toString.call(searchResult) ===
									"[object Undefined]" ||
							  Object.prototype.toString.call(searchResult) ===
									"[object Null]" ? (
								<div className="relative cursor-default select-none py-2 px-4">
									Nothing found.
								</div>
							) : (
								<Combobox.Option
									className={({ active }) =>
										classNames(
											"relative cursor-default select-none py-2 px-4 rounded-md",
											active ? "bg-purple-500" : ""
										)
									}
									value={searchResult}
								>
									<div className="flex items-center space-x-2">
										<Avatar
											imgUrl={searchResult.profileImage}
											size="h-10"
										/>
										<div className="flex flex-col">
											<span className="line-clamp-1">
												{searchResult.name}
											</span>
											<span className="text-xs line-clamp-1">
												@{searchResult.username}
											</span>
										</div>
									</div>
								</Combobox.Option>
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
			<ul
				ref={listAnimationRef}
				className={classNames(
					"w-full flex flex-col space-y-2 overflow-y-scroll scrollbar-hide pt-3",
					maxListHeight
				)}
			>
				{selected?.length
					? selected?.map((s, idx) => (
							<li
								key={s.username + idx}
								className="p-2 shadow rounded-md border border-neutral-200 dark:border-neutral-800 flex space-x-2"
							>
								<div className="flex flex-1 items-center space-x-2">
									<Avatar
										imgUrl={s.profileImage}
										size="h-10"
									/>
									<div className="flex flex-col">
										<span className="line-clamp-1">
											{s.name}
										</span>
										<span className="text-xs line-clamp-1">
											@{s.username}
										</span>
									</div>
								</div>
								<button
									className="inline-flex items-center p-2 text-sm font-medium text-gray-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0"
									onClick={() => remove(idx)}
								>
									<XMarkIcon className="h-5 w-5" />
								</button>
							</li>
					  ))
					: null}
			</ul>
		</div>
	)
}

UserSearch.defaultProps = {
	placeholder: "Search for a user",
	selected: null,
	add: () => false,
	remove: () => false,
	maxListHeight: "h-full",
}

export default UserSearch
