import { Dialog } from "@headlessui/react"
import { Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import React, { Fragment } from "react"

const SlideOver = ({ isOpen, children, close, title }) => {
	return (
		<>
			<Transition.Root
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={isOpen ? close : () => false}
				>
					<div className="fixed inset-0" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
										<div className="flex h-full flex-col overflow-y-scroll scrollbar-hide bg-white shadow-xl divide-y">
											<div className="px-4 sm:px-6 h-16 flex items-center">
												<div className="flex items-start justify-between w-full">
													<Dialog.Title className="text-lg font-medium text-gray-900">
														{title}
													</Dialog.Title>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"
															onClick={close}
														>
															<span className="sr-only">
																Close panel
															</span>
															<XMarkIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														</button>
													</div>
												</div>
											</div>
											<div className="relative flex-1 px-4 sm:px-6 overflow-hidden">
												{children}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}

export default SlideOver
