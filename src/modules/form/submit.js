import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const clientName = document.getElementById('client')
const currentDate = dayjs(new Date()).format("YYYY-MM-DD")

// sets the today's date in the calendar input
selectedDate.value = currentDate

// doesn't allow to select past dates
selectedDate.min = currentDate

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if (!name) {
            return alert('Informe o nome do cliente!')
        }

        const hourSelected = document.querySelector('.hour-selected')

        if (!hourSelected) {
            return alert('Informe o horário do agendamento!')
        }
        
        const [hour] = hourSelected.innerText.split(':')        
        const when = dayjs(selectedDate.value).add(hour, "hour")
        const id = new Date().getTime()       
        
        await scheduleNew({
            id,
            name,
            when
        })
        

    } catch (error) {
        alert('Não foi possível realizar o agendamento!')
    }
}