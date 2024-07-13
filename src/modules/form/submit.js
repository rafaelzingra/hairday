import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const currentDate = dayjs(new Date()).format("YYYY-MM-DD")

// sets the today's date in the calendar input
selectedDate.value = currentDate

// doesn't allow to select past dates
selectedDate.min = currentDate

form.onsubmit = (event) => {
    event.preventDefault()
}