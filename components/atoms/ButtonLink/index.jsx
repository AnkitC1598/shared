import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../../../utils";

const ButtonLink = ({ to, bgColor, color, label, weight }) => {
	const { asPath: path } = useRouter();

	return (
		<>
			<Link href={`${path === "/" ? "" : path}${to}`}>
				<a
					className={classNames(
						"w-full rounded-md px-4 py-2 text-center text-sm shadow-sm focus:outline-none focus:ring-0",
						bgColor,
						color,
						weight
					)}
				>
					{label}
				</a>
			</Link>
		</>
	);
};

ButtonLink.defaultProps = {
	to: "/",
	bgColor:
		"bg-neutral-800 hover:bg-purple-600 dark:bg-gray-100 dark:hover:bg-purple-200",
	color: "dark:text-slate-900 text-slate-200",
	weight: 'font-semibold',
	label: "Start",
};

export default ButtonLink;
