import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { formatDistanceToNow } from "date-fns";
import { File } from "..";
import { Toggle } from "../../atoms";

const Resource = ({ resource }) => {
	const handleToggleVisibility = (resource) => {
		console.log(!resource.isVisible);
		// toggleVisibility({
		// 	_id: resource._id,
		// 	roomId: pasteBinRoomId || classCode,
		// 	isVisible: !resource.isVisible,
		// });
	};

	return (
		<>
			<li className="flex flex-col space-y-2 divide-y divide-neutral-200 bg-white py-4 dark:divide-neutral-800 dark:bg-neutral-900">
				<div className="flex flex-col space-y-4 px-4">
					<div className="flex items-start">
						{resource.source === "file" ? (
							// resource.isImage ? (
							// 	<Image
							// 		resource={resource}
							// 		handleToggleVisibility={
							// 			handleToggleVisibility
							// 		}
							// 	/>
							// ) : (
							<File
								resource={resource}
								handleToggleVisibility={() =>
									handleToggleVisibility(resource)
								}
							/>
						) : (
							// )
							resource.source === "input" && (
								<div className="w-full">
									{resource.link.length ? (
										<LinkPreview
											url={
												typeof resource.link ===
												"object"
													? resource.link[0]
													: resource.link
											}
											imageHeight={0}
											descriptionLength={0}
											borderRadius={5}
											openInNewTab={true}
											className="mb-2 break-words"
										/>
									) : null}
									<div
										className="break-words"
										dangerouslySetInnerHTML={{
											__html: resource.text,
										}}
									/>
								</div>
							)
						)}
					</div>
					<span className="flex justify-between">
						<span className="text-xs text-slate-300">
							{formatDistanceToNow(new Date(resource.createdAt), {
								addSuffix: true,
								includeSeconds: true,
							})}
						</span>
						<Toggle
							value={resource.isVisible}
							size="sm"
							onChange={() => handleToggleVisibility(resource)}
						/>
					</span>
				</div>
			</li>
		</>
	);
};

export default Resource;
