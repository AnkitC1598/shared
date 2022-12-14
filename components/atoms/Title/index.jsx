import React from "react"

const Title = ({ text }) => {
	if (Object.prototype.toString.call(text) !== "[object String]") return null

	return (
		<>
			<h1 className="text-3xl font-semibold leading-tight tracking-tight">
				{text}
			</h1>
		</>
	)
}

Title.defaultProps = {
	text: null,
}

export default Title
