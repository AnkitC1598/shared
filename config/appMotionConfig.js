export default {
	initialState: {
		opacity: 0,
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
	},
	animateState: {
		opacity: 1,
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
	},
	exitState: {
		clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
	},
	transitionState: {
		duration: 0.75,
	},
}
