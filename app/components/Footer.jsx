export default function Footer() {
  return (
    <footer className='pt-[124px]' role='contentinfo'>
      <article
        id='touch'
        className='mx-[145px] flex flex-col items-center gap-[44px] rounded-t-[32px] bg-[#161616] pb-[44px] pt-[144px] text-center text-white'
        aria-labelledby='touch-heading'
        aria-describedby='touch-description'
      >
        <header>
          <h3 id='touch-heading' className='text-[60px] font-bold leading-[120%]'>
            Let’s Get in Touch
          </h3>
        </header>
        <p id='touch-description' className='max-w-[80%] text-[25px] font-medium leading-[100%]'>
          At Mazze, we don’t just talk the talk; we walk the walk when it comes to understanding the digital landscape.
        </p>
        <footer>
          <button
            className='rounded-[10px] bg-[#FFC690] px-[98px] py-[18px] text-base font-bold text-black'
            aria-label='Schedule a meeting with Mazze'
          >
            Schedule Meeting
          </button>
        </footer>
      </article>
      <div
        id='latest-works'
        className='flex h-[110px] w-max items-center justify-between gap-[18px] bg-[#141414] py-5 font-unbounded font-extrabold text-white'
      >
        {[...Array(10)].map((_, i) => (
          <>
            <span className='text-nowrap text-[34px] uppercase leading-[44px] opacity-60'>Latest Works</span>
            <svg
              className='flex-1'
              width='54'
              height='61'
              viewBox='0 0 54 61'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              opacity='0.6'
            >
              <path
                d='M28.0006 1.62858C28.0006 1.62858 28.6838 16.0457 28.5169 27.2061C35.1487 21.3804 43.9248 14.7393 43.9248 14.7393C43.9248 14.7393 36.7036 23.0125 30.4342 29.2195C40.4058 29.8116 52.9765 31.4073 52.9765 31.4073C52.9765 31.4073 40.3001 32.1236 30.307 32.0169C36.128 38.646 42.7541 47.4023 42.7541 47.4023C42.7541 47.4023 34.488 40.1873 28.2819 33.9198C27.6686 45.0607 25.9842 59.3712 25.9842 59.3712C25.9842 59.3712 25.3032 45.002 25.467 33.8493C18.8425 39.6622 10.12 46.2627 10.12 46.2627C10.12 46.2627 17.3403 37.9906 23.6094 31.7837C13.6285 31.1945 1.00821 29.5925 1.00821 29.5925C1.00821 29.5925 13.6845 28.8762 23.6777 28.9829C17.8567 22.3537 11.2306 13.5975 11.2306 13.5975C11.2306 13.5975 19.4967 20.8125 25.7028 27.08C26.3161 15.9391 28.0006 1.62858 28.0006 1.62858Z'
                fill='white'
              />
            </svg>
          </>
        ))}
      </div>
    </footer>
  )
}
