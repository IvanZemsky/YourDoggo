export interface IGalleryImg {
   _id: string
   title: string
   imgLink: string
   tags: string[]
   userId: string
   datetime: string
   login?: string
}

export interface FetchGalleryFilter {
   id?: string
   userLogin?: boolean
   limit?: number
   textQuery?: string
}