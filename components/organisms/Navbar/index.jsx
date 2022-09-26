import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";
import { Toggle } from "../../atoms";
import NavDropDown from "../../molecules/NavDropDown";
import { BoltSlashIcon } from "@headlessui/react/24/solid";
import { BoltIcon } from "@headlessui/react/24/outlined";

const Navbar = ({
	dispatchToApp,
	focusModeEnabled,
	navigation,
	needFocusMode,
	withAuth,
}) => {
	return (
		<>
			<div className="mx-auto w-full border-b border-neutral-200 bg-white text-slate-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
				<Popover>
					<nav
						className="relative mx-auto flex max-w-9xl items-center justify-between bg-white py-3 px-4 dark:bg-neutral-900 sm:px-6 md:max-w-9xl lg:px-14"
						aria-label="Global"
					>
						<div className="flex flex-1 items-center justify-between">
							<div className="flex-1 flex items-center justify-between">
								<Link href="/">
									<a>
										<span className="sr-only">
											LetsUpgrade
										</span>
										<img
											className="hidden h-8 w-auto dark:block sm:h-10"
											src="/logo_white.png"
											alt="LetsUpgrade"
										/>
										<img
											className="block h-8 w-auto dark:hidden sm:h-10"
											src="/logo.png"
											alt="LetsUpgrade"
										/>
									</a>
								</Link>
								<span className="flex space-x-4">
									{Object.prototype.toString.call(
										dispatchToApp
									) === "[object Function]" &&
									Object.prototype.toString.call(
										focusModeEnabled
									) === "[object Boolean]" &&
									Object.prototype.toString.call(
										needFocusMode
									) !== "[object Boolean]" &&
									needFocusMode ? (
										<button
											className="inline-flex items-center p-2 text-sm font-medium text-gray-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0"
											onClick={() =>
												dispatchToApp({
													type: "TOGGLE_FOCUS_MODE",
												})
											}
										>
											{focusModeEnabled ? (
												<BoltSlashIcon className="h-5 w-5" />
											) : (
												<BoltIcon className="h-5 w-5" />
											)}
										</button>
									) : null}
									<div className="flex items-center md:hidden">
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-0 dark:bg-neutral-900">
											<span className="sr-only">
												Open main menu
											</span>
											<Bars3Icon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</Popover.Button>
									</div>
								</span>
							</div>
							<div className="hidden md:ml-10 md:block md:space-x-5">
								{Object.prototype.toString.call(navigation) ===
									"[object Array]" && navigation.length
									? navigation.map((item) =>
											item.hasDropDown ? (
												<NavDropDown
													key={item.name}
													name={item.name}
													navDropDownItems={
														item.dropDown
													}
												/>
											) : item.isExternal ? (
												<a
													key={item.name}
													href={item.href}
													target="_blank"
													className="font-medium text-slate-900 dark:text-slate-200"
												>
													{item.name}
												</a>
											) : (
												<Link
													key={item.name}
													href={item.href}
												>
													<a className="font-medium text-slate-900 dark:text-slate-200">
														{item.name}
													</a>
												</Link>
											)
									  )
									: null}
								{Object.prototype.toString.call(withAuth) ===
									"[object Boolean]" && withAuth ? (
									<>
										<a
											href="https://letsupgrade.in/login"
											target="_blank"
											className="items-center justify-center rounded-md border border-neutral-900 bg-slate-900 px-4 py-2 text-slate-100 transition ease-in hover:scale-[1.01] hover:shadow-lg"
										>
											Sign In
										</a>
										<a
											href="https://letsupgrade.in/register"
											target="_blank"
											className="items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-slate-900 transition ease-in hover:scale-[1.01] hover:border-neutral-900 hover:bg-slate-900 hover:text-slate-100 hover:shadow-lg dark:border-neutral-800"
										>
											Sign Up
										</a>
									</>
								) : null}
							</div>
						</div>
					</nav>

					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
						>
							{({ close }) => (
								<div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
									<div className="flex items-center justify-between px-5 pt-4">
										<img
											className="hidden h-8 w-auto dark:block sm:h-10"
											src="/logo_white.png"
											alt="LetsUpgrade"
										/>
										<img
											className="block h-8 w-auto dark:hidden sm:h-10"
											src="/logo.png"
											alt="LetsUpgrade"
										/>
										<div className="-mr-2">
											<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-0">
												<span className="sr-only">
													Close main menu
												</span>
												<XMarkIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</Popover.Button>
										</div>
									</div>
									<div className="space-y-1 p-4 pb-2">
										{/* {Object.prototype.toString.call(
										navigation
									) === "[object Array]"
										? navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													target="_blank"
													className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50"
												>
													{item.name}
												</a>
										  ))
										: null} */}
										{Object.prototype.toString.call(
											navigation
										) === "[object Array]" &&
										navigation.length
											? navigation.map((item) =>
													item.hasDropDown ? (
														<NavDropDown
															key={item.name}
															href={item.href}
															name={item.name}
															navDropDownItems={
																item.dropDown
															}
															close={close}
														/>
													) : item.isExternal ? (
														<a
															key={item.name}
															href={item.href}
															target="_blank"
															className="font-medium text-slate-900 dark:text-slate-200"
														>
															{item.name}
														</a>
													) : (
														<Link
															key={item.name}
															href={item.href}
														>
															<a className="font-medium text-slate-900 dark:text-slate-200">
																{item.name}
															</a>
														</Link>
													)
											  )
											: null}
										{Object.prototype.toString.call(
											withAuth
										) === "[object Boolean]" && withAuth ? (
											<div className="flex space-x-2">
												<a
													href="https://letsupgrade.in/login"
													target="_blank"
													className="w-1/2 items-center justify-center rounded-md border border-neutral-900 bg-slate-900 px-4 py-2 text-center text-slate-100 transition ease-in hover:scale-[1.01] hover:shadow-lg"
												>
													Sign In
												</a>
												<a
													href="https://letsupgrade.in/register"
													target="_blank"
													className="w-1/2 items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-center text-slate-900 transition ease-in hover:scale-[1.01] hover:border-neutral-900 hover:bg-slate-900 hover:text-slate-100 hover:shadow-lg dark:border-neutral-800"
												>
													Sign Up
												</a>
											</div>
										) : null}
									</div>
								</div>
							)}
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</>
	);
};

Navbar.defaultProps = {
	dispatchToApp: () => false,
	focusModeEnabled: false,
	navigation: [],
	needFocusMode: false,
	withAuth: false,
};

export default Navbar;
