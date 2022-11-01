import { Menu, Transition } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"
import { classNames } from "../../../utils"

const Options = ({ options }) => {
	if (Object.prototype.toString.call(options) !== "[object Array]")
		throw new Error("Options must be an array")
	if (!options.length) throw new Error("Options must have atleast one option")

	return (
		<>
			<Menu
				as="div"
				className="relative inline-block text-left"
			>
				<Menu.Button className="inline-flex items-center p-2 text-sm font-medium text-slate-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0 cursor-pointer">
					<span className="sr-only">Open options menu</span>
					<EllipsisVerticalIcon
						className="h-5 w-5"
						aria-hidden="true"
					/>
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-50 dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="p-1">
							{options.map((option, idx) => (
								<Menu.Item key={option.label + idx}>
									{({ active }) =>
										option.isLink ? (
											<Link
												href={option.link}
												target="_blank"
												rel="noopener noreferrer"
												className={classNames(
													active
														? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
														: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
													"rounded-md px-4 py-2 text-sm flex space-x-2"
												)}
											>
												<>
													{option.icon
														? option.icon
														: null}
													<span>{option.label}</span>
												</>
											</Link>
										) : option.isExternalLink ? (
											<a
												href={option.link}
												target="_blank"
												rel="noopener noreferrer"
												className={classNames(
													active
														? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
														: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
													"rounded-md px-4 py-2 text-sm flex space-x-2"
												)}
											>
												{option.icon
													? option.icon
													: null}
												<span>{option.label}</span>
											</a>
										) : (
											<span
												className={classNames(
													active
														? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
														: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
													"rounded-md px-4 py-2 text-sm flex space-x-2"
												)}
												onClick={option.action}
											>
												{option.icon
													? option.icon
													: null}
												<span>{option.label}</span>
											</span>
										)
									}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	)
}

Options.defaultProps = {
	options: [],
}

export default Options
