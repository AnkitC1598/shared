"use client"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { classNames } from "../../../utils"

const TreeLevel = ({ level }) => {
	const [isOpen, setIsOpen] = useState(true)

	const toggleOpen = () => setIsOpen(prev => !prev)

	return (
		<>
			<div
				className="flex space-x-2 cursor-pointer text-slate-700 hover:text-slate-900 transition-all delay-500 p-2 relative z-10"
				onClick={toggleOpen}
			>
				{level.children?.length ? (
					<ChevronRightIcon
						className={classNames(
							"min-h-6 h-6 min-w-6 w-6 transition-all bg-white",
							isOpen ? "rotate-90" : ""
						)}
					/>
				) : (
					<div className="h-6 w-6" />
				)}
				<div className="flex-1">{level.title}</div>
			</div>
			{level.children?.length && isOpen ? (
				<div className="pl-6 relative">
					<span
						className={classNames(
							"absolute left-4 -top-4 bottom-0 z-0 translate-x-[3.5px] border-l border-neutral-300 group-hover:border-neutral-400"
						)}
					/>
					{level.children?.map(level => (
						<TreeLevel level={level} />
					))}
				</div>
			) : null}
		</>
	)
}

export default TreeLevel
