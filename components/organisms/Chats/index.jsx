import { Input } from "../../atoms";
import { Chat } from "../../molecules";

const Chats = ({ messages }) => {
	return (
		<>
			<div className="flex w-full flex-col bg-white text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{Object.prototype.toString.call(messages) === '[object Array]' && messages.length ? (
					<>
						<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-full">
							{messages.map((msgGroup, idx) => (
								<Chat
									key={
										msgGroup?.user?.uid +
										msgGroup.type +
										idx
									}
									msgGroup={msgGroup}
								/>
							))}
						</ul>
						<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Send Message" />
						</div>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noMessage.png"
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

Chats.defaultProps = {
	messages: []
}

export default Chats;
