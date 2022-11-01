import { classNames } from "../../../utils"

const ProgressBar = ({
	max,
	progress,
	showValue,
	textColor,
	bgColor,
	trackColors,
	trackHeight,
}) => {
	return (
		<>
			<div className="flex w-full flex-col">
				<div className={classNames("flex w-full rounded-md", bgColor)}>
					{progress.reduce((acc, curr) => (acc += curr), 0) > max ||
					progress.reduce((acc, curr) => (acc += curr), 0) < 0 ? (
						<div
							className={classNames(
								"flex w-full items-center justify-center rounded-md",
								trackHeight
							)}
						>
							<svg
								className="aspect-square h-3/4 animate-spin text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
						</div>
					) : (
						progress.map((p, idx) => (
							<div
								key={p}
								className={classNames(
									"flex items-center justify-center text-xs font-medium leading-none",
									trackHeight,
									idx === 0 && "rounded-l-md",
									idx === progress.length - 1
										? "rounded-r-md"
										: "border-r border-neutral-700",
									trackColors[idx]
								)}
								style={{ width: `${p}%` }}
							>
								{showValue && progress > 0 ? (
									<span className={classNames(textColor)}>
										{p}%
									</span>
								) : null}
							</div>
						))
					)}
				</div>
			</div>
		</>
	)
}

ProgressBar.defaultProps = {
	max: 100,
	progress: [0],
	showValue: false,
	textColor: "dark:text-slate-900 text-slate-200",
	bgColor: "dark:bg-neutral-700 bg-neutral-200",
	trackColors: [
		"bg-purple-800 dark:bg-purple-400",
		"bg-purple-700 dark:bg-purple-300",
	],
	trackHeight: "h-6",
}

export default ProgressBar
