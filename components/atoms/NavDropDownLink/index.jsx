import Link from "next/link"
import { forwardRef } from "react"

const NavDropDownLink = forwardRef(({ href, children, ...rest }, ref) => {
	return (
		<Link
			href={href}
			ref={ref}
			{...rest}
		>
			<>{children}</>
		</Link>
	)
})

export default NavDropDownLink
