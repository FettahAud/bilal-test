import Image from 'next/image'

export default function Hero() {
  return (
    <section
      aria-label='Hero Section'
      className='relative flex h-screen items-end px-40 pb-5 pt-40'
      style={{
        backgroundImage: 'linear-gradient(0, black 0%, transparent 22%, transparent 80%, black 100%);',
      }}
    >
      <figure className='absolute left-0 top-0 -z-10 size-full select-none' aria-label='Hero Image'>
        <Image src={'/hero-bg.jpg'} alt='hero' layout='fill' objectFit='cover' className='object-center' />
      </figure>
      <article className='flex flex-col items-center gap-12 text-center'>
        <header className='text-center text-[70px] font-black leading-[68px] text-white'>
          <h1 aria-label='Hero Title'>Run more engaging sessions. Get better outcomes.</h1>
        </header>
        <p className='max-w-[55%] text-lg font-light leading-5 text-white' aria-label='Hero Description'>
          Effortlessly plan, run and recap super-engaging workshops, trainings, and meetings with Butter’s built-in
          agenda planner, integrated collaboration tools and auto-generated recaps—all in one place.
        </p>
        <figure aria-label='Scroll Down'>
          <Image src={'/scroll-down.svg'} alt='scroll' width={56} height={56} />
        </figure>
      </article>
    </section>
  )
}
