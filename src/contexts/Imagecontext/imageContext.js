'use client'
import { createContext, useContext, useState } from 'react'
import homelogo from 'src/Images/Home.svg'

const ImageContext = createContext()

export function useImageContext() {
  return useContext(ImageContext)
}

export function ImageProvider({ children }) {
  const [image, setImage] = useState(homelogo)

  const changeImage = (newImage) => {
    setImage(newImage)
  }

  return (
    <ImageContext.Provider value={{ image, changeImage }}>
      {children}
    </ImageContext.Provider>
  )
}
