import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = ({ setSearch }) => {
	return (
		<>
			<div className="border-b-2 border-neutral-200 p-4 dark:border-neutral-800">
				<div className="relative text-slate-500 focus-within:text-slate-500">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
					</div>
					<input
						className="block w-full rounded-md border border-transparent bg-slate-300 py-2 pl-10 pr-3 leading-5 text-slate-500 placeholder-slate-500 focus:border-neutral-300 focus:bg-white focus:text-slate-900 focus:placeholder-slate-500 focus:shadow focus:outline-none focus:ring-0 dark:border-neutral-800 dark:bg-neutral-300 sm:text-sm"
						placeholder="Search User"
						onChange={(e) => setSearch(e.target.value)}
						autoComplete="false"
					/>
				</div>
			</div>
		</>
	);
};

export default Search;
