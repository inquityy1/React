import react from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <img key={img.id} src={img.webformatURL} alt="" />;
  });
  return <div>{images}</div>;
};

export default ImageList;
