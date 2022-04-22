import { useState, useContext } from 'react'
import { incremenetArticleVotes, decremenetArticleVotes } from '../utils/api'
import { UserContext } from '../context/user'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

const Votes = ({ votes, article_id }) => {
  const { userOnline } = useContext(UserContext)
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

  if (err) return <p>{err}</p>
  return (
    <>
      <p className='me-2'>Votes: {votes + optimisticVotes}</p>
      {userOnline.username === '' ? (
        <p>Only logged in users can vote</p>
      ) : (
        <>
          <button
            className='mx-2 p-1'
            onClick={incrementVotes}
            disabled={optimisticVotes !== 0}
          >
            Vote <FaThumbsUp />
          </button>
          <button
            className='p-1'
            onClick={decrementVotes}
            disabled={optimisticVotes !== 0}
          >
            Vote <FaThumbsDown />
          </button>
        </>
      )}
    </>
  )
}

export default Votes
