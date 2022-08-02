import { useState } from 'react'

import AppsList from '../components/AppsList'

function AppsPage() {
  const [total, setTotal] = useState()
  return (
    <div className="divide-y divide-dashed px-2 md:px-5 lg:px-12 2xl:px-28">
      <div className="mt-40 text-center pb-14">
        <div className="text-6xl font-bold">Apps</div>
        <div className="mt-5">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div className="pt-12">
        <AppsList setTotal={setTotal} />
      </div>
    </div>
  )
}

export default AppsPage
