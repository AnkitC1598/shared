import {
	MoonIcon,
	SunIcon,
	SpeakerXMarkIcon,
	SpeakerWaveIcon
} from "@heroicons/react/solid";
import { useState } from "react";
import { useDarkMode } from "../../../hooks";
import { Toggle } from "../../atoms";

const Settings = () => {
	const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
	const [alertsEnabled, setAlertsEnabled] = useState(true);

	return (
		<>
			<div className="flex w-full flex-col divide-y divide-neutral-200 bg-white text-slate-900 h-screen-ios dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				<div className="w-full p-4">
					<Toggle
						label="Dark Mode"
						id="dark"
						falseIcon={<SunIcon className="h-3 w-3 text-lu-500" />}
						trueIcon={
							<MoonIcon className="h-3 w-3 text-gray-900" />
						}
						trueState={{
							bg: "bg-lu-500",
							icon: MoonIcon,
							iconColor: "text-gray-900",
						}}
						falseState={{
							bg: "bg-slate-200",
							icon: SunIcon,
							iconColor: "text-lu-500",
						}}
						value={darkModeEnabled}
						onChange={setDarkModeEnabled}
					/>
				</div>
				<div className="w-full p-4">
					<Toggle
						label="Alerts"
						id="alerts"
						trueState={{
							bg: "bg-lu-500",
							icon: SpeakerWaveIcon,
							iconColor: "text-gray-900",
						}}
						falseState={{
							bg: "bg-slate-200",
							icon: SpeakerXMarkIcon,
							iconColor: "text-gray-900",
						}}
						value={alertsEnabled}
						onChange={setAlertsEnabled}
					/>
				</div>
			</div>
		</>
	);
};

export default Settings;
