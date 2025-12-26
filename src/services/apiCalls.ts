import osuApiClient from "./axiosClient"
import { IBeatmap, IPlayer, IScore } from "../interfaces/interfaces.export"

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

export async function getRecent(id: string): Promise<Array<IScore>>{
    
    try{
        const response = await osuApiClient.get(`user/${id}/recent`)

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro nos scores: ", error)
        throw new Error("Erro nos scores: " + String(error))
    }
}

export async function getBeatmap(id: string): Promise<IBeatmap>{
    
    try{
        const response = await osuApiClient.get(`beatmap/${id}`)

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro no beatmap: ", error)
        throw new Error("Erro no beatmap: " + String(error))
    }
}

export async function getGlobalRanking(mode: number): Promise<Array<IPlayer>>{
    
    try{
        const response = await osuApiClient.get(`ranking/global?mode=${mode}`)

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro no ranking: ", error)
        throw new Error("Erro no ranking: " + String(error))
    }
}

export async function postCreateLink(id: string, name: string) {
    
    try{
        const response = await osuApiClient.post(`discord/createlink`,
                                                                    {
                                                                    discord_id: id,
                                                                    osu_name: name
                                                                    })

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro na linkagem: ", error)
        throw new Error("Erro na linkagem: " + String(error))
    }
}

export async function postCheckLink(id: string, code: string) {
    
    try{
        const response = await osuApiClient.post(`discord/checklink`,
                                                                    {
                                                                    discord_id: id,
                                                                    code: code
                                                                    })

        if(response.status != 200){
            throw new Error(response.data.error)
        }

        return response.data

    }catch(error){

        console.error("Erro na autorização: ", error)
        throw new Error("Erro na autorização: " + String(error))
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