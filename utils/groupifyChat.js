// eslint-disable-next-line no-unused-vars
const dateSegment = (chats, dateSegmentedChat) => {
	chats.forEach((val, idx) => {
		return new Date(val?.createdAt).toDateString() !==
			new Date(chats[idx + 1]?.createdAt).toDateString() &&
			!val?.type?.includes("member")
			? dateSegmentedChat.push(
					{
						...val,
						type: "message",
					},
					{
						date: new Date(val?.createdAt).toDateString(),
						type: "dateDiff",
						createdAt: val?.createdAt,
					}
			  )
			: dateSegmentedChat.push({
					...val,
					type: val?.type ? val?.type : "message",
			  })
	})
	return dateSegmentedChat
}

const pusher = (arr, val) => arr.push(val)

const groupifyChat = (chats, groupedChats, reverse = false) => {
	// const dateSegmentedChat = dateSegment(
	//     chats,
	//     target.length ? target : []
	// );
	chats.forEach((chat, idx) => {
		const prevUID = groupedChats.length
			? groupedChats.at(-1)?.user?.uid
			: chats[idx - 1]?.user?.uid

		const prevType = groupedChats.length
			? groupedChats.at(-1)?.type
			: chats[idx - 1]?.type

		if (chat.type?.includes("member")) {
			if (prevType === chat.type) {
				groupedChats.at(-1).users.push(chat.msg)
			} else {
				pusher(groupedChats, {
					type: `member${chat.status}`,
					users: [chat.msg],
				})
			}
		} else if (chat.type === "dateDiff") {
			pusher(groupedChats, {
				type: chat.type,
				date: chat.date,
			})
		} else {
			if (chat.user.uid !== prevUID) {
				const user = chat.user
				delete chat.user
				pusher(groupedChats, {
					user,
					type: "message",
					createdAt: chat.createdAt,
					messages: [chat],
				})
			} else {
				delete chat.user
				groupedChats.at(-1).createdAt = chat.createdAt
				groupedChats.at(-1).messages.push(chat)
			}
		}
	})
	return groupedChats
}

export default groupifyChat
