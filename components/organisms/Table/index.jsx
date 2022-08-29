import React, { useMemo } from "react";
import { getTableRows } from "../../../utils";
import { TableBody, TableHead } from "../../molecules";

const Table = ({ headers, srHeader, search, tableData }) => {
	if (Object.prototype.toString.call(headers) !== "[object Array]")
		return null;
	if (Object.prototype.toString.call(tableData) !== "[object Array]") return null;

	const [sortBy, setSortBy] = React.useState({
		key: "idx",
		by: "asc",
	});

	const rows = useMemo(
		() => getTableRows({ tableData, headers }),
		[tableData, headers]
	);
	return (
		<div className="my-4 flex flex-col">
			<div className="flex flex-col space-y-4">
				<table className="relative h-full w-full flex-1 table-auto divide-y divide-gray-200 overflow-hidden rounded-lg">
					<TableHead
						srHeader={srHeader}
						headers={headers}
						setSortBy={setSortBy}
						sortBy={sortBy}
					/>
					<TableBody
						sort={headers.some(
							(header) => header.sortable === true
						)}
						rows={rows}
						search={search}
						sortBy={sortBy}
					/>
				</table>
			</div>
		</div>
	);
};

Table.defaultProps = {
	headers: [{ id: "name", label: "Name", sortable: false }],
	srHeader: { id: "idx", label: "#", sortable: false },
	search: "",
	tableData: [{ name: "Name" }],
};

export default Table;
