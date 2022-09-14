import React from "react";
import { classNames } from "../../../utils";

const Avatar = ({ alt, imgUrl, size }) => {
	if (Object.prototype.toString.call(imgUrl) !== "[object String]")
		return null;

	return (
		<>
			<img
				src={imgUrl}
				alt={alt}
				className={classNames("square rounded-md", size)}
			/>
		</>
	);
};

Avatar.defaultProps = {
	imgUrl: "https://avatars.dicebear.com/api/initials/initials-avatar.svg",
	alt: "avatar",
	size: "h-5",
};

export default Avatar;
