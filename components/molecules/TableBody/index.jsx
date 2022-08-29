import { useMemo } from "react";
import { TableData } from "../../atoms";

const TableBody = ({ rows, search, sort, sortBy }) => {
	if (Object.prototype.toString.call(rows) !== "[object Array]") return null;

	rows = useMemo(() => {
		let tempRows = rows;
		if (tempRows.length < 1) return tempRows;
		if (search.length)
			tempRows = tempRows.filter((tempRow) =>
				tempRow[1].data.toLowerCase().includes(search)
			);
		if (sort)
			tempRows = tempRows.sort((a, b) =>
				sortBy.by === "asc"
					? a[sortBy.key] < b[sortBy.key]
						? -1
						: a[sortBy.key] > b[sortBy.key]
						? 1
						: 0
					: sortBy.by === "desc"
					? a[sortBy.key] > b[sortBy.key]
						? -1
						: a[sortBy.key] < b[sortBy.key]
						? 1
						: 0
					: 0
			);
		return tempRows;
	}, [rows, search, sortBy]);

	return (
		<tbody className="divide-y divide-gray-200 bg-white">
			{rows?.map((row, idx) => (
				<tr key={idx}>
					<TableData data={idx + 1} />
					{row.map((r, rIdx) => (
						<TableData
							key={rIdx}
							data={r.data}
							isLink={r.isLink}
							isIterable={r.isIterable}
							isStatus={r.isStatus}
						/>
					))}
				</tr>
			))}
		</tbody>
	);
};

TableBody.defaultProps = {
	rows: [],
	search: "",
	sort: false,
	sortBy: {},
};

export default TableBody;
