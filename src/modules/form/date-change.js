import { schedules } from "../schedules/load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedules()