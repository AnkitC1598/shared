import Link from "next/link"
import { classNames } from "../../../utils"

const TableData = ({ data, isIterable, isLink, isStatus }) => {
	return (
		<>
			<td className="whitespace-nowrap px-6 py-2 text-center">
				{Object.prototype.toString.call(data) === "[object Array]" &&
				Object.prototype.toString.call(isIterable) ===
					"[object Boolean]" &&
				isIterable ? (
					<div className="m-auto flex cursor-pointer flex-wrap items-center justify-start gap-2 text-gray-900">
						{data.length
							? data.map(d => (
									<div
										key={d.label}
										className={classNames(
											"rounded-md bg-yellow-300 px-3 text-xs leading-7 text-black",
											d.className
										)}
									>
										{d.label}
									</div>
							  ))
							: null}
					</div>
				) : Object.prototype.toString.call(data) ===
						"[object Object]" &&
				  Object.prototype.toString.call(isLink) ===
						"[object Boolean]" &&
				  isLink ? (
					<Link
						href={data.href}
						className="text-gray-900 hover:text-lu"
					>
						<>{data.label}</>
					</Link>
				) : Object.prototype.toString.call(data) ===
						"[object Object]" &&
				  Object.prototype.toString.call(isStatus) ===
						"[object Boolean]" &&
				  isStatus ? (
					<div className="cursor-pointer text-gray-900">
						<span
							className={classNames(
								`h-8 rounded-md px-3 py-1.5 text-xs leading-7 text-white ${data.className}`,
								data.label === "Live" ? "animate-blink" : ""
							)}
						>
							{data.label}
						</span>
					</div>
				) : Object.prototype.toString.call(data) ===
						"[object String]" ||
				  Object.prototype.toString.call(data) === "[object Number]" ? (
					<div className="text-gray-900">{data}</div>
				) : null}
			</td>
		</>
	)
}

TableData.defaultProps = {
	data: null,
	isIterable: false,
	isLink: false,
	isStatus: false,
}

export default TableData
