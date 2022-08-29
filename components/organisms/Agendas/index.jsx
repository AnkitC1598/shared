import { Input } from "../../atoms";
import { Agenda } from "../../molecules";

const Agendas = ({ agendas }) => {
	return (
		<>
			<div className="flex w-full flex-col bg-white text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{Object.prototype.toString.call(agendas) === '[object Array]' && agendas.length ? (
					<>
						<span className="border-b border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Add Agenda" />
						</span>
						<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-screen">
							{agendas.map((agenda, idx) => (
								<Agenda key={agenda.id} agenda={agenda} />
							))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noAgenda.png"
								alt="No Agenda's Listed"
								className="w-[25%] md:w-[60%]"
							/>
							<div className="text-slate-500">
								No Agenda's Listed
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

Agendas.defaultProps = {
	agendas: []
}

export default Agendas;
