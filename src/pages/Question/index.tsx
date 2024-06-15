import { useParams } from "react-router"
import styles from './Question.module.scss'
import { useFetchForumMessageByIdQuery } from "@/services/YourDoggoService"
import Loading from "@/components/Loading/Loading"

const Question = () => {
   const {id} = useParams()

   const {data: message, isLoading, isFetching, isError} = useFetchForumMessageByIdQuery(id as string)
   
   if (isLoading || isFetching) {
      return <Loading />
   }

   if (isError) {
      return <p>Ошибка</p>
   }

  return (
    message && (
      <div>
         {message.description}
      </div>
    )
  )
}

export default Question
