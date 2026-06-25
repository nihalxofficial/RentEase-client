"use server";

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export async function addReview(reviewData, propertyId) {
  const result = await serverMutation("/reviews", reviewData);

  revalidatePath(`/properties/${propertyId}`);

  return result;
}