import Image from 'next/image'
import squaresBg from '/public/squares-bg.svg'
import seoBg from '/public/seo-bg.png'

import { Suspense } from 'react'
import { Spring2 } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'
import { useScroll, useTransform, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

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

const Social3D = () => {
  return (
    <div className='mb-[100px] md:mb-[230px]'>
      <figure className='absolute left-0 top-0 h-[300px] w-screen select-none' aria-hidden='true'>
        <Image src={squaresBg} className='left-0' alt='Squares' fill objectFit='cover' objectPosition='bottom' />
      </figure>
      <article className='relative flex flex-col gap-40 px-[40px] md:px-[326px]' aria-labelledby='social-media-heading'>
        <header>
          <h2
            id='social-media-heading'
            className='text-[64px] font-extrabold leading-[60px] text-[#24272B] md:text-[84px] md:leading-[71px]'
            aria-label='Social media dynamics'
          >
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
          </h2>
        </header>
        <div className='absolute left-0 top-[260px] h-20 w-full bg-[#FFC690] md:top-[190px]'>
          <View orbit className='absolute left-0 top-[-80px] size-[235px]'>
            <Suspense fallback={null}>
              <Spring2 />
              <pointLight position={[-10, -10, -10]} color='white' decay={0.2} />
              <Common />
            </Suspense>
          </View>
        </div>
        <p className='text-[24px] font-light leading-[30px] md:text-[30px] md:leading-[88%]' aria-label='Description'>
          At Mazze, we don’t just talk the talk; we walk the walk when it comes to understanding the digital landscape.
          With a keen grasp of how the online world operates, we’re your guides to making the most of its opportunities.
          <br />
          <br />
          Our team is made up of experienced professionals who’ve been part of the digital evolution. From understanding
          algorithms to social media dynamics, we’ve got the know-how to drive visibility, engagement, and results.
        </p>
      </article>
    </div>
  )
}

const Counts = () => {
  return (
    <div className='mx-[20px] mb-[140px] flex flex-col justify-between gap-[40px] border-b border-[#CECECE] px-[50px] pb-[50px] md:mx-[200px] md:flex-row md:gap-6'>
      <div className='count-box'>
        <div>
          <svg width='55' height='56' viewBox='0 0 55 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M43.9191 2.05664V1.05664H42.9191H32.5191H32.0802L31.7831 1.37962L1.46313 34.3396L1.19909 34.6266V35.0166V43.0166V44.0166H2.19909H31.5191V53.7366V54.7366H32.5191H42.9191H43.9191V53.7366V44.0166H52.1191H53.1191V43.0166V35.0166V34.0166H52.1191H43.9191V2.05664ZM31.5191 17.7087V34.0166H17.0017L31.5191 17.7087Z'
              stroke='#C1C1C1'
              stroke-width='2'
            />
          </svg>

          <svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.893189 5.73703H19.2932V9.53703H0.893189V5.73703ZM12.2532 0.0970304V15.217H7.93319V0.0970304H12.2532Z'
              fill='#0D0D0D'
            />
          </svg>
        </div>
        <p>Years in Market</p>
      </div>
      <div className='count-box'>
        <div>
          <svg width='88' height='46' viewBox='0 0 88 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.01407 11.76V12.76H2.01407H12.2941V42.64V43.64H13.2941H23.6941H24.6941V42.64V2.88V1.88H23.6941H2.01407H1.01407V2.88V11.76ZM47.1167 42.1212L47.1213 42.1231C51.1055 43.7831 55.6671 44.6 60.7859 44.6C65.9029 44.6 70.4148 43.7837 74.2976 42.1201C78.2368 40.4552 81.3526 38.0234 83.6045 34.8144L83.6092 34.8077C85.8783 31.5175 86.9859 27.523 86.9859 22.88C86.9859 18.2385 85.879 14.2451 83.6113 10.9554C81.3615 7.63835 78.2446 5.14819 74.2979 3.48001C70.415 1.8163 65.903 1 60.7859 1C55.6671 1 51.1055 1.81687 47.1213 3.47691L47.1167 3.47885C43.1685 5.1471 40.0507 7.63776 37.8004 10.9557C35.5328 14.2453 34.4259 18.2386 34.4259 22.88C34.4259 27.523 35.5336 31.5175 37.8027 34.8077L37.8027 34.8078L37.8074 34.8144C40.0598 38.0241 43.1763 40.4562 47.1167 42.1212ZM72.6046 29.2696L72.6012 29.2745C71.4344 30.9761 69.8247 32.302 67.7388 33.2466C65.6966 34.1423 63.3846 34.6 60.7859 34.6C58.1333 34.6 55.7662 34.142 53.669 33.2448C51.5874 32.3014 49.9499 30.9761 48.7291 29.272C47.5828 27.5463 46.9859 25.432 46.9859 22.88C46.9859 20.2717 47.6106 18.1336 48.8073 16.4104C50.0321 14.6467 51.6739 13.294 53.7581 12.3511C55.8554 11.4023 58.1929 10.92 60.7859 10.92C63.4359 10.92 65.769 11.4036 67.8055 12.3473C69.8257 13.2835 71.4121 14.653 72.587 16.4642L72.5956 16.4774L72.6046 16.4904C73.8035 18.2168 74.4259 20.3296 74.4259 22.88C74.4259 25.4304 73.8035 27.5432 72.6046 29.2696Z'
              stroke='#C1C1C1'
              stroke-width='2'
            />
          </svg>
        </div>
        <p>Project done</p>
      </div>
      <div className='count-box'>
        <div>
          <svg width='111' height='58' viewBox='0 0 111 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.1206 36.1946L12.1298 36.1989L12.139 36.2031C15.4882 37.7102 19.2851 38.4511 23.5094 38.4511C26.3278 38.4511 28.9235 38.0365 31.2857 37.1929L31.2956 37.1894L31.3054 37.1856C31.7242 37.0261 32.1375 36.855 32.5455 36.6723L18.0101 54.7444L16.7018 56.3711H18.7894H31.9894H32.5334L32.8289 55.9144L32.829 55.9143L32.8292 55.9141L32.8298 55.9131L32.8324 55.9091L32.8427 55.8931L32.8839 55.8294L33.0489 55.5744L33.6903 54.5832C34.3399 53.7156 35.168 52.5392 36.1721 51.0596C37.1874 49.6168 38.308 47.9891 39.5339 46.177C40.7613 44.4158 41.9887 42.6282 43.216 40.8139C44.4948 38.949 45.6678 37.2161 46.7351 35.6154C47.8539 34.0169 48.7645 32.678 49.4646 31.601C50.1913 30.5109 50.6561 29.8014 50.8378 29.5008C52.0407 27.6396 52.9114 25.8808 53.4244 24.2275C53.9286 22.6032 54.1886 21.0385 54.1894 19.5383C54.2442 15.6605 53.1718 12.332 50.9263 9.62145C48.7564 6.88461 45.65 4.8462 41.6796 3.46724C37.7581 2.08671 33.0801 1.41113 27.6694 1.41113C22.3062 1.41113 17.6725 2.14146 13.7953 3.63588C9.92489 5.07446 6.90123 7.17434 4.79134 9.96853C2.67623 12.7696 1.60559 16.1013 1.54949 19.9164L1.54938 19.9238V19.9311C1.54938 23.6259 2.47597 26.8923 4.35994 29.6897C6.23049 32.4672 8.82946 34.6326 12.1206 36.1946ZM14.2692 20.109L14.2692 20.1084C14.3169 17.3463 15.4517 15.3508 17.7026 13.9894C20.108 12.5671 23.4032 11.8111 27.6694 11.8111C30.5265 11.8111 33.01 12.1491 35.1337 12.8064C37.2459 13.4602 38.8398 14.42 39.9746 15.6494L39.9812 15.6566L39.988 15.6637C41.064 16.7845 41.5968 18.1968 41.5497 19.9848L41.5496 19.9919C41.5039 22.3642 40.3239 24.3483 37.7736 25.9668L37.7735 25.9668L37.7661 25.9716C35.2621 27.5918 31.8199 28.4511 27.3494 28.4511C23.0903 28.4511 19.834 27.6711 17.4898 26.2096C15.2741 24.7443 14.2221 22.7471 14.2692 20.109ZM67.9019 36.1946L67.911 36.1989L67.9203 36.2031C71.2694 37.7102 75.0663 38.4511 79.2906 38.4511C82.109 38.4511 84.7047 38.0365 87.067 37.1929L87.0768 37.1894L87.0866 37.1856C87.5054 37.0261 87.9188 36.855 88.3267 36.6723L73.7914 54.7444L72.483 56.3711H74.5706H87.7706H88.3147L88.6102 55.9144L88.6103 55.9143L88.6104 55.9141L88.6111 55.9131L88.6136 55.9091L88.624 55.8931L88.6652 55.8294L88.8302 55.5744L89.4715 54.5833C90.1211 53.7156 90.9493 52.5392 91.9535 51.0595C92.9687 49.6167 94.0893 47.9891 95.3151 46.177C96.5426 44.4159 97.7699 42.6282 98.9972 40.814C100.276 38.9489 101.449 37.216 102.516 35.6152C103.635 34.0167 104.546 32.678 105.246 31.601C105.973 30.5108 106.437 29.8013 106.619 29.5007C107.822 27.6396 108.693 25.8808 109.206 24.2275C109.71 22.6032 109.97 21.0385 109.971 19.5383C110.025 15.6604 108.953 12.3319 106.707 9.62134C104.537 6.88449 101.431 4.84608 97.4606 3.46714C93.5391 2.08668 88.8612 1.41113 83.4506 1.41113C78.0874 1.41113 73.4537 2.14147 69.5765 3.63591C65.7061 5.07449 62.6825 7.17436 60.5726 9.96853C58.4575 12.7696 57.3868 16.1013 57.3307 19.9164L57.3306 19.9238V19.9311C57.3306 23.6259 58.2572 26.8923 60.1412 29.6897C62.0117 32.4672 64.6107 34.6326 67.9019 36.1946ZM70.0505 20.109L70.0505 20.1084C70.0981 17.3464 71.2329 15.3509 73.4836 13.9895C75.889 12.5671 79.1843 11.8111 83.4506 11.8111C86.3077 11.8111 88.7912 12.1491 90.9149 12.8064C93.0271 13.4602 94.621 14.42 95.7558 15.6494L95.7625 15.6566L95.7692 15.6637C96.8453 16.7845 97.378 18.1968 97.3309 19.9848L97.3308 19.9919C97.2852 22.3642 96.1051 24.3483 93.5548 25.9668L93.5474 25.9716C91.0434 27.5918 87.6012 28.4511 83.1306 28.4511C78.8716 28.4511 75.6153 27.6711 73.2711 26.2097C71.0554 24.7443 70.0034 22.7471 70.0505 20.109Z'
              stroke='#C1C1C1'
              stroke-width='2'
            />
          </svg>
          <svg width='36' height='29' viewBox='0 0 36 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.07178 14.3089C6.55178 14.3089 5.21845 14.0422 4.07178 13.5089C2.95178 12.9756 2.08512 12.2156 1.47178 11.2289C0.858449 10.2422 0.551782 9.06891 0.551782 7.70891C0.551782 5.60224 1.23178 3.97557 2.59178 2.82891C3.95178 1.65557 5.77845 1.0689 8.07178 1.0689C10.3651 1.0689 12.1784 1.65557 13.5118 2.82891C14.8718 3.97557 15.5518 5.60224 15.5518 7.70891C15.5518 9.06891 15.2451 10.2422 14.6318 11.2289C14.0184 12.2156 13.1518 12.9756 12.0318 13.5089C10.9118 14.0422 9.59178 14.3089 8.07178 14.3089ZM8.07178 11.0289C9.08512 11.0289 9.89845 10.7356 10.5118 10.1489C11.1518 9.53557 11.4718 8.72224 11.4718 7.70891C11.4718 6.66891 11.1518 5.85557 10.5118 5.26891C9.89845 4.65557 9.08512 4.34891 8.07178 4.34891C7.03178 4.34891 6.19178 4.65557 5.55178 5.26891C4.93845 5.85557 4.63178 6.66891 4.63178 7.70891C4.63178 8.72224 4.93845 9.53557 5.55178 10.1489C6.19178 10.7356 7.03178 11.0289 8.07178 11.0289ZM27.8318 28.1089C25.5385 28.1089 23.7118 27.5356 22.3518 26.3889C20.9918 25.2156 20.3118 23.5889 20.3118 21.5089C20.3118 19.4289 20.9918 17.8022 22.3518 16.6289C23.7118 15.4556 25.5385 14.8689 27.8318 14.8689C30.0985 14.8689 31.8985 15.4556 33.2318 16.6289C34.5918 17.8022 35.2718 19.4289 35.2718 21.5089C35.2718 23.5889 34.5918 25.2156 33.2318 26.3889C31.8985 27.5356 30.0985 28.1089 27.8318 28.1089ZM27.8318 24.8289C28.8451 24.8289 29.6585 24.5356 30.2718 23.9489C30.9118 23.3622 31.2318 22.5489 31.2318 21.5089C31.2318 20.4956 30.9118 19.6822 30.2718 19.0689C29.6585 18.4556 28.8451 18.1489 27.8318 18.1489C26.7918 18.1489 25.9518 18.4556 25.3118 19.0689C24.6985 19.6556 24.3918 20.4689 24.3918 21.5089C24.3918 22.5489 24.6985 23.3622 25.3118 23.9489C25.9518 24.5356 26.7918 24.8289 27.8318 24.8289ZM23.8318 0.188904L25.9918 1.38891L10.7118 28.9889L8.63178 27.7089L23.8318 0.188904Z'
              fill='#0D0D0D'
            />
          </svg>
        </div>
        <p>Top Feedbak</p>
      </div>
      <div className='count-box'>
        <div>
          <svg width='85' height='58' viewBox='0 0 85 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.06506 11.663V12.663H2.06506H12.3451V42.543V43.543H13.3451H23.7451H24.7451V42.543V2.78297V1.78297H23.7451H2.06506H1.06506V2.78297V11.663ZM50.3221 24.851C50.1459 24.9776 49.9743 25.1072 49.8072 25.24L50.8665 12.423H77.3057H78.3057V11.423V2.54297V1.54297H77.3057H40.2657H39.3423L39.2689 2.46343L36.8689 32.5434L36.7972 33.4415L37.683 33.6061L46.723 35.2861L47.3717 35.4067L47.7377 34.8577C48.4922 33.726 49.5076 32.824 50.806 32.1507C52.1441 31.4569 53.6132 30.9821 55.2201 30.731L55.2351 30.7286L55.25 30.7258C56.8989 30.4167 58.5172 30.263 60.1057 30.263C61.6274 30.263 63.0626 30.4404 64.4147 30.791L64.4353 30.7963L64.4562 30.8008C65.8427 31.0979 67.029 31.587 68.031 32.255L68.0398 32.2609L68.0488 32.2666C69.0961 32.9331 69.8843 33.751 70.4375 34.7191L70.4462 34.7344L70.4554 34.7493C71.0349 35.6854 71.3457 36.8294 71.3457 38.223C71.3457 39.6165 71.0349 40.7605 70.4554 41.6966C69.8568 42.6636 69.0244 43.4559 67.9336 44.0724L67.9252 44.0771L67.917 44.082C66.8469 44.7144 65.6167 45.1851 64.2162 45.4852L64.1953 45.4896L64.1747 45.495C62.8226 45.8455 61.3874 46.023 59.8657 46.023C57.6597 46.023 55.5952 45.7411 53.6675 45.1835C51.8142 44.6321 50.3301 43.8188 49.1814 42.7658L49.1729 42.758L49.1642 42.7504C48.0636 41.7874 47.4389 40.6211 47.2575 39.215L47.1449 38.343H46.2657H36.3457H35.3032L35.3466 39.3846C35.46 42.1069 36.2007 44.5504 37.5867 46.6872L37.5903 46.6926C39.0067 48.8455 40.8719 50.6501 43.1701 52.1075C45.4537 53.5556 48.0571 54.6603 50.9703 55.4298C53.8878 56.2005 56.9875 56.583 60.2657 56.583C64.8959 56.583 68.9755 55.8755 72.4809 54.4299C75.9881 53.037 78.7619 50.9838 80.7537 48.2521C82.7645 45.4945 83.7457 42.1593 83.7457 38.303C83.7457 35.465 83.2446 32.9176 82.2136 30.6839C81.1923 28.471 79.7645 26.6369 77.9288 25.2008C76.115 23.7288 74.0003 22.6333 71.5984 21.9068C69.2532 21.1812 66.7268 20.823 64.0257 20.823C61.4803 20.823 59.0128 21.1823 56.6266 21.9027C54.2393 22.57 52.1331 23.5492 50.3221 24.851Z'
              stroke='#C1C1C1'
              stroke-width='2'
            />
          </svg>

          <svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.893189 5.73703H19.2932V9.53703H0.893189V5.73703ZM12.2532 0.0970304V15.217H7.93319V0.0970304H12.2532Z'
              fill='#0D0D0D'
            />
          </svg>
        </div>
        <p>team member </p>
      </div>
    </div>
  )
}

const Line = ({ text, children, classes, odd }) => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, odd ? -1000 : 1000])

  return (
    <div className={twMerge(`absolute ${odd ? 'left-[-20px]' : 'left-[-1000px]'}  origin-left`, classes)}>
      <motion.div
        className='flex w-max items-center justify-between gap-[40px] py-2 md:gap-[90px] md:py-6'
        style={{ translateX: x }}
      >
        {children}
        {[...Array(10)].map((_, i) => (
          <span key={i} className='text-base text-[#252432] md:text-[20px]'>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const Seo = () => {
  return (
    <div className='relative w-full'>
      <figure className='mx-auto h-[600px] w-full select-none overflow-hidden px-4 md:h-auto md:w-max'>
        <Image className='size-full rounded-2xl md:h-auto' src={seoBg} alt='bg' />
      </figure>
      <Line
        odd={false}
        text={'Search Engine Optimization (SEO)'}
        classes='top-[-60%] md:top-[10%] rotate-[28deg] md:rotate-[9deg] z-20'
      >
        <div className={`absolute left-0 top-0 -z-10 size-full bg-[#FFC690]`}></div>
      </Line>
      <Line odd={true} text={'Content Marketing'} classes={'top-[70%] rotate-[-28deg] md:rotate-[-9deg] z-10'}>
        <div className={`absolute left-0 top-0 -z-10 size-full bg-[#f6f6f6]`}></div>
      </Line>
    </div>
  )
}

export default function SocialSection() {
  return (
    <section className='relative bg-[#F5F8FF] pb-[180px] pt-[100px] md:pb-[260px] md:pt-[186px]'>
      <Social3D />
      <Counts />
      <Seo />
    </section>
  )
}
