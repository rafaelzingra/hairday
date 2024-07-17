import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById('date')

export function schedules() {

    const date = selectedDate.value
    hoursLoad({date})
}