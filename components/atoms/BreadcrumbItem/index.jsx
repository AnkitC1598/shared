import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Tooltip } from "..";

const BreadcrumbItem = ({ name, label, to }) => {
	return (
		<>
			<li className="group relative flex items-center overflow-y-visible">
				{to !== null ? (
					<Link href={to}>
						<a className="flex">
							<ChevronRightIcon
								className="h-5 w-5 flex-shrink-0 text-gray-400"
								aria-hidden="true"
							/>
							<span className="ml-4 text-sm font-medium text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300">
								{label}
							</span>
						</a>
					</Link>
				) : (
					<div className="flex items-center">
						<ChevronRightIcon
							className="h-5 w-5 flex-shrink-0 text-gray-400"
							aria-hidden="true"
						/>
						<span className="ml-4 text-sm font-medium text-purple-800 dark:text-purple-400">
							{label}
						</span>
					</div>
				)}
				<Tooltip position="top" label={name} />
			</li>
		</>
	);
};

BreadcrumbItem.defaultProps = {
	name: null,
	label: null,
	to: null,
};

export default BreadcrumbItem;
