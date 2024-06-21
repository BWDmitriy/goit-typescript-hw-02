import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: { url: string;  alt: string}[];
  onImageClick: (index: number) => void
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          imageUrl={image.url}
          altText={image.alt}
          onClick={() => onImageClick(index)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery