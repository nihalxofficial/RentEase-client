import { serverMutation } from "../core/server"

export const updateUser = async(id,data)=>{
    return serverMutation(`/users/${id}`, data, "PATCH")
}