import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex items-center justify-between px-40 py-14'>
      <Image src='/logo.svg' alt='logo' width={56} height={56} />
      <ul className='flex gap-10 rounded-2xl border border-solid border-white bg-[#dadada7a] px-14 py-5 font-bold'>
        <li className='cursor-pointer text-[#252432]'>Home</li>
        <li className='cursor-pointer '>About</li>
        <li className='cursor-pointer '>How it works</li>
        <li className='cursor-pointer '>Services</li>
      </ul>
      <button className='flex items-center gap-2 rounded-xl bg-[#FFC690] px-3 py-1 font-bold'>
        <span>Schedule Meeting</span>
        <Image src={'/star.svg'} alt='star' width={35} height={39} />
      </button>
    </div>
  )
}
