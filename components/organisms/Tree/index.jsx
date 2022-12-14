"use client"

import { TreeLevel } from "../../atoms"

const Tree = ({ levels }) => {
	return (
		<>
			<div className="w-full flex flex-col space-y-1 select-none p-4 group">
				{levels.map(level => (
					<TreeLevel level={level} />
				))}
			</div>
		</>
	)
}

export default Tree
