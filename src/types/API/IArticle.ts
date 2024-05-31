export interface IArticle {
   _id: string
   title: string
   imgLink: string
   text: string
   tags: string[]
   userId: string
   datetime: string
   login?: string
   isLiked: boolean
   likes: number
}

export interface FetchArticleFilter {
   id?: string
   userLogin?: boolean
   userId?: string | null
   limit?: number
   textQuery?: string
   liked?: boolean
}