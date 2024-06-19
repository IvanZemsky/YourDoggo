export interface IForumComment {
   _id: string
   forummessageId: string
   userId: string
   text: string
   datetime: string
   login?: string
}

export interface IForumCommentTotal {
   data: IForumComment[],
   totalCount: number
}

export interface FetchForumCommentFilter {
   id?: string
   userLogin?: boolean
   userId?: string
   limit?: number
   textQuery?: string
   page?: number
   prevPage? : number
   isByUser?: boolean
}


export interface CreateForumCommenteData extends Omit<IForumComment, '_id' | 'datetime' | 'login'> {}