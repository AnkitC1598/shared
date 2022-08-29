import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { classNames, urlify } from "../../../utils";

const Chat = ({ msgGroup }) => {
	const [isReadMore, setIsReadMore] = useState(true);

	return (
		<>
			<li className="group flex space-x-2 break-all px-8 py-4 hover:bg-slate-50 dark:hover:bg-slate-800">
				<img
					src={
						msgGroup.user.profileImageUrl
							? msgGroup.user.profileImageUrl
							: `https://avatars.dicebear.com/api/initials/${msgGroup.user?.name}.svg`
					}
					alt=""
					className="square h-5 rounded-md"
				/>
				<div className="flex w-full flex-col space-y-1">
					<div className="flex justify-between">
						<span className="flex items-center space-x-2">
							<span
								className="text-sm font-semibold text-slate-900 dark:text-slate-200"
								// style={
								// 	["admin", "moderator", "trainer"].includes(
								// 		msgGroup.user.role
								// 	)
								// 		? {
								// 			color: getHex(msgGroup.user.uid),
								// 		}
								// 		: {}
								// }
							>
								{msgGroup.user.name}
							</span>
							{["trainer", "admin", "moderator"].includes(
								msgGroup.user.role.toLowerCase()
							) ? (
								<span
									className={classNames(
										"group-hover:hidden inline-flex items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium",
										msgGroup.user.role === "trainer"
											? "bg-purple-100 text-purple-800"
											: msgGroup.user.role === "trainer"
											? "bg-yellow-100 text-yellow-800"
											: "bg-green-100 text-green-800"
									)}
								>
									<span>
										{msgGroup.user.role
											.charAt(0)
											.toUpperCase() +
											msgGroup.user.role.slice(1)}
									</span>
								</span>
							) : null}
						</span>
						<span className="hidden break-normal text-xs text-slate-300 group-hover:block">
							{formatDistanceToNow(new Date(msgGroup.createdAt), {
								addSuffix: true,
								includeSeconds: true,
							})}
						</span>
					</div>
					<div className="flex w-full flex-col items-start space-y-1">
						<div className="group-scoped message relative flex w-full items-center space-x-1">
							<div className="flex flex-col">
								{msgGroup.messages.map(
									({ _id, message: msg }) => (
										<div
											className={classNames(
												"overflow-anywhere mx-0 text-sm font-normal !leading-[18px]",
												urlify(msg).urls.length &&
													"!mt-2"
											)}
											key={_id}
										>
											<div
												className="!m-0 !inline text-sm leading-[18px]"
												dangerouslySetInnerHTML={{
													__html: isReadMore
														? msg.length > 150
															? `${
																	urlify(
																		msg.slice(
																			0,
																			150
																		)
																	).text
															  }...`
															: urlify(msg).text
														: urlify(msg).text,
												}}
											/>
											{msg._id}
											{msg.length > 150 && (
												<div
													className="cursor-pointer text-center text-xs text-lu-500"
													onClick={() =>
														setIsReadMore(
															!isReadMore
														)
													}
												>
													{isReadMore
														? "Show More"
														: "Show Less"}
												</div>
											)}
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</li>
		</>
	);
};

export default Chat;
