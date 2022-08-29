import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { formatDistanceToNow } from "date-fns";
import { Fragment } from "react";
import { downloadFile } from "../../../utils";
import { Toggle } from "../../atoms";

const ResourcePreview = ({
	isOpen,
	close,
	resource,
	handleToggleVisibility,
}) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={close}
				>
					<div className="max-h-screen-ios max-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
						</Transition.Child>

						<span
							className="h-screen-ios inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="my-8 inline-flex max-h-[75vh] min-h-[50vh] min-w-[50vw] max-w-3xl transform flex-col overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-900">
								<div className="flex items-center justify-between">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-200"
									>
										{resource.name}
									</Dialog.Title>
									<div className="flex space-x-4">
										<Toggle
											defaultValue={resource.isVisible}
											onChange={handleToggleVisibility}
										/>
										{resource.isImage &&
										resource.ext !== "svg" ? (
											<div
												className="inline-flex justify-center rounded-lg bg-green-500 p-2 text-sm font-medium text-white hover:bg-green-600"
												onClick={() =>
													downloadFile(resource)
												}
											>
												<ArrowDownTrayIcon className="h-4 w-4" />
											</div>
										) : null}
										<button
											type="button"
											className="inline-flex justify-center rounded-lg p-2 text-sm font-medium text-black hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
											onClick={close}
										>
											<XMarkIcon className="h-4 w-4" />
										</button>
									</div>
								</div>
								<div className="mt-2 flex max-h-[75vh] flex-1 items-center justify-center overflow-hidden p-5">
									{resource.isImage &&
									resource.ext !== "svg" ? (
										<img
											src={resource.link}
											alt={resource.link}
											className="imgPreview max-w-[80%]"
										/>
									) : (
										<div className="flex flex-col items-center space-y-4">
											<span className="text-lg font-semibold dark:text-slate-200">
												No Preview Available
											</span>
											<div
												className="inline-flex items-center justify-center space-x-2 rounded-lg bg-green-500 p-2 text-sm font-medium text-white hover:bg-green-600"
												onClick={() =>
													downloadFile(resource)
												}
											>
												<ArrowDownTrayIcon className="h-6 w-6" />
												<span className="text-lg font-semibold">
													Download
												</span>
											</div>
										</div>
									)}
								</div>
								{resource.createdAt && (
									<time
										dateTime={resource.createdAt}
										className="w-full flex-shrink-0 whitespace-nowrap text-xs text-slate-400"
									>
										{formatDistanceToNow(
											new Date(resource.createdAt),
											{
												addSuffix: true,
												includeSeconds: true,
											}
										)}
									</time>
								)}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ResourcePreview;
