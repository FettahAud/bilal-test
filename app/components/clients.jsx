import '@splidejs/react-splide/css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import client1 from 'public/clients/01.svg'
import client2 from 'public/clients/02.svg'
import client3 from 'public/clients/03.svg'
import client4 from 'public/clients/04.svg'
import client5 from 'public/clients/05.svg'
import client6 from 'public/clients/06.svg'
import client7 from 'public/clients/07.svg'

import Image from 'next/image'

const clients = [
  {
    src: client1,
    alt: 'client',
    index: 1,
  },
  {
    src: client2,
    alt: 'client',
    index: 2,
  },
  {
    src: client3,
    alt: 'client',
    index: 3,
  },
  {
    src: client4,
    alt: 'client',
    index: 4,
  },
  {
    src: client5,
    alt: 'client',
    index: 5,
  },
  {
    src: client6,
    alt: 'client',
    index: 6,
  },
  {
    src: client7,
    alt: 'client',
    index: 7,
  },
  {
    src: client1,
    alt: 'client',
    index: 8,
  },
  {
    src: client2,
    alt: 'client',
    index: 9,
  },
  {
    src: client3,
    alt: 'client',
    index: 10,
  },
  {
    src: client4,
    alt: 'client',
    index: 11,
  },
  {
    src: client5,
    alt: 'client',
    index: 12,
  },
  {
    src: client6,
    alt: 'client',
    index: 13,
  },
  {
    src: client7,
    alt: 'client',
    index: 14,
  },
]

export default function Clients() {
  return (
    <section className='relative py-28' aria-labelledby='clients-heading'>
      <header className='mb-12 text-center text-[60px] font-extrabold leading-[60px]'>
        <h2 id='clients-heading'>Our Prestige Clients</h2>
      </header>
      <figure className='absolute left-0 top-0 -z-10 h-full w-screen select-none' aria-hidden='true'>
        <Image src={'/squares-bg.svg'} alt='Squares' fill />
      </figure>
      <Splide
        className='mb-[100px] h-[112px] w-screen'
        options={{
          gap: '1rem',
          pagination: false,
          perMove: 1,
          perPage: 5,
          rewind: false,
          type: 'loop',
          arrows: false,
          drag: 'free',
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 0.7,
            autoStart: true,
            rewind: true,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label='Client Logos Carousel'
      >
        {clients.map((item) => (
          <SplideSlide key={item.index} className='flex-1 select-none' role='group' aria-roledescription='slide'>
            <figure className='relative h-full w-[200px]' aria-label={item.client}>
              <Image src={item.src} alt={`${item.client} logo`} fill />
            </figure>
          </SplideSlide>
        ))}
      </Splide>
      <article className='clients-paragraph' aria-labelledby='clients-description'>
        <p id='clients-description' className='mx-[100px] text-[60px] font-normal leading-[69px]'>
          <b>Built for facilitators, by facilitators. Mazze</b> is more than a digital marketing agency;
          <br /> we’re architects of digital success. What sets us apart? Our seamless fusion of creativity and strategy
          generates impactful campaigns.
        </p>
      </article>
    </section>
  )
}
