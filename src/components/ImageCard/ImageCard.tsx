interface ImageCardProps {
  imageUrl: string;
  altText: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText, onClick }) => {
  return (
    <li>
    <div onClick={onClick}>
      <img src={imageUrl} alt={altText || 'Image'} />
      </div>
    </li>
  );
};

export default ImageCard;