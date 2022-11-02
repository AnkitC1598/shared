import React from "react"

const Title = ({ text }) => {
	if (!text) return null

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
