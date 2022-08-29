import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import { classNames } from "../../../utils";

const TableHeader = ({ className, id, label, setSortBy, sortable, sortBy }) => {
	return (
		<th
			scope="col"
			className={classNames(
				"select-none px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500",
				className,
				sortable &&
					Object.prototype.toString.call(setSortBy) ===
						"[object Function]"
					? "cursor-pointer"
					: "cursor-default"
			)}
			onClick={() =>
				sortable &&
				Object.prototype.toString.call(setSortBy) ===
					"[object Function]"
					? setSortBy((prev) => ({
							key: `classDate[${id}]`,
							by: prev?.by === "asc" ? "desc" : "asc",
					  }))
					: false
			}
		>
			<span className="flex items-center justify-center space-x-2">
				<span>{label}</span>
				{sortable &&
				Object.prototype.toString.call(sortBy) === "[object Object]" ? (
					<>
						{sortBy.key === `classDate[${id}]` &&
							sortBy.by === "asc" && (
								<ArrowUpIcon
									className="h-4 w-4"
									aria-hidden="true"
								/>
							)}
						{sortBy.key === `classDate[${id}]` &&
							sortBy.by === "desc" && (
								<ArrowDownIcon
									className="h-4 w-4"
									aria-hidden="true"
								/>
							)}
					</>
				) : null}
			</span>
		</th>
	);
};

TableHeader.defaultProps = {
	className: "",
	id: "idx",
	label: "#",
	setSortBy: console.log,
	sortable: false,
	sortBy: {},
};

export default TableHeader;
