"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Play & enjoy any game -- quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your game playing experience with our effortless gaming platform.
        </p>
        <CustomButton
        title= "Explore Games"
        containerStyles = "bg-primary-blue text-white rounded-full mt-10 p-3"
        handleClick = {handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/table.jpeg' alt='hero' fill className='object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default Hero