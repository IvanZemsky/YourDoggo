export interface IForumMessage {
   _id: string
   title: string
   userId: string
   datetime: string
   login?: string
}

export interface IForumMessageTotal {
   data: IForumMessage[],
   totalCount: number
}

export interface FetchForumMessageFilter {
   id?: string
   userLogin?: boolean
   userId?: string
   authUserId?: string | null
   limit?: number
   textQuery?: string
   page?: number
   prevPage? : number
   isByUser?: boolean
}

export interface CreateForumMessageData extends Omit<IForumMessage, '_id' | 'datetime' | 'likes' | 'isLiked' | 'login'> {}