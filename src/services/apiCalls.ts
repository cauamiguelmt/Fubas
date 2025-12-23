import IPlayer from "../interfaces/player.interface"
import osuApiClient from "./axiosClient"

export async function getPlayer(id: string): Promise<IPlayer>{
    
    try{
        const response = await osuApiClient.get(`user/${id}`)

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro no player: ", error)
        throw new Error("Erro no player: " + String(error))
    }
}

export async function postInvite(id: string) {
    
    try{
        const response = await osuApiClient.post(`invite/create`, { id: id })

        if(response.status != 201){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro no invite: ", error)
        throw new Error("Erro no invite: " + String(error))
    }
}