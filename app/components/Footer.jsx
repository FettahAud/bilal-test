export default function Footer() {
  return (
    <footer className='pt-[124px]' role='contentinfo'>
      <article
        id='touch'
        className='mx-[145px] flex flex-col items-center gap-[44px] rounded-t-[32px] bg-[#161616] pb-[44px] pt-[144px] text-center text-white'
        aria-labelledby='touch-heading'
        aria-describedby='touch-description'
      >
        <h1 id='touch-heading' className='text-[60px] font-bold leading-[120%]'>
          Let’s Get in Touch
        </h1>
        <p id='touch-description' className='max-w-[80%] text-[25px] font-medium leading-[100%]'>
          At Mazze, we don’t just talk the talk; we walk the walk when it comes to understanding the digital landscape.
        </p>
        <button
          className='rounded-[10px] bg-[#FFC690] px-[98px] py-[18px] text-base font-bold text-black'
          aria-label='Schedule a meeting with Mazze'
        >
          Schedule Meeting
        </button>
      </article>
    </footer>
  )
}
