import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

const selectedDate = document.getElementById('date')

export async function schedules() {

    const date = selectedDate.value

    const schedules = await scheduleFetchByDay({ date })
    
    schedulesShow({schedules})

    hoursLoad({date})
}