import React from "react"
import { TableHeader } from "../../atoms"

const TableHead = ({ headers, srHeader, setSortBy, sortBy }) => {
	if (Object.prototype.toString.call(headers) !== "[object Array]")
		return null
	return (
		<thead className="sticky top-0 border-b-[1px] border-b-gray-200 bg-gray-50">
			<tr>
				<TableHeader
					label={srHeader.label}
					id={srHeader.id}
					setSortBy={setSortBy}
					sortable={srHeader.sortable}
					sortBy={sortBy}
				/>
				{headers.map(header => (
					<TableHeader
						key={header.label}
						label={header.label}
						id={header.id}
						setSortBy={setSortBy}
						sortable={header.sortable}
						sortBy={sortBy}
					/>
				))}
			</tr>
		</thead>
	)
}

TableHead.defaultProps = {
	headers: [{ id: "idx", label: "#", sortable: false }],
	srHeader: { id: "idx", label: "#", sortable: false },
	setSortBy: console.log,
	sortBy: {},
}

export default TableHead
