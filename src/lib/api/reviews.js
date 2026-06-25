import { serverFetch } from "../core/server"

export const getReviews = async()=>{
    return serverFetch(`/reviews`)
}

export const getReviewsByProperty = async(propertyId)=>{
    return serverFetch(`/reviews?propertyId=${propertyId}`)
}