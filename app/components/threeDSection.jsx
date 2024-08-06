import Image from 'next/image'
import graphCircle from '/public/graph-circle.svg'
import { Suspense } from 'react'
import { Spring } from '@/components/canvas/Examples'
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

export default function ThreeDSection() {
  return (
    <section className='flex h-screen justify-between gap-20 bg-[#f5f8ff] font-pop *:flex-1'>
      <div className='relative flex h-full items-center'>
        <figure>
          <Image src={graphCircle} alt='graph circle' style={{ maxHeight: '625px' }} />
        </figure>
      </div>
      <article className='pt-[58px]'>
        <header className='mb-[130px] flex items-center gap-[60px]'>
          <Image src={'/orange-logo.svg'} alt='Orange logo' width={50} height={50} />
          <h3 className='text-4xl font-normal uppercase'>Embrace the Extraordinary: Elevate Your Reality in 3D!</h3>
        </header>
        <div className='grid grid-cols-2 gap-[40px]'>
          <p className='text-[24px] font-medium'>
            Step into the captivating world of 3D technology, where images and objects come to life with depth and
            realism. Explore our diverse applications in entertainment, architecture, gaming, and beyond. Unleash your
            creativity and experience the limitless possibilities of our 3D realm
          </p>
          <div className='h-full'>
            <View className='relative sm:size-full'>
              <Suspense fallback={null}>
                <Spring />
                <pointLight position={[-10, -10, -10]} color='white' decay={0.2} />
                <Common color={''} />
              </Suspense>
            </View>
          </div>
        </div>
      </article>
    </section>
  )
}
