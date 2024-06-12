export interface IGalleryImg {
   _id: string
   title: string
   imgLink: string
   tags: string[]
   userId: string
   datetime: string
   login?: string
   isLiked: boolean
   likes: number
}

export interface IGalleryImgTotal {
   data: IGalleryImg[],
   totalCount: number
}

export interface FetchGalleryFilter {
   id?: string
   userLogin?: boolean
   userId?: string
   authUserId?: string | null
   limit?: number
   textQuery?: string
   liked?: boolean
   page?: number
   prevPage? : number
}

export interface CreateGalleryIMGData extends Omit<IGalleryImg, '_id' | 'datetime' | 'likes' | 'isLiked' | 'login'> {}