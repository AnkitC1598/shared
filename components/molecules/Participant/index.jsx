import { classNames } from "../../../utils";
import { Tooltip } from "../../atoms";

const user = {
	uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t2",
	name: "Ankit Chaudhari",
	username: "ankit_chaudhari",
	profileImageUrl:
		"https://cdn.letsupgrade.net/aVNhQHe1N8ZibeFmGh5zK8eAh9t2/profile/displayImage.png",
	role: "student",
	handRaiseStatus: null,
	lastDoubtId: null,
	permissions: { chat: { isBanned: false, time: 0 } },
};

const Participant = ({ participant }) => {
	return (
		<>
			<div className="flex items-center p-4">
				<div className="flex w-full flex-1 items-center">
					<div className="flex-shrink-0">
						{participant.participantId ? (
							// <MeetingParticipantImage
							// 	participant={participant}
							// />
							<></>
						) : (
							<img
								src={
									participant.profileImageUrl
										? participant.profileImageUrl
										: `https://avatars.dicebear.com/api/initials/${participant.name}.svg`
								}
								alt={participant.name}
								className="square h-10 rounded-md"
							/>
						)}
					</div>
					<div className="min-w-0 flex-1 px-4 md:grid md:gap-1">
						<div className="w-[80%] truncate">
							<div className="group relative flex space-x-1">
								<span
									className={classNames(
										"truncate text-sm font-medium text-slate-900 dark:text-slate-200",
										participant.participantId &&
											"!text-lu-500"
									)}
								>
									{user.uid === participant.uid
										? "You"
										: participant.name}
								</span>
								{["trainer", "admin", "moderator"].includes(
									participant.role.toLowerCase()
								) ? (
									<span
										className={classNames(
											"inline-flex items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium",
											participant.role === "trainer"
												? "bg-purple-100 text-purple-800"
												: participant.role === "trainer"
												? "bg-yellow-100 text-yellow-800"
												: "bg-green-100 text-green-800"
										)}
									>
										<span>
											{participant.role
												.charAt(0)
												.toUpperCase() +
												participant.role.slice(1)}
										</span>
									</span>
								) : null}
								<Tooltip
									position="top"
									label={`${participant.name} (${
										participant.role
											.charAt(0)
											.toUpperCase() +
										participant.role.slice(1)
									})`}
								/>
							</div>
							<a
								href={`https://letsupgrade.in/user/${participant.username}`}
								target="_blank"
								className="flex items-center text-sm text-slate-500 hover:text-lu-500 dark:text-slate-400"
								rel="noreferrer"
							>
								<span className="truncate">
									@{participant.username}
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Participant;
