import { useState } from 'react'
import { incremenetArticleVotes, decremenetArticleVotes } from '../utils/api'

const Votes = ({ votes, article_id }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0)
  const [err, setErr] = useState(null)

  const incrementVotes = (num) => {
    setErr(null)
    setOptimisticVotes((currentVotes) => currentVotes + 1)
    incremenetArticleVotes(article_id).catch((err) => {
      setOptimisticVotes((currentVotes) => currentVotes - 1)
      setErr('Sorry, something went wrong!')
    })
  }
  const decrementVotes = (num) => {
    setErr(null)
    setOptimisticVotes((currentVotes) => currentVotes - 1)
    decremenetArticleVotes(article_id).catch((err) => {
      setOptimisticVotes((currentVotes) => currentVotes + 1)
      setErr('Sorry, something went wrong!')
    })
  }

  if (err) return <p>err</p>
  return (
    <p>
      Votes: {votes + optimisticVotes}
      <button onClick={incrementVotes}>Vote +</button>
      <button onClick={decrementVotes}>Vote -</button>
    </p>
  )
}

export default Votes
