import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, open] = useState(false)

  return (
    <div
      className='absolute left-0 top-0 z-10 flex w-full items-center justify-between p-4 md:grid-cols-[200px,max-content,200px] md:px-40 md:py-14'
      role='navigation'
      aria-label='Main Navigation'
    >
      <figure aria-label='Logo' className='w-auto md:w-[190px]'>
        <Image src='/logo.svg' alt='logo' width={56} height={56} />
      </figure>
      <ul
        className='hidden gap-10 rounded-2xl border border-solid border-white bg-[#dadada7a] px-14 py-5 font-bold md:flex'
        role='menubar'
        aria-label='Main Menu'
      >
        <li className='cursor-pointer text-[#252432]' role='menuitem' aria-label='Home'>
          Home
        </li>
        <li className='cursor-pointer' role='menuitem' aria-label='About'>
          About
        </li>
        <li className='cursor-pointer' role='menuitem' aria-label='How it works'>
          How it works
        </li>
        <li className='cursor-pointer' role='menuitem' aria-label='Services'>
          Services
        </li>
      </ul>
      <button
        className='block md:hidden'
        onClick={() => open(!isOpen)}
        aria-label='Toggle Menu'
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
      >
        <svg width='31' height='22' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1.36951 1.29346H29.1393' stroke='white' stroke-width='2' stroke-linecap='round' />
          <path d='M1.36951 10.8477H29.1393' stroke='white' stroke-width='2' stroke-linecap='round' />
          <path d='M1.36951 20.4014H29.1393' stroke='white' stroke-width='2' stroke-linecap='round' />
        </svg>
      </button>
      <ul
        id='mobile-menu'
        className={`absolute left-0 top-[88px] mx-4 block rounded-md border backdrop-blur-md ${isOpen ? 'h-auto py-5' : 'h-0 border-0 py-0'} gap-10 overflow-hidden rounded-none bg-[#0006] px-4 text-[20px] font-bold text-white transition-[height] md:hidden`}
        style={{ width: 'calc(100% - 2rem)' }}
        role='menu'
        aria-label='Mobile Menu'
      >
        <li className='mb-2 cursor-pointer border-b border-[#f1f1f1] pb-2 text-white' role='menuitem' aria-label='Home'>
          Home
        </li>
        <li className='mb-2 cursor-pointer border-b border-[#f1f1f1] pb-2' role='menuitem' aria-label='About'>
          About
        </li>
        <li className='mb-2 cursor-pointer border-b border-[#f1f1f1] pb-2' role='menuitem' aria-label='How it works'>
          How it works
        </li>
        <li className='mb-2 cursor-pointer border-b border-[#f1f1f1] pb-2' role='menuitem' aria-label='Services'>
          Services
        </li>
        <li
          className='mb-2 cursor-pointer border-b border-[#f1f1f1] pb-2'
          role='menuitem'
          aria-label='Schedule Meeting'
        >
          Schedule Meeting
        </li>
      </ul>
      <div className='hidden justify-self-end md:block'>
        <button
          className='flex items-center gap-2 rounded-xl bg-[#FFC690] px-3 py-1 text-sm font-bold'
          aria-label='Schedule Meeting'
          role='button'
        >
          <span>Schedule Meeting</span>
          <figure aria-label='Star Icon'>
            <Image src={'/star.svg'} alt='star' width={35} height={39} />
          </figure>
        </button>
      </div>
    </div>
  )
}
