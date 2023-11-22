"use client";
import { createContext, useContext, useState } from "react";
import homelogo from "src/Images/Home.svg";

const ImageContext = createContext();

export function useImageContext() {
  return useContext(ImageContext);
}

export function ImageProvider({ children }) {
  const [image, setImage] = useState(homelogo);
  const [vedio, setVedio] = useState(false);

  const changeImage = (newImage) => {
    setImage(newImage);
  };

  const changeVedio = (vedios) => {
    setVedio(vedios);
  };

  return (
    <ImageContext.Provider value={{ image, vedio, changeImage , changeVedio }}>
      {children}
    </ImageContext.Provider>
  );
}
