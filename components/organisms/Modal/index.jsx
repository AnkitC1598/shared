"use client"

import { Dialog, Transition } from "@headlessui/react"
import { PlusIcon } from "@heroicons/react/20/solid"
import { Fragment, useMemo, useState } from "react"
import { classNames } from "../../../utils"
import Button from "../../atoms/Button"

const Modal = ({
	btnLabel,
	btnIcon,
	customHandler,
	children,
	dimensions,
	className,
}) => {
	const hasCustomHandler =
		Object.prototype.toString.call(customHandler) === "[object Object]"

	const [isOpen, setIsOpen] = useState(false)

	const close = () => {
		setIsOpen(false)
	}

	const open = () => {
		setIsOpen(true)
	}

	return (
		<>
			{!hasCustomHandler ? (
				<Button
					action={open}
					icon={btnIcon}
					label={btnLabel}
				/>
			) : null}
			<Transition
				appear
				show={hasCustomHandler ? customHandler.isOpen : isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={hasCustomHandler ? customHandler.close : close}
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
								<Dialog.Panel
									className={classNames(
										"w-full transform overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900 text-left align-middle shadow-xl transition-all",
										dimensions,
										className
									)}
								>
									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

Modal.defaultProps = {
	btnLabel: "",
	btnIcon: <PlusIcon className="h-6 w-6" />,
	children: Fragment,
	customAction: null,
	dimensions: "max-w-md",
	className: "",
}

export default Modal
