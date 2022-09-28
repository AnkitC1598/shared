import { Menu } from "@headlessui/react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, BoltIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
	ArrowRightOnRectangleIcon,
	BoltSlashIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import CookieService from "../../../services/cookie.service";
import { classNames } from "../../../utils";
import { Avatar, ButtonLink } from "../../atoms";
import NavDropDown from "../../molecules/NavDropDown";

const Navbar = ({
	dispatch,
	focusModeEnabled,
	navigation,
	needFocusMode,
	withAuth,
	user,
}) => {
	if (
		withAuth &&
		Object.prototype.toString.call(dispatch) === "[object Function]" &&
		!["[object Object]", "[object Null]"].includes(
			Object.prototype.toString.call(user)
		)
	)
		throw new Error("Navbar: user prop must be passed with withAuth prop");

	const router = useRouter();
	const logout = () => {
		dispatch({ type: "LOGOUT" });
		CookieService.removeTokens();
		router.push("/login");
	};
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
											className="hidden h-8 sm:h-10 w-auto dark:block"
											src="/logo_white.png"
											alt="LetsUpgrade"
										/>
										<img
											className="block h-8 sm:h-10 w-auto dark:hidden"
											src="/logo.png"
											alt="LetsUpgrade"
										/>
									</a>
								</Link>
								<span className="flex space-x-4">
									{Object.prototype.toString.call(
										dispatch
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
												dispatch({
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
									user ? (
										<Menu
											as="div"
											className="relative inline-block text-left"
										>
											<div>
												<Menu.Button className="text-white bg-itm border-0 focus:outline-none flex items-center cursor-pointer justify-center h-10 space-x-2 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md">
													<Avatar
														imgUrl={
															user.profileImage
														}
														size="h-6"
													/>
													<div className="text-base">
														{user.name}
													</div>
													<ChevronDownIcon
														className="w-3 h-3 text-slate-900 dark:text-slate-200"
														aria-hidden="true"
													/>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="absolute right-0 w-24 mt-2 origin-top-right bg-neutral-200 dark:bg-neutral-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<div className="px-1 py-1 ">
														<Menu.Item>
															{({ active }) => (
																<button
																	className={classNames(
																		"flex rounded-md items-center w-full px-2 py-2 text-sm",
																		active
																			? "bg-purple-500 text-slate-200"
																			: "text-slate-900 dark:text-slate-200"
																	)}
																	onClick={
																		logout
																	}
																>
																	<ArrowRightOnRectangleIcon
																		className="w-5 h-5 mr-2"
																		aria-hidden="true"
																	/>
																	Logout
																</button>
															)}
														</Menu.Item>
													</div>
												</Menu.Items>
											</Transition>
										</Menu>
									) : (
										<span className="flex space-x-2 items-center">
											{router.asPath !== "/login" ? (
												<ButtonLink
													to="/login"
													label="Sign In"
													width="w-max"
													withCurrent={false}
												/>
											) : null}{" "}
											{router.asPath !== "/register" ? (
												<ButtonLink
													to="/register"
													label="Sign Up"
													width="w-max"
													withCurrent={false}
												/>
											) : null}
										</span>
									)
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
								<div className="rounded-lg bg-neutral-50 dark:bg-neutral-900 shadow-md ring-1 ring-black ring-opacity-5">
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
											<Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-0">
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
											user ? (
												<div
													className="text-white bg-itm border-0 focus:outline-none flex items-center cursor-pointer justify-center h-10 space-x-2 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md"
													onClick={() => {
														logout();
														close();
													}}
												>
													<Avatar
														imgUrl={
															user.profileImage
														}
														size="h-6"
													/>
													<div className="text-base">
														{user.name}
													</div>
												</div>
											) : (
												<span
													className="flex space-x-2 justify-evenly"
													onClick={close}
												>
													{router.asPath !==
													"/login" ? (
														<ButtonLink
															to="/login"
															label="Sign In"
															width="w-max"
															withCurrent={false}
														/>
													) : null}{" "}
													{router.asPath !==
													"/register" ? (
														<ButtonLink
															to="/register"
															label="Sign Up"
															width="w-max"
															withCurrent={false}
														/>
													) : null}
												</span>
											)
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
	dispatch: () => false,
	focusModeEnabled: false,
	navigation: [],
	needFocusMode: false,
	withAuth: false,
	user: undefined,
};

export default Navbar;
