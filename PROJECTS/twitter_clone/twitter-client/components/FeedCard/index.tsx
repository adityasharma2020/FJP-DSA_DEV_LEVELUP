import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'

const FeedCard: React.FC = () => {
  return (
    <div className='border-b border-gray-600 p-5 text-sm leading-6 hover:bg-gray-950 transition-all cursor-pointer'>
      <div className=' grid grid-cols-12 gap-2'>
        <div className='col-span-1 '>
          <Image
            className='rounded-full'
            src='https://avatars.githubusercontent.com/u/69417082?v=4'
            alt='user-image'
            height={50}
            width={50}
          />
        </div>

        <div className='col-span-11'>
          <h5>Aditya sharma</h5>
          <p>
            Just had great dinner. Feel bad because restaurant empty. Felt bad
            for owners & employees. At same time felt anger at Biden Crime
            family. Biden family rip us off stealing millions & starting wars.
            Crime pays if Biden is your name & politics is your game.
          </p>

          <div className='flex justify-between mt-5  items-center  p-2 w-[90%]'>
            <div>
              <button>
                <BiMessageRounded />
              </button>
            </div>
            <div>
              <button>
                <AiOutlineRetweet />
              </button>
            </div>

            <div>
              <button>
                <AiOutlineHeart />
              </button>
            </div>

            <div>
              <button>
                <BiUpload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
