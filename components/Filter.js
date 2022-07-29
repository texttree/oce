import { Fragment, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, XIcon } from '@heroicons/react/solid'

const filters = {
  order: [
    { id: 0, name: 'popularity', value: 'popularity' },
    { id: 1, name: 'updated', value: 'updated' },
  ],
  direction: [
    { id: 0, name: 'descending', value: 'desc' },
    { id: 1, name: 'ascending', value: 'asc' },
  ],
  topics: [
    { id: 0, name: 'typeScript', value: 'typeScript' },
    { id: 1, name: 'bible', value: 'bible' },
    { id: 2, name: 'reference', value: 'reference' },
  ],
}

export default function Filter({ type }) {
  const router = useRouter()
  const { pathname, query } = router
  const [selectedFilters, setSelectedFilters] = useState([])
  const [selectedFilter, setSelectedFilter] = useState(filters?.[type]?.[0])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSendUrl = (param) => {
    if (!param || !router.isReady) {
      return
    }

    if (type === 'topics') {
      router.replace(
        {
          query: { ...router.query, 'topics[]': param },
        },
        undefined,
        { scroll: false }
      )
      return
    }

    router.replace(
      {
        query: { ...router.query, [type]: param },
      },
      undefined,
      { scroll: false }
    )
  }
  const handleCleanRouter = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(query)
    params.delete('topics[]')
    router.replace({ pathname, query: params.toString() }, undefined, { scroll: false })
    setSelectedFilters([])
  }
  useEffect(() => {
    if (!selectedFilter) {
      return
    }

    if (type !== 'topics' && !Object.keys(query).includes(type)) {
      router.replace(
        {
          query: { ...query, [type]: selectedFilter.value },
        },
        undefined,
        { scroll: false }
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, selectedFilter, type])

  useEffect(() => {
    if (query && Object.keys(query) === 0 && type !== 'query') {
      return
    }

    if (Object.keys(query).includes(type) && type !== 'topics') {
      filters?.[type]?.forEach((el) => {
        if (el.value === query[type]) {
          setSelectedFilter(el)
        }
      })
    }

    if (Object.keys(query).includes('topics[]') && type === 'topics') {
      const selectedFromUrl = []
      filters[type].forEach((el) => {
        if (query['topics[]'].includes(el.value)) {
          selectedFromUrl.push(el)
        }

        setSelectedFilters(selectedFromUrl)
      })
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  return (
    <>
      {type === 'query' ? (
        <Input
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          handleSendUrl={handleSendUrl}
        />
      ) : (
        <Listbox
          open={false}
          value={type === 'topics' ? selectedFilters : selectedFilter}
          onChange={(e) => {
            if (type !== 'topics') {
              handleSendUrl(e.value)
              setSelectedFilter(e)
            } else {
              setSelectedFilters(e)
              handleSendUrl(e.map((el) => el.value))
            }
          }}
          multiple={type === 'topics'}
        >
          <div
            className={`input ${
              selectedFilters?.length > 0 && type === 'topics'
                ? 'bg-[#2F5C6E] text-white'
                : 'bg-white text-gray-700 '
            } relative mt-1`}
          >
            <Listbox.Button>
              <span className=" truncate mr-4">
                {type === 'topics'
                  ? 'topics'
                  : selectedFilter
                  ? selectedFilter?.name
                  : type}
              </span>
              {type === 'topics' && selectedFilters.length > 0 && (
                <span className="truncate "> {selectedFilters.length}</span>
              )}

              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                {selectedFilters?.length > 0 && type === 'topics' ? (
                  <XIcon
                    className="h-5 w-5 text-black-400"
                    aria-hidden="true"
                    onClick={handleCleanRouter}
                  />
                ) : (
                  <ChevronDownIcon
                    className="h-5 w-5 text-black-400"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="options">
                <>
                  {filters[type].map((filter, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      hidden={filter.hidden}
                      disabled={filter.disabled}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-gray-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={filter}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {filter.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      )}
    </>
  )
}

function Input({ setSearchQuery, searchQuery, handleSendUrl }) {
  return (
    <div className="flex justify-center">
      <div className="flex mb-3 xl:w-96">
        <input
          onBlur={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control input"
          placeholder="Search"
        />
        <button className="btn" type="button" onClick={() => handleSendUrl(searchQuery)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
