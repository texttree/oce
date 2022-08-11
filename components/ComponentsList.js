import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import ComponentCard from './ComponentCard'
import useComponents from '../hooks/useComponents'

function ComponentsList({ setTotal }) {
  const router = useRouter()
  const {
    isReady,
    query: { limit = 10, order = 'updated', direction = 'desc', topics = [], query = '' },
  } = router
  const [from, setFrom] = useState(null)
  const [components, setComponents] = useState([])
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null })
  const { data, isLoading, isError } = useComponents(
    isReady && {
      limit,
      order,
      direction,
      topics: router.query['topics[]'],
      from,
      query,
    }
  )

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal((prev) => {
        if (from === null) {
          return data.total
        } else {
          return prev
        }
      })
      setComponents((prev) => {
        if (from === null) {
          return data.repos
        } else {
          return prev.concat(data.repos)
        }
      })
      setPageInfo(data.pageInfo)
    }
  }, [data, from, isError, isLoading, setTotal])

  const handlerLoadMore = () => {
    setFrom(pageInfo.endCursor)
  }

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      {from === null && isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div></div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-5 my-5 sm:grid-cols-2 md:grid-cols-3 md:my-10 xl:grid-cols-4 2xl:grid-cols-5">
            {componentCards}
          </div>
          {pageInfo.hasNextPage ? (
            <div onClick={handlerLoadMore}>LOAD MORE</div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  )
}

export default ComponentsList
