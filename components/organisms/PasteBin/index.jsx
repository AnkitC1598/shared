import { Input } from "../../atoms";
import { Resource } from "../../molecules";

const PasteBin = ({ resources }) => {
	return (
		<>
			<div className="flex w-full flex-col bg-white text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{Object.prototype.toString.call(resources) === '[object Array]' && resources.length ? (
					<>
						<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-screen">
							{resources.map((resource, idx) => (
								<Resource
									key={resource._id}
									resource={resource}
								/>
							))}
						</ul>
						<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Add Resource" />
						</div>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noResource.png"
								alt="No Agenda's Listed"
								className="w-[25%] md:w-[60%]"
							/>
							<div className="text-slate-500">
								No Resource's Listed
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

PasteBin.defaultProps = {
	resources: []
}

export default PasteBin;
