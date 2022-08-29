import { Tab, Transition } from "@headlessui/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import {
    ArrowLeftOnRectangleIcon,
    ArrowRightOnRectangleIcon, ChatBubbleBottomCenterTextIcon,
    ClipboardDocumentListIcon,
    FolderIcon,
    HandIcon, UserGroupIcon
} from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Agendas, Chats, Doubts, Participants, PasteBin, Settings } from "..";
import { classNames } from "../../../utils";
import { Tooltip } from "../../atoms";

const Tabs = [
	{
		label: "agenda",
		component: <Agendas />,
		icon: <ChatBubbleBottomCenterTextIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
	{
		label: "chat",
		component: <Chats />,
		icon: <ClipboardDocumentListIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
	{
		label: "doubt",
		component: <Doubts />,
		icon: <HandIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
	{
		label: "pastebin",
		component: <PasteBin />,
		icon: <FolderIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
	{
		label: "participant",
		component: <Participants />,
		icon: <UserGroupIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
	{
		label: "settings",
		component: <Settings />,
		icon: <Cog6ToothIcon className="h-7 w-7 md:h-5 md:w-5" />,
	},
];

const Sidebar = ({ enabledSections, defaultSection, dispatchToSidebar, sideBarOpen }) => {
	if (Object.prototype.toString.call(enabledSections) !== '[object Array]') return null
	if (Object.prototype.toString.call(dispatchToSidebar) !== '[object Function]') return null
	if (Object.prototype.toString.call(sideBarOpen) !== '[object Boolean]') return null

	const findTabIndex = (tabLabel) => {
		const found = Tabs.filter((tab) =>
			enabledSections.includes(tab.label)
		).findIndex((tab) => tab.label === tabLabel);
		if (found) return found;
		return 0;
	};

	return (
		<>
			<div className="relative flex h-full w-full bg-slate-50 dark:bg-neutral-900">
				<>
					<Tab.Group
						defaultIndex={findTabIndex(defaultSection)}
						onChange={(val) => {
							dispatchToSidebar({
								type: "OPEN_SIDEBAR_STATE",
								payload: { type: "chat" },
							});
						}}
					>
						<Transition
							as={Fragment}
							show={sideBarOpen}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Tab.Panels className="z-10 w-full bg-slate-50 dark:bg-neutral-900">
								{Tabs.filter((tab) =>
									enabledSections.includes(tab.label)
								).map((tab) => (
									<Tab.Panel
										key={tab.label}
										className="h-full w-full divide-y divide-neutral-200 bg-slate-50 outline-none transition-all duration-200 dark:divide-neutral-800 dark:bg-neutral-900"
									>
										<div className="flex h-16 w-full items-center space-x-2 bg-slate-50 px-8 py-2 text-slate-900 dark:bg-neutral-900 dark:text-slate-200">
											<span className="flex-1 text-[28px] font-bold capitalize">
												{tab.label}
											</span>
										</div>
										{tab.component}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Transition>
						<Tab.List className="z-20 mx-4 flex flex-row space-x-6 border-l border-neutral-200 bg-slate-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900  md:mx-0 md:flex-col md:space-y-5 md:space-x-0 md:rounded-none md:p-2 md:pr-2">
							{Tabs.filter((tab) =>
								enabledSections.includes(tab.label)
							).map((tab) => (
								<span
									key={tab.label}
									className={classNames(
										tab.label === "settings"
											? "flex flex-grow flex-col justify-end space-y-3"
											: ""
									)}
								>
									<Tab
										className={({ selected }) =>
											classNames(
												"group relative flex aspect-square w-full flex-col items-center justify-center rounded-md text-sm transition-all duration-200 focus-visible:outline-0",
												selected && sideBarOpen
													? "bg-slate-300 text-slate-900 dark:bg-white dark:text-slate-900"
													: "bg-white text-slate-900 hover:bg-slate-200 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-slate-700"
											)
										}
									>
										{tab.icon}
										<Tooltip
											position="left"
											label={tab.label}
										/>
									</Tab>
								</span>
							))}
							<span
								className={classNames(
									enabledSections.includes("settings")
										? ""
										: "flex flex-grow flex-col justify-end space-y-3"
								)}
							>
								<span
									className="group relative flex aspect-square w-full flex-col items-center justify-center rounded-full bg-slate-200 p-3 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-300 focus-visible:outline-0 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-slate-700"
									onClick={() =>
										dispatchToSidebar({
											type: "TOGGLE_SIDEBAR_STATE",
										})
									}
								>
									{sideBarOpen ? (
										<ArrowRightOnRectangleIcon className="h-5 w-5" />
									) : (
										<ArrowLeftOnRectangleIcon className="h-5 w-5" />
									)}
									<Tooltip
										position="left"
										label={
											sideBarOpen
												? "Close Sidebar"
												: "Open Sidebar"
										}
									/>
								</span>
							</span>
						</Tab.List>
					</Tab.Group>
				</>
			</div>
		</>
	);
};

Sidebar.defaultProps = {
	enabledSections: [
		"agenda",
		"chat",
		"doubt",
		"pastebin",
		"participant",
		"settings",
	],
	defaultSection: "agenda",
	dispatchToSidebar: () => false,
	sideBarOpen: true
};

export default Sidebar;
