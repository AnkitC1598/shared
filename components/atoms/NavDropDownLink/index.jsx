import Link from "next/link";
import { forwardRef } from "react";

const NavDropDownLink = forwardRef(({ href, children, ...rest }, ref) => {
	return (
		<Link href={href}>
			<a ref={ref} {...rest}>
				{children}
			</a>
		</Link>
	);
});

export default NavDropDownLink;
