import { useState } from "react";
import { classNames } from "../../../utils";
import { Search } from "../../atoms";
import { Participant } from "../../molecules";

const Participants = ({ participants, user }) => {
	const [search, setSearch] = useState("");

	return (
		<>
			<div className="flex w-full flex-col bg-white text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{Object.prototype.toString.call(user) === '[object Object]' && user.name ? (
					<div className="flex w-full flex-col items-center space-y-4 bg-neutral-800 p-4">
						<img
							className="aspect-square h-28 w-28 rounded-md"
							src="https://via.placeholder.com/200"
						/>
						<div className="group relative flex flex-col items-center space-y-2">
							<span className="text-xl font-medium text-slate-900 dark:text-slate-200">
								{user.name}
							</span>
							<a
								href={`https://letsupgrade.in/user/${user.username}`}
								target="_blank"
								className="!mt-0 font-medium text-slate-900 hover:text-lu-900 dark:text-slate-200 hover:dark:text-lu-200"
							>
								@{user.username}
							</a>
							{["trainer", "admin", "moderator"].includes(
								user.role.toLowerCase()
							) ? (
								<span
									className={classNames(
										"inline-flex w-max items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium",
										user.role === "trainer"
											? "bg-purple-100 text-purple-800"
											: user.role === "trainer"
												? "bg-yellow-100 text-yellow-800"
												: "bg-green-100 text-green-800"
									)}
								>
									<span>
										{user.role.charAt(0).toUpperCase() +
											user.role.slice(1)}
									</span>
								</span>
							) : null}
						</div>
					</div>
				) : null}
				{Object.prototype.toString.call(participants) === '[object Array]' && participants.length ? (
					<>
						<Search setSearch={setSearch} />
						<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-white text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
							{participants
								.filter((p) =>
									p.name
										?.toLowerCase()
										?.includes(search?.toLowerCase())
								)
								.sort((a, b) => {
									if (!a.participantId) return 1;
									if (!b.participantId) return -1;
									return 0;
								})
								.map((participant) => (
									<li
										key={participant.uid}
										className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
									>
										<Participant
											participant={participant}
										/>
									</li>
								))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noParticipants.png"
								alt="No Participant's Yet"
								className="w-[25%] md:w-[60%]"
							/>
							<p className="text-slate-500">
								No Participant's Yet
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

Participants.defaultProps = {
	participants: [],
	user: {}
}

export default Participants;
