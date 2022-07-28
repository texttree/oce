import ComponentsList from '../components/ComponentsList'

function ComponentsPage() {
  return (
    <div className="divide-y divide-dashed px-28">
      <div className="mt-40 text-center pb-14">
        <div className="text-6xl font-bold">Components</div>
        <div className="mt-5">
          <div className="inline-block">Repozitories: </div>
          <div className="inline-block">Stargaziers: </div>
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="px-2">Labels </div>
            <div className="px-2">Size </div>
            <div className="px-2">Language </div>
          </div>
          <div>Search for components</div>
        </div>
        <ComponentsList />
      </div>
    </div>
  )
}

export default ComponentsPage
