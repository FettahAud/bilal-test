import Image from 'next/image'

const CardTitle = ({ title, style }) => {
  return (
    <h1
      className='absolute top-[-70px] font-inter text-[60px] font-black text-[#0A0B1E] md:top-[-180px] md:text-[200px]'
      style={style}
      aria-label={title}
    >
      {title}
    </h1>
  )
}

const Row = ({ image, title, description, dark = false, odd = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-20 md:flex-row ${odd ? 'md:flex-row-reverse' : ''}`}
    >
      <figure className='relative' aria-label={image.alt}>
        <Image src={image.src} alt={image.alt} objectFit='contain' width={image.width} height={image.height} />
      </figure>
      <article
        className={`flex flex-1 flex-col gap-5 ${dark ? 'text-white' : 'text-black'}`}
        aria-labelledby={`article-heading-${title}`}
      >
        <header>
          <h3 id={`article-heading-${title}`} className='text-[39px] leading-[48px]'>
            {title}
          </h3>
        </header>
        <p className='text-base font-normal leading-6'>{description}</p>
      </article>
    </div>
  )
}

export default function CardsSection() {
  return (
    <section id='cards-wrapper' className='flex flex-col gap-[150px] px-4 py-[100px] md:px-40 md:py-[200px]'>
      <div className='relative bg-[#252525] px-[20px] py-[150px] md:px-[80px]'>
        <figure className='absolute -top-10 left-0 h-[100px] w-full scale-125 md:-top-6'>
          <Image src={'/curved-vector.svg'} alt='vector' fill />
        </figure>
        <figure className='absolute -bottom-10 left-0 h-[100px] w-full rotate-180 scale-125 md:-bottom-6'>
          <Image src={'/curved-vector.svg'} alt='vector' fill />
        </figure>
        <CardTitle
          title='Plan.'
          style={{
            left: 0,
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
      <div className='card'>
        <CardTitle
          title={'Run.'}
          style={{
            right: 0,
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
      <div className='card'>
        <CardTitle
          title={'Recap.'}
          style={{
            left: 0,
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
      <div className='card mb-0'>
        <CardTitle
          title={'Collaborate.'}
          style={{
            right: 0,
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
