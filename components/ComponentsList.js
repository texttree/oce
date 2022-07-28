import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import useComponents from '../hooks/useComponents'
import ComponentCard from './ComponentCard'

function ComponentsList() {
  const router = useRouter()
  const {
    isReady,
    query: { limit = 10, order = 'updated', direction = 'desc', topics = [] },
  } = router
  const [total, setTotal] = useState()
  const [from, setFrom] = useState(null)
  const [components, setComponents] = useState([])
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null })
  const { data, isLoading, isError } = useComponents(
    isReady && {
      limit,
      order,
      direction,
      topics: [],
      from,
    }
  )

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal(() => {
        if (from === null) {
          return data.total
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
  }, [data, from, isError, isLoading])
  const handlerLoadMore = () => {
    setFrom(pageInfo.endCursor)
  }

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      {from === null && isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <div>Total Count: {total}</div>
          <div className="my-8 grid grid-cols-5 gap-8">{componentCards}</div>
          {pageInfo.hasNextPage ? (
            <div onClick={handlerLoadMore}>LOAD MORE</div>
          ) : (
            <div>END</div>
          )}
        </>
      )}
    </div>
  )
}

export default ComponentsList
