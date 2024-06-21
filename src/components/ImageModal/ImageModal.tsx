import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  selectedImage: {
    largeImageURL: string;
    description: string;
  } | null;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, selectedImage, onRequestClose }) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
      className="modal"
      overlayClassName="overlay"
    >
      <img src={selectedImage.largeImageURL} alt={selectedImage.description || 'Selected image'} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;