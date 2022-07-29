import Head from 'next/head'
import Image from 'next/image'

import editor_black from '../public/editor_black.svg'
import ascent from '../public/ascent.svg'
import right from '../public/right.svg'
import discord from '../public/discord.svg'
import introduction from '../public/introduction.svg'
import explore from '../public/explore.svg'
import discord_hero from '../public/discord_hero.svg'

export default function Home() {
  return (
    <div className="flex flex-col gap-24 my-16 cursor-default">
      <Head>
        <title>Open Components Ecosystem</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex flex-row self-end mr-96">
          <Image src={editor_black} alt="" width="90" height="90" />
        </div>
        <div className="mb-8 w-3/5 text-center text-6xl font-bold text-[#2F5C6E]">
          Open Components are Reusable Building Blocks for Bible Technology
        </div>
        <div className="text-xl mb-28 text-[#2F5C6E]">
          <span className="font-bold">Collaborative Innovation</span> in Bible Technology{' '}
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col pt-16 pb-8 px-9 gap-5 w-1/3 bg-blue-75 rounded-lg hover:bg-yellow-350 group">
          <div>
            <Image src={ascent} alt="" width="303" height="185" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-10 items-center">
              <div className="text-2xl font-semibold text-[#2F5C6E] underline decoration-[#2F5C6E] decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                Get started
              </div>
              <div>
                <Image src={right} alt="" width="20" height="13" />
              </div>
            </div>
            <div className="text-base text-justify text-[#2F5C6E] group-hover:text-black">
              Get started with the Open Component Ecosystem. The community conversation is
              ongoing on Discord, but here you can find out more about how to begin
              developing open components or getting your work added to the ecosystem.
            </div>
          </div>

          <button className="w-44 h-11 rounded-lg text-white bg-[#2F5C6E] group-hover:bg-black">
            <div className="flex justify-center items-center gap-2 w-full h-full rounded-lg hover:bg-[#2F5C6E] active:bg-[#254958]">
              <div className="flex justify-center">
                <Image
                  src={discord}
                  alt=""
                  width="24"
                  height="23"
                  className="group-hover:fill-black"
                />
              </div>
              <div>Join Discord</div>
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-blue-75 group rounded-lg hover:bg-yellow-350">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={introduction} alt="" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-[#2F5C6E] underline decoration-[#2F5C6E] decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Introduction
                </div>
                <div>
                  <Image
                    src={right}
                    alt=""
                    width="20"
                    height="13"
                    className="group-hover:fill-black"
                  />
                </div>
              </div>
              <div className="text-base text-justify text-[#2F5C6E] group-hover:text-black">
                Find out what the Open Component Ecosystem (OCE) is all about. To learn
                about the concept behind the OCE, you can check out our{' '}
                <span className="font-bold underline decoration-2 underline-offset-4">
                  whitepaper
                </span>{' '}
                here.
              </div>
            </div>
          </div>

          <button className="w-44 h-11 rounded-lg text-white bg-[#2F5C6E] group-hover:bg-black">
            <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-[#2F5C6E] active:bg-[#254958]">
              Learn more
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-blue-75 rounded-lg hover:bg-yellow-350 group">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={explore} alt="" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-[#2F5C6E] underline decoration-[#2F5C6E] decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Explore
                </div>
                <div>
                  <Image
                    src={right}
                    alt=""
                    width="20"
                    height="13"
                    className="group-hover:fill-black"
                  />
                </div>
              </div>
              <div className="text-base text-justify text-[#2F5C6E] group-hover:text-black">
                Discover the various components that are already available in the
                ecosystem and the related apps using them.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-base font-semibold uppercase text-zinc-450">
            Components
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center items-center gap-2.5 w-56 h-56">
              <div className="text-base underline decoration-[#2F5C6E] decoration-2 underline-offset-4 text-[#2F5C6E]">
                More
              </div>
              <div>
                <Image src={right} alt="" width="13" height="8" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-base font-semibold uppercase text-zinc-450">
            Applications
          </div>
          <div className="flex gap-8">
            <div>tcCreate</div>
            <div>Autographa</div>
            <div className="flex gap-2.5">
              <div className="text-base underline decoration-[#2F5C6E] decoration-2 underline-offset-4 text-[#2F5C6E]">
                More
              </div>
              <div>
                <Image src={right} alt="" width="13" height="8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-52">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-[#2F5C6E]">
            Join our community on{' '}
            <span className="underline decoration-4 underline-offset-4">Discord</span>
          </div>
          <div className="text-xl text-zinc-450">
            Use #scripture-open-components to showcase your work in the community
          </div>
        </div>
        <div>
          <Image src={discord_hero} alt="" width="234" height="227" />
        </div>
      </div>
    </div>
  )
}
