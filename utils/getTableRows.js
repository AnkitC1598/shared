const getTableRows = ({ tableData, headers }) => {
	const headerIds = headers.map((header) => header.id);
	const filteredRows = [];
	tableData.forEach((c) => {
		const hasData = Object.keys(c).some((key) => headerIds.includes(key));
		const tempRows = [];
		if (hasData) {
			headers.forEach((header) => {
				if (c.hasOwnProperty(header.id.split('[')[0])) {
					tempRows.push({
						data:
							Object.prototype.toString.call(c[header.id]) ===
							"[object Array]"
								? c[header.id].map((temp) => ({
										label: temp.uid,
								  }))
								: header.id === "classStatus"
								? {
										label: c[header.id].status,
										className: c[header.id].color,
								  }
								: header.id === "classDate[date]"
								? c['classDate'].date
								: header.id === "classDate[time]"
								? c['classDate'].time
								: c[header.id],
						isSortable: header.isSortable,
						isStatus: header.isStatus,
						isLink: header.isLink,
						isIterable: header.isIterable,
					});
				}
			});
			filteredRows.push(tempRows);
		}
	});
	return filteredRows;
};

export default getTableRows;
