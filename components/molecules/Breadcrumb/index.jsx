import { HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { BreadcrumbItem } from "../../atoms";

const Breadcrumb = ({ pages }) => {
	return (
		<>
			<nav className="flex" aria-label="Breadcrumb">
				<ol
					role="list"
					className="flex items-center space-x-4 overflow-x-auto"
				>
					<Link href="/">
						<a className="text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300">
							<HomeIcon
								className="h-5 w-5 flex-shrink-0"
								aria-hidden="true"
							/>
							<span className="sr-only">Home</span>
						</a>
					</Link>
					<span className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide">
						{pages?.map((page) => (
							<BreadcrumbItem
								key={page.name}
								label={page.label}
								name={page.name}
								to={page.link}
							/>
						))}
					</span>
				</ol>
			</nav>
		</>
	);
};

Breadcrumb.defaultProps = {
	pages: [],
};

export default Breadcrumb;
