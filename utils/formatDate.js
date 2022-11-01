import { format } from "date-fns"

const convertToObject = date => {
	const unixTimeZero = Date.parse(date)
	let final = new Date(unixTimeZero)
	let day = final.getDate()
	let month = final.getMonth()
	let year = final.getFullYear()
	let hours = final.getHours()
	let minutes = final.getMinutes()
	let ampm = hours >= 12 ? "PM" : "AM"
	hours = hours % 12
	hours = hours ? hours : 12 // the hour '0' should be '12'
	minutes = minutes < 10 ? "0" + minutes : minutes
	let strTime = hours + ":" + minutes + " " + ampm
	const mL = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
	const mS = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	]
	const monthName = mS[month]
	return {
		day: day,
		month: monthName,
		year: year,
		time: strTime,
		date: `${day} ${monthName} ${year}`,
		dateTime: `${day} ${monthName} ${strTime}`,
	}
}

const formatDate = date => {
	return {
		primary: format(new Date(date), "EEE do LLL y p"),
		secondary: format(new Date(date), "LLL d, p"),
		tertiary: format(new Date(date), "EEE do LLL y"),
		normal: format(new Date(date), "do MMMM y"),
		chat: format(new Date(date), "p"),
		...convertToObject(date),
	}
}

export default formatDate
