import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { classNames } from "../../../utils"
import { NavDropDownLink } from "../../atoms"

const NavDropDown = ({ name, navDropDownItems, close }) => {
	return (
		<>
			<Menu
				as="div"
				className="relative w-full inline-block text-left"
			>
				<Menu.Button className="font-medium text-slate-900 dark:text-slate-200 border-0 focus:outline-none rounded flex items-center cursor-pointer justify-center h-10 space-x-1">
					<span>{name}</span>
					<ChevronDownIcon
						className="w-4 h-4 text-black"
						aria-hidden="true"
					/>
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterhref="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leavehref="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 w-full min-w-max mt-2 origin-top-right divide-y bg-white dark:bg-neutral-900 divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
						<div className="px-1 py-1 ">
							{navDropDownItems.map(dropDownItem => (
								<Menu.Item
									key={dropDownItem.name}
									onClick={close}
								>
									{({ active }) =>
										dropDownItem.isExternal ? (
											<a
												href={dropDownItem.href}
												target="_blank"
												className={classNames(
													"group flex rounded-md items-center w-full px-2 py-2 text-sm",
													active
														? "bg-lu-500 text-white"
														: "text-gray-900"
												)}
											>
												{dropDownItem.icon
													? dropDownItem.icon
													: null}
												<span>{dropDownItem.name}</span>
											</a>
										) : (
											<NavDropDownLink
												href={dropDownItem.href}
												className={classNames(
													"group flex rounded-md items-center w-full px-2 py-2 text-sm",
													active
														? "bg-lu-500 text-white"
														: "text-gray-900"
												)}
											>
												{dropDownItem.icon
													? dropDownItem.icon
													: null}
												<span>{dropDownItem.name}</span>
											</NavDropDownLink>
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

export default NavDropDown
