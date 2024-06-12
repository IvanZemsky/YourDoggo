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

export interface IArticleTotal {
   data: IArticle[],
   totalCount: number
}

export interface FetchArticleFilter {
   id?: string
   userLogin?: boolean
   userId?: string
   authUserId?: string | null
   limit?: number
   textQuery?: string
   liked?: boolean
   page?: number
   prevPage? : number
   isByUser?: boolean
}

export interface CreateArticleData extends Omit<IArticle, '_id' | 'datetime' | 'likes' | 'isLiked' | 'login'> {}