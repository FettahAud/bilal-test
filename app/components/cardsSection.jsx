import Image from 'next/image'

const CardTitle = ({ title, style }) => {
  return (
    <h1 className='absolute font-inter text-[200px] font-black text-[#0A0B1E]' style={style}>
      {title}
    </h1>
  )
}

const Row = ({ image, title, description, dark = false, odd = false }) => {
  return (
    <div className={`flex items-center justify-between gap-20 ${odd ? 'flex-row-reverse' : ''}`}>
      <figure className='relative'>
        <Image src={image.src} alt={image.alt} objectFit='contain' width={image.width} height={image.height} />
      </figure>
      <article className={`flex flex-1 flex-col gap-5 ${dark ? 'text-white' : 'text-black'}`}>
        <header>
          <h3 className='text-[39px] leading-[48px]'>{title}</h3>
        </header>
        <p className='text-base font-normal leading-6'>{description}</p>
      </article>
    </div>
  )
}

export default function CardsSection() {
  return (
    <section id='cards-wrapper' className='flex flex-col gap-[150px] px-40 py-[200px]'>
      <div className='relative bg-[#252525] px-[80px] py-[150px]'>
        <figure className='absolute left-0 top-0 h-[100px] w-full scale-x-125'>
          <Image src={'/curved-vector.svg'} alt='vector' fill />
        </figure>
        <figure className='absolute -bottom-6 left-0 h-[100px] w-full rotate-180 scale-x-125'>
          <Image src={'/curved-vector.svg'} alt='vector' fill />
        </figure>
        <CardTitle
          title='Plan.'
          style={{
            left: 0,
            top: '-180px',
            transform: 'rotate(-10deg)',
          }}
        />
        <Row
          image={{ src: '/cards-section/1.png', alt: 'Image ', width: 520, height: 500 }}
          title='Prepare sessions that practically run themselves'
          dark={true}
          description={`Founded by industry pioneers, we blend creativity, data-driven strategies, and cutting-edge technology. Our team, composed of experts versed in the latest digital trends and AI-driven marketing, crafts bespoke strategies tailored to your brand. We analyze trends, harness the power of data, and leverage AI to ensure your online presence stands out in the crowded digital landscape. From chatbot-driven customer engagement to immersive social media campaigns, we redefine digital marketing. Partner with Mazze for innovative solutions, unparalleled expertise, and a roadmap to digital prominence.`}
        />
      </div>
      <div className='relative rounded-[80px] bg-[#FFC690] px-[80px] py-[150px] flex flex-col gap-[180px] mb-20'>
        <CardTitle
          title={'Run.'}
          style={{
            right: 0,
            top: '-180px',
            transform: 'rotate(10deg)',
          }}
        />
        <Row
          image={{
            src: '/cards-section/2.png',
            alt: 'Image ',
            width: 450,
            height: 500,
          }}
          odd={true}
          title={'Your Strategic Digital Allies'}
          description={
            'Founded by industry pioneers, we blend creativity, data-driven strategies, and cutting-edge technology. Our team, composed of experts versed in the latest digital trends and AI-driven marketing, crafts bespoke strategies tailored to your brand. We analyze trends, harness the power of data, and leverage AI to ensure your online presence stands out in the crowded digital landscape. From chatbot-driven customer engagement to immersive social media campaigns, we redefine digital marketing. Partner with Mazze for innovative solutions, unparalleled expertise, and a roadmap to digital prominence.'
          }
        />
        <Row
          image={{
            src: '/cards-section/3.png',
            alt: 'Image ',
            width: 450,
            height: 500,
          }}
          title={'Your Strategic Digital Allies'}
          description={
            'Founded by industry pioneers, we blend creativity, data-driven strategies, and cutting-edge technology. Our team, composed of experts versed in the latest digital trends and AI-driven marketing, crafts bespoke strategies tailored to your brand. We analyze trends, harness the power of data, and leverage AI to ensure your online presence stands out in the crowded digital landscape. From chatbot-driven customer engagement to immersive social media campaigns, we redefine digital marketing. Partner with Mazze for innovative solutions, unparalleled expertise, and a roadmap to digital prominence.'
          }
        />
      </div>
      <div className='relative rounded-[80px] bg-[#FFC690] px-[80px] py-[150px] flex flex-col gap-[180px] mb-20'>
        <CardTitle
          title={'Recap.'}
          style={{
            left: 0,
            top: '-180px',
            transform: 'rotate(-10deg)',
          }}
        />
        <Row
          image={{
            src: '/cards-section/4.png',
            alt: 'Image ',
            width: 450,
            height: 500,
          }}
          odd={true}
          title={'Your Strategic Digital Allies'}
          description={
            'Founded by industry pioneers, we blend creativity, data-driven strategies, and cutting-edge technology. Our team, composed of experts versed in the latest digital trends and AI-driven marketing, crafts bespoke strategies tailored to your brand. We analyze trends, harness the power of data, and leverage AI to ensure your online presence stands out in the crowded digital landscape. From chatbot-driven customer engagement to immersive social media campaigns, we redefine digital marketing. Partner with Mazze for innovative solutions, unparalleled expertise, and a roadmap to digital prominence.'
          }
        />
      </div>
      <div className='relative rounded-[80px] bg-[#FFC690] px-[80px] py-[150px] flex flex-col gap-[180px]'>
        <CardTitle
          title={'Collaborate.'}
          style={{
            right: 0,
            top: '-180px',
            transform: 'rotate(10deg)',
          }}
        />
        <Row
          image={{
            src: '/cards-section/5.png',
            alt: 'Image ',
            width: 450,
            height: 500,
          }}
          title={'Your Strategic Digital Allies'}
          description={
            'Founded by industry pioneers, we blend creativity, data-driven strategies, and cutting-edge technology. Our team, composed of experts versed in the latest digital trends and AI-driven marketing, crafts bespoke strategies tailored to your brand. We analyze trends, harness the power of data, and leverage AI to ensure your online presence stands out in the crowded digital landscape. From chatbot-driven customer engagement to immersive social media campaigns, we redefine digital marketing. Partner with Mazze for innovative solutions, unparalleled expertise, and a roadmap to digital prominence.'
          }
        />
      </div>
    </section>
  )
}
