import { WishlistUpdatePayload, WishlistUpdateResponse } from "types/wishlist";
import { cmsApi } from ".";

export async function updateWishlist(payload: WishlistUpdatePayload) {
  const response = await cmsApi.put<WishlistUpdateResponse>("/wishlistS", payload);
  return response;
}
