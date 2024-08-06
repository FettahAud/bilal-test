import Image from 'next/image'

export default function Header() {
  return (
    <div
      className='absolute left-0 top-0 z-10 grid w-full items-center justify-between px-40 py-14'
      role='navigation'
      aria-label='Main Navigation'
      style={{
        gridTemplateColumns: '200px max-content 200px;',
      }}
    >
      <figure aria-label='Logo' className='w-[190px]'>
        <Image src='/logo.svg' alt='logo' width={56} height={56} />
      </figure>
      <ul
        className='flex gap-10 rounded-2xl border border-solid border-white bg-[#dadada7a] px-14 py-5 font-bold'
        role='menubar'
      >
        <li className='cursor-pointer text-[#252432]' role='menuitem'>
          Home
        </li>
        <li className='cursor-pointer ' role='menuitem'>
          About
        </li>
        <li className='cursor-pointer ' role='menuitem'>
          How it works
        </li>
        <li className='cursor-pointer ' role='menuitem'>
          Services
        </li>
      </ul>
      <div className='justify-self-end'>
        <button
          className='flex items-center gap-2 rounded-xl bg-[#FFC690] px-3 py-1 text-sm font-bold'
          aria-label='Schedule Meeting'
          role='button'
        >
          <span>Schedule Meeting</span>
          <figure>
            <Image src={'/star.svg'} alt='star' width={35} height={39} />
          </figure>
        </button>
      </div>
    </div>
  )
}
