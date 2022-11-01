import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { classNames } from "../../../utils"

const Search = ({ className, placeholder, setSearch }) => {
	if (Object.prototype.toString.call(setSearch) !== "[object Function]")
		return null

	return (
		<>
			<div
				className={classNames(
					"flex items-center justify-center",
					className
				)}
			>
				<div className="relative h-full w-full text-slate-900 dark:text-slate-200">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlassIcon
							className="h-5 w-5"
							aria-hidden="true"
						/>
					</div>
					<input
						className="h-full w-full border-0 bg-slate-50 dark:bg-neutral-800 py-2 pl-10 pr-3 leading-5 focus:outline-none focus:ring-0 sm:text-sm"
						type="search"
						placeholder={placeholder}
						onChange={e => setSearch(e.target.value)}
						autoComplete="false"
					/>
				</div>
			</div>
		</>
	)
}

Search.defaultProps = {
	className: "",
	placeholder: "Search",
	setSearch: console.log,
}

export default Search
