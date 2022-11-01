import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { BreadcrumbItem } from "../../atoms"

const Breadcrumb = ({ breadcrumbs }) => {
	if (Object.prototype.toString.call(breadcrumbs) !== "[object Array]")
		throw new Error("Breadcrumb: breadcrumbs must be an array")

	if (breadcrumbs.length === 0) return null

	return (
		<>
			<nav
				className="flex"
				aria-label="Breadcrumb"
			>
				<ol
					role="list"
					className="flex items-center space-x-4 overflow-x-auto"
				>
					<Link
						href="/"
						className="text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300"
					>
						<>
							<HomeIcon
								className="h-5 w-5 flex-shrink-0"
								aria-hidden="true"
							/>
							<span className="sr-only">Home</span>
						</>
					</Link>
					<span className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide">
						{breadcrumbs?.map(breadcrumb => (
							<BreadcrumbItem
								key={breadcrumb.name}
								label={breadcrumb.label}
								name={breadcrumb.name}
								to={breadcrumb.link}
							/>
						))}
					</span>
				</ol>
			</nav>
		</>
	)
}

Breadcrumb.defaultProps = {
	breadcrumbs: [],
}

export default Breadcrumb
