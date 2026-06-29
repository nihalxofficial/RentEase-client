import { serverFetch } from "../core/server"

export const getProperties = async (filter, status) => {
  const statusParam = status ? `&status=${status}` : "";
  return serverFetch(`/properties?${filter}${statusParam}`);
};
export const getFeaturedProperties = async(status="approved")=>{
    return serverFetch(`/properties?$isFeatured=true&status=${status}`)
}

export const getPropertyById = async(id)=>{
    return serverFetch(`/properties/${id}`)
}

export const getPropertiesByOwner = async(id)=>{
    return serverFetch(`/properties?ownerId=${id}`)
}