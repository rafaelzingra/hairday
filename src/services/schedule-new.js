import { apiConfig } from "./api-config"

 export async function scheduleNew({id,name,when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify({id,name,when}),
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert('Não foi possível agnedar. Tente novamente mais tarde.')
    }

 }