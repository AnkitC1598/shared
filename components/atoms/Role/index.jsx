import React from "react";
import { classNames } from "../../../utils";

const Role = ({ className, role }) => {
	return (
		<>
			{["trainer", "admin", "moderator"].includes(role.toLowerCase()) ? (
				<span
					className={classNames(
						"inline-flex items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium",
						className,
						role === "trainer"
							? "bg-purple-100 text-purple-800"
							: role === "trainer"
							? "bg-yellow-100 text-yellow-800"
							: "bg-green-100 text-green-800"
					)}
				>
					<span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
				</span>
			) : null}
		</>
	);
};

Role.defaultProps = {
	className: "",
	role: "member",
};

export default Role;
