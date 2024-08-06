import Image from 'next/image'

import squaresBg from '/public/squares-bg.svg'

import { Suspense } from 'react'
import { Spring2 } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function SocialSection() {
  return (
    <section className='py-[186px] bg-[#F5F8FF] relative'>
      <figure className='absolute left-0 top-0 h-[300px] w-screen select-none' aria-hidden='true'>
        <Image src={squaresBg} className='left-0' alt='Squares' fill objectFit='cover' objectPosition='bottom' />
      </figure>
      <article className='flex flex-col gap-40 px-[326px] relative'>
        <header>
          <h1 className='text-[#24272B] font-extrabold text-[84px] leading-[71px]'>
            Social media
            <br /> dynamics{' '}
            <svg
              className='inline'
              width='57'
              height='58'
              viewBox='0 0 57 58'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M55.5618 29.0031C55.8187 29.2044 55.8171 29.5937 55.5585 29.7929L55.8588 30.1827L55.5585 29.7929L51.7769 32.7056C51.1755 33.1688 51.015 34.0084 51.4031 34.6608L53.8434 38.7632C54.0102 39.0436 53.8681 39.4061 53.5551 39.4984L48.9767 40.8484C48.2485 41.0631 47.7956 41.788 47.9218 42.5366L48.7154 47.2435C48.7696 47.5652 48.5061 47.8519 48.1809 47.8249L43.424 47.4298C42.6674 47.3669 41.9832 47.8792 41.8305 48.6228L40.8702 53.2986C40.8045 53.6182 40.4552 53.7903 40.1618 53.6477L35.8688 51.5608C35.186 51.2289 34.363 51.4595 33.9519 52.0977L31.3674 56.1108C31.1907 56.3851 30.8028 56.4194 30.5807 56.1804L27.3315 52.6837C26.8147 52.1276 25.9639 52.0452 25.3501 52.4919L21.4904 55.3003C21.2265 55.4923 20.8525 55.3842 20.7317 55.081L18.965 50.6467C18.6841 49.9414 17.9205 49.5573 17.1868 49.752L12.5732 50.9765C12.2578 51.0603 11.948 50.8243 11.9449 50.498L11.8994 45.7249C11.8922 44.9658 11.319 44.3318 10.5644 44.2483L5.82001 43.7235C5.49568 43.6876 5.29207 43.3557 5.40704 43.0504L7.08887 38.5831C7.35634 37.8727 7.05086 37.0744 6.37742 36.724L2.14299 34.5207C1.85352 34.3701 1.78355 33.9871 2.00107 33.7439L5.18308 30.1858C5.68914 29.62 5.69266 28.7652 5.19128 28.1952L2.03869 24.6111C1.82318 24.3661 1.8963 23.9836 2.18699 23.8354L6.43943 21.6671C7.11574 21.3223 7.42779 20.5265 7.16617 19.8139L5.5212 15.333C5.40876 15.0266 5.61509 14.6964 5.9397 14.6632L10.6883 14.1775C11.4435 14.1003 12.0219 13.471 12.0354 12.712L12.1202 7.93939C12.126 7.61314 12.4377 7.37978 12.7524 7.46608L17.3557 8.72854C18.0878 8.92932 18.8545 8.55148 19.1413 7.84859L20.9445 3.42892C21.0677 3.1268 21.4426 3.02179 21.7049 3.21594L25.5414 6.05608C26.1515 6.50777 27.0029 6.43241 27.5242 5.88057L30.8022 2.41073C31.0263 2.17353 31.4138 2.21105 31.5882 2.48683L34.1396 6.52107C34.5454 7.16267 35.3666 7.39996 36.052 7.07371L40.3621 5.02231C40.6567 4.88208 41.0045 5.05707 41.0675 5.37723L41.9893 10.0607C42.1359 10.8056 42.8159 11.3235 43.5729 11.2669L48.333 10.911C48.6584 10.8866 48.9195 11.1755 48.8626 11.4968L48.0303 16.197C47.8979 16.9445 48.3449 17.6731 49.0712 17.8937L53.6384 19.2814C53.9506 19.3763 54.0898 19.7399 53.9206 20.019L51.4466 24.1011C51.0531 24.7503 51.2067 25.5912 51.8043 26.0593L55.5618 29.0031L55.8649 28.6163L55.5618 29.0031Z'
                fill='#fbde66'
                stroke='white'
              />
              <path
                d='M29.1923 38.3264C29.0238 38.4919 28.7968 38.5842 28.5606 38.5832C28.3244 38.5823 28.0981 38.4881 27.931 38.3212L19.9978 30.3224C19.8361 30.1518 19.7459 29.9257 19.7459 29.6907C19.7469 29.5732 19.7699 29.457 19.8137 29.348C19.8821 29.1872 19.9965 29.0502 20.1426 28.9543C20.2887 28.8584 20.4599 28.8079 20.6347 28.8092L27.7156 28.8384L27.7484 20.8724C27.7493 20.6376 27.8435 20.4129 28.0102 20.2476C28.1769 20.0823 28.4024 19.9899 28.6371 19.9909C28.8719 19.9919 29.0966 20.086 29.2619 20.2527C29.4272 20.4194 29.5196 20.6449 29.5186 20.8797L29.4858 28.8457L36.5667 28.8748C36.7414 28.875 36.9122 28.9269 37.0575 29.024C37.2028 29.1211 37.3161 29.259 37.3832 29.4203C37.4463 29.5841 37.4617 29.7624 37.4277 29.9345C37.3937 30.1067 37.3117 30.2657 37.1911 30.3932L29.1923 38.3264Z'
                fill='black'
              />
            </svg>
          </h1>
        </header>
        <div className='absolute w-full h-20 bg-[#FFC690] left-0 top-[190px]'>
          <View orbit className='absolute top-[-80px] left-0 size-[235px]' aria-label='3D View'>
            <Suspense fallback={null}>
              <Spring2 />
              <pointLight position={[-10, -10, -10]} color='white' decay={0.2} />
              <Common />
            </Suspense>
          </View>
        </div>
        <p className='font-light text-[30px]' style={{ lineHeight: '88%' }}>
          At Mazze, we don’t just talk the talk; we walk the walk when it comes to understanding the digital landscape.
          With a keen grasp of how the online world operates, we’re your guides to making the most of its opportunities.
          <br />
          <br />
          Our team is made up of experienced professionals who’ve been part of the digital evolution. From understanding
          algorithms to social media dynamics, we’ve got the know-how to drive visibility, engagement, and results.
          <br />
          <br />
          We are always on our toes to recognize the latest trends in the ever-changing digital world. As digital
          experts, we’re here to create strategies that match your goals. Whether it’s crafting content or running ad
          campaigns, we know how to make the digital space work for you.
          <br />
          <br /> Your digital success story starts here.
        </p>
      </article>
    </section>
  )
}
