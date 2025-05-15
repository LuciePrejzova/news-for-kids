import imagePlaceholder from "../assets/teenage-news-1.png";
import imagePlaceholder2 from "../assets/teenage-news-2.png";
import { useRef } from "react";

const ImagePlaceholder = ({title}) => {
  const imageArr = [imagePlaceholder, imagePlaceholder2];
  const randomInt = useRef(Math.floor(Math.random() * 2));
  return (
    <div>
      <img src={imageArr[randomInt.current]} alt={title}/>
    </div>
  );
};

export default ImagePlaceholder;
