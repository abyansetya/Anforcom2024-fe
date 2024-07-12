import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Image {
  id: number
  positionX: number
  positionY: number
  src: string
}

const Linimasa: React.FC = () => {
  const [move, setMove] = useState<number>(1)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const desktopPositions: Image[] = [
      { id: 1, positionX: 0, positionY: -120, src: 'assets/images/PBatch1.svg' },
      { id: 2, positionX: 250, positionY: -40, src: 'assets/images/PBatch2.svg' },
      { id: 3, positionX: 500, positionY: -120, src: 'assets/images/Ppengumpulan.svg' },
      { id: 4, positionX: 750, positionY: -120, src: 'assets/images/PpenyisihanDLC.svg' },
      { id: 5, positionX: 750, positionY: -120, src: 'assets/images/Ppengumuman.svg' },
      { id: 6, positionX: 750, positionY: -120, src: 'assets/images/PFinal.svg' }
    ]

    const tabletPositions: Image[] = [
      { id: 1, positionX: 0, positionY: -80, src: 'assets/images/PBatch1.svg' },
      { id: 2, positionX: 110, positionY: -20, src: 'assets/images/PBatch2.svg' },
      { id: 3, positionX: 220, positionY: -80, src: 'assets/images/Ppengumpulan.svg' },
      { id: 4, positionX: 330, positionY: -80, src: 'assets/images/PpenyisihanDLC.svg' },
      { id: 5, positionX: 330, positionY: -80, src: 'assets/images/Ppengumuman.svg' },
      { id: 6, positionX: 330, positionY: -80, src: 'assets/images/PFinal.svg' }
    ]

    const mobilePositions: Image[] = [
      { id: 1, positionX: 0, positionY: -40, src: 'assets/images/PBatch1.svg' },
      { id: 2, positionX: 15, positionY: -20, src: 'assets/images/PBatch2.svg' },
      { id: 3, positionX: 30, positionY: -40, src: 'assets/images/Ppengumpulan.svg' },
      { id: 4, positionX: 45, positionY: -40, src: 'assets/images/PpenyisihanDLC.svg' },
      { id: 5, positionX: 45, positionY: -40, src: 'assets/images/Ppengumuman.svg' },
      { id: 6, positionX: 45, positionY: -40, src: 'assets/images/PFinal.svg' }
    ]

    setImages(
      window.innerWidth <= 768 ? mobilePositions : window.innerWidth <= 1024 ? tabletPositions : desktopPositions
    )

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const moveLeft = () => {
    setImages((prevImages) =>
      prevImages.map((img) => {
        let newY = img.positionY
        let newX = img.positionX
        const incrementX = isMobile ? 135 : isTablet ? 310 : 500
        const incrementY = isMobile ? 20 : isTablet ? 55 : 80

        if (move === 1) {
          if (img.id === 1) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 2) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 3) {
            newX -= incrementX
            newY += incrementY
          } else if (img.id === 4) {
            newX -= incrementX
          }
          setMove(2)
        } else if (move === 2) {
          if (img.id === 2) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 3) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 4) {
            newX -= incrementX
            newY += incrementY
          } else if (img.id === 5) {
            newX -= isMobile ? incrementX * 1.9 : isTablet ? incrementX * 1.65 : incrementX * 1.5
          }
          setMove(3)
        } else if (move === 3) {
          if (img.id === 3) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 4) {
            newX -= incrementX
            newY -= incrementY
          } else if (img.id === 5) {
            newX -= incrementX
            newY += incrementY
          } else if (img.id === 6) {
            newX -= isMobile ? incrementX * 2.8 : isTablet ? incrementX * 2.3 : incrementX * 2
          }
          setMove(4)
        }
        return {
          ...img,
          positionX: newX,
          positionY: newY
        }
      })
    )
  }

  const moveRight = () => {
    setImages((prevImages) =>
      prevImages.map((img) => {
        let newY = img.positionY
        let newX = img.positionX
        const incrementX = isMobile ? 135 : isTablet ? 310 : 500
        const incrementY = isMobile ? 20 : isTablet ? 55 : 80

        if (move === 2) {
          if (img.id === 1) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 2) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 3) {
            newY -= incrementY
            newX += incrementX
          } else if (img.id === 4) {
            newX += incrementX
          }
          setMove(1)
        } else if (move === 3) {
          if (img.id === 2) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 3) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 4) {
            newY -= incrementY
            newX += incrementX
          } else if (img.id === 5) {
            newX += isMobile ? incrementX * 1.9 : isTablet ? incrementX * 1.65 : incrementX * 1.5
          }
          setMove(2)
        } else if (move === 4) {
          if (img.id === 3) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 4) {
            newY += incrementY
            newX += incrementX
          } else if (img.id === 5) {
            newY -= incrementY
            newX += incrementX
          } else if (img.id === 6) {
            newX += isMobile ? incrementX * 2.8 : isTablet ? incrementX * 2.3 : incrementX * 2
          }
          setMove(3)
        }

        return {
          ...img,
          positionX: newX,
          positionY: newY
        }
      })
    )
  }

  return (
    <div className='w-full relative'>
      <img src={'assets/images/lengkung.svg'} className='w-full' />

      {/* desktop */}
      <div className='hidden lg:flex w-full'>
        {images.map((image) => (
          <motion.img
            key={image.id}
            id={String(image.id)}
            className={`self-end w-[250px] flex`}
            src={image.src}
            alt=''
            animate={{ x: image.positionX, y: image.positionY }}
            transition={{ duration: 0.5 }} // Animation duration
          />
        ))}
      </div>

      {/* tablet */}
      <div className='hidden md:flex lg:hidden w-full'>
        {images.map((image) => (
          <motion.img
            key={image.id}
            id={String(image.id)}
            className={`self-end w-[200px] flex`} // Adjusted size for tablet
            src={image.src}
            alt=''
            animate={{ x: image.positionX, y: image.positionY }}
            transition={{ duration: 0.5 }} // Animation duration
          />
        ))}
      </div>

      {/* mobile */}
      <div className='flex md:hidden'>
        {images.map((image) => (
          <motion.img
            key={image.id}
            id={String(image.id)}
            className={`self-end w-[120px] flex`} // smaller image for mobile
            src={image.src}
            alt=''
            animate={{ x: image.positionX, y: image.positionY }}
            transition={{ duration: 0.5 }} // Animation duration
          />
        ))}
      </div>
      <button
        disabled={move === 1}
        onClick={moveRight}
        className='absolute flex left-0 top-1/2 transform -translate-y-1/2 disabled:cursor-not-allowed bg-gray-300 p-2'
      >
        &lt;
      </button>
      <button
        disabled={move === 4}
        onClick={moveLeft}
        className='absolute flex right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 disabled:cursor-not-allowed'
      >
        &gt;
      </button>
    </div>
  )
}

export default Linimasa
