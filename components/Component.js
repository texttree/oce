import { Tab } from '@headlessui/react'
import useComponent from '../hooks/useComponent'
import { timeSince } from '../utils/helper'
import Labels from './Labels'
import SidePanel from './SidePanel'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = ['Readme', 'Apps']

function Component({ address }) {
  const { data: repo, isLoading, isError } = useComponent(address)
  return (
    <div className="mt-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <h1 className="text-6xl font-bold">{repo.name}</h1>
          <p className="my-4">{repo.description}</p>
          <div className="text-gray-500">
            {repo?.language} • Updated {timeSince(repo.updated_at)} ago
          </div>
          <div className="my-8">
            <Labels
              isFull={true}
              labels={repo.topics.filter(
                (el) => !['scripture-open-components'].includes(el)
              )}
            />
          </div>
          <Tab.Group>
            <Tab.List className="border-b border-slate-400 border-dotted mb-12">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames('tab ', selected ? 'active' : '')
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <div className="flex flex-row">
              <div className="w-2/3">
                <Tab.Panels className="">
                  <Tab.Panel>Readme Content</Tab.Panel>
                  <Tab.Panel>Apps List</Tab.Panel>
                </Tab.Panels>
              </div>
              <div className="w-1/3">
                <SidePanel
                  license={repo?.license.name}
                  homepage={repo?.homepage}
                  repository={repo.html_url}
                  owner={{ url: repo.owner?.avatar_url, name: repo.owner.login }}
                />
              </div>
            </div>
          </Tab.Group>
        </>
      )}
    </div>
  )
}

export default Component
