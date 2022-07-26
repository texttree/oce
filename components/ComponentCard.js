import Image from 'next/image'
import Link from 'next/link'

import Labels from './Labels'

function ComponentCard({ repo }) {
  return (
    <div
      key={repo.nameWithOwner}
      className="flex flex-col justify-between pt-8 pl-6 pr-4 pb-4 bg-primary-100 h-56 rounded-xl"
    >
      <div>
        <Link href={`/component/${repo.nameWithOwner}`}>
          <a className="line-clamp-1 text-primary-600 font-bold text-xl cursor-pointer hover:underline">
            {repo.name}
          </a>
        </Link>
        <Labels
          labels={repo.repositoryTopics?.nodes
            .filter(
              (el) =>
                !['scripture-open-components', 'scripture-open-apps'].includes(
                  el.topic.name
                )
            )
            .map((el) => el.topic.name)}
        />
      </div>
      <div className="pr-2 text-gray-500 text-sm line-clamp-3">{repo.description}</div>
      <div className="pr-6 flex justify-between">
        <div className="h-5 w-5">
          <Image
            width="100%"
            height="100%"
            title={repo.owner?.login}
            alt={repo.owner?.login}
            src={repo.owner?.avatarUrl}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ComponentCard
