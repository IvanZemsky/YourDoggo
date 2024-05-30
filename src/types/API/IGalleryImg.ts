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

export interface FetchGalleryFilter {
   id?: string
   userLogin?: boolean
   userId?: string | null
   limit?: number
   textQuery?: string
   liked?: boolean
}