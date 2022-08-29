import { useState } from "react";
import { defaultStyles, FileIcon } from "react-file-icon";
import { ResourcePreview } from "..";

const File = ({
	resource,
	handleToggleVisibility,
}) => {
	const [showPreview, setShowPreview] = useState(false);

	const closePreview = () => {
		setShowPreview(false);
	};
	return (
		<>
			<div className="flex w-full flex-col space-y-4">
				<div
					className="flex w-full items-center space-x-2 overflow-hidden"
					onClick={() => {
						setShowPreview(true);
					}}
				>
					<div className="square flex h-10 content-center justify-center">
						<FileIcon
							extension={resource.ext}
							{...defaultStyles[resource.ext]}
						/>
					</div>
					<div className="flex min-w-0 flex-1 flex-col">
						<span className="truncate whitespace-pre-line text-sm text-slate-900 dark:text-slate-200">
							{resource.name ||
								resource.link
									.split("/")
									.at(-1)
									.split("_")
									.at(-1)}
						</span>
					</div>
				</div>
				{resource.text && (
					<div
						className="break-words"
						dangerouslySetInnerHTML={{
							__html:
								resource.name ||
								resource.link
									.split("/")
									.at(-1)
									.split("_")
									.at(-1),
						}}
					/>
				)}
			</div>
			<ResourcePreview
				isOpen={showPreview}
				close={closePreview}
				resource={resource}
				handleToggleVisibility={() => handleToggleVisibility(resource)}
			/>
		</>
	);
};

export default File;
