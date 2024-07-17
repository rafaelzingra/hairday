import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    hours.innerHTML=""
    const openHours = openingHours.map((hour) => {
        
        const [schedules] = hour.split(':')
        // console.log(schedules)
        const isHourAvailable = dayjs(date).add(schedules, "hour").isAfter(dayjs())
        // console.log(schedules, isHourPast)

        return {
            hour,
            available: isHourAvailable
        }
    })    

    openHours.forEach(({ hour, available}) => {
        const li = document.createElement("li")
        li.classList.add("hour")        
        li.classList.add(available ? 'hour-available': 'hour-unavailable')
        li.textContent = hour

        if (hour === "9:00") {
            hoursHeaderAdd("Manhã")            
        }
        else if (hour === "13:00") {
            hoursHeaderAdd("Tarde")
        }
        else if (hour === "18:00") {
            hoursHeaderAdd("Noite")
        }

        hours.append(li)        
    })

    hoursClick()
}

function hoursHeaderAdd( title ){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)
}