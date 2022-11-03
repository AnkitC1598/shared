"use client"

import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { classNames } from "../../../utils"

const TreeLevel = ({ level }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(prev => !prev)

	return (
		<>
			<div
				className="flex space-x-2 cursor-pointer text-slate-700 hover:text-slate-900 transition-all delay-500 p-2"
				onClick={toggleOpen}
			>
				{level.children.length ? (
					<ChevronRightIcon
						className={classNames(
							"h-6 w-6 transition-all",
							isOpen ? "rotate-90" : ""
						)}
					/>
				) : (
					<div className="h-6 w-6" />
				)}
				<div className="flex-1">{level.title}</div>
			</div>
			{level.children.length && isOpen ? (
				<div className="pl-4">
					{level.children.map(level => (
						<TreeLevel level={level} />
					))}
				</div>
			) : null}
		</>
	)
}

export default TreeLevel
