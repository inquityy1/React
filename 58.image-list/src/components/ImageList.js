import react from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <img src={img.webformatURL} alt="" />;
  });
  return <div>{images}</div>;
};

export default ImageList;
