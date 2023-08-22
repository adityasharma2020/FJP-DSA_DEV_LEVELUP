import React from 'react'
import Image from 'next/image'
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from 'react-icons/bs'
import { BiHomeCircle, BiHash, BiUser } from 'react-icons/Bi'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Interace for twitters sidebar button
interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notifications',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />,
  },
  {
    title: 'BookMarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='border border-red-300 col-span-3  pt-8 px-3'>
          <div className='flex justify-start text-3xl h-fit w-fit rounded-full p-4 hover:bg-gray-800 cursor-pointer transition-all'>
            <BsTwitter />
          </div>

          <div className='mt-4 text-xl font-semibold pr-4'>
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className='flex gap-4 justify-start items-center hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-3'
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <div className=' mt-5 px-2'>
              <button className='bg-[#1d9bf0] font-semibold text-lg p-3 rounded-full w-full'>
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className='col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-500 '></div>
        <div className='border border-red-300 col-span-3'></div>
      </div>
    </div>
  )
}
