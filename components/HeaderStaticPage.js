import Image from 'next/image'
import Link from 'next/link'

function HeaderStaticPage({ config }) {
  const { title, name, date } = config
  return (
    <div className=" border-b-2 border-dashed my-16  pr-10">
      <Link href="/">
        <button className="flex justify-between w-28 hover:text-gray-700 text-gray-500">
          <div className="w-5 h-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <p className=" text-base font-semibold">Get started</p>
        </button>
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl ">{title ? title : ''}</h1>
        <div>
          <Image
            className="editor-r"
            width="197"
            height="197"
            alt="editor-r"
            src={'/editor-reverse.svg'}
          />
        </div>
      </div>
      <div className="flex pb-20">
        <p>{name ? name : ''}</p>
        <p className="ml-16 text-gray-500">{date ? date : ''}</p>
      </div>
    </div>
  )
}
export default HeaderStaticPage
