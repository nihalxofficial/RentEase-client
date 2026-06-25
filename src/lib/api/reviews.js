import { serverFetch } from "../core/server"

export const getReviews = async()=>{
    return serverFetch(`/reviews`)
}