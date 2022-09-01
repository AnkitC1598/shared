import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Children, cloneElement, Fragment, useMemo, useState } from "react";
import Button from "../../atoms/Button";

const Modal = ({ btnLabel, btnIcon, customHandler, title, children }) => {
	const [newModalIsOpen, setNewModalIsOpen] = useState(false);
	const hasCustomHandler = useMemo(
		() =>
			Object.prototype.toString.call(customHandler) === "[object Object]",
		[customHandler]
	);
	const closeNewModal = () => {
		setNewModalIsOpen(false);
	};

	const openNewModal = () => {
		setNewModalIsOpen(true);
	};
	return (
		<>
			{!hasCustomHandler ? (
				<Button action={openNewModal} icon={btnIcon} label={btnLabel} />
			) : null}
			<Transition
				appear
				show={hasCustomHandler ? customHandler.isOpen : newModalIsOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={
						hasCustomHandler ? customHandler.close : closeNewModal
					}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										{title}
									</Dialog.Title>
									{Children.map(children, (child) => {
										return cloneElement(child, {
											close: hasCustomHandler
												? customHandler.close
												: closeNewModal,
										});
									})}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

Modal.defaultProps = {
	btnLabel: "",
	btnIcon: <PlusIcon className="h-6 w-6" />,
	title: "",
	children: Fragment,
	customAction: null,
};

export default Modal;
