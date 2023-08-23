import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from '../../utils/validation'
import AuthInput from './AuthInput'
import PulseLoader from 'react-spinners/PulseLoader'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function RegisterForm() {
  const { status } = useSelector((state) => state.user)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) })

  const onSubmit = (values) => console.log(values)

  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* container */}
      <div className='max-w-md y-8 p-10 dark:bg-dark_bg_2 rounded-xl'>
        {/* heading */}
        <div className='text-center dark:text-dark_text_1'>
          <h2 className='mt-6 text-3xl font-bold'>Welcome</h2>
          <p className='mt-2 text-sm'>sign up</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-6 '>
          <AuthInput
            name='name'
            type='text'
            placeholder='Full Name'
            register={register}
            error={errors?.name?.message}
          />

          <AuthInput
            name='email'
            type='text'
            placeholder='Email address'
            register={register}
            error={errors?.email?.message}
          />

          <AuthInput
            name='status'
            type='text'
            placeholder='Status (Optional)'
            register={register}
            error={errors?.status?.message}
          />

          <AuthInput
            name='password'
            type='password'
            placeholder='Password'
            register={register}
            error={errors?.password?.message}
          />

          {/* submit button */}
          <button
            className='w-full flex justify-center bg-green_1 text-gray-100
             p-4 rounded-full tracking-wide font-semibold focus:outline-none
              hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300'
            type='submit'
          >
            {status == 'loading' ? (
              <PulseLoader color='#fff' size={10} />
            ) : (
              'sign Up'
            )}
          </button>

          {/* sign in link */}
          <p className='flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1'>
            <span>have an account ?</span>
            <Link
              href='/login'
              className='hover:underline  text-sm cursor-pointer transition ease-in duration-300'
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
