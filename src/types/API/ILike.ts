import { APIEndpoints } from "@/constants/API"

export type LikeEndpoints = APIEndpoints.ARTICLES | APIEndpoints.GALLERY;

export interface ILike {
   liked: boolean,
   likes: number
}

export interface FetchLike {
   userId: string
   likedItemId: string
   endpoint: LikeEndpoints
}

// export interface FetchGalleryLike {
//    userId: string
//    galleryimgId: string
// }

// export interface FetchArticleLike {
//    userId: string
//    articleId: string
// }