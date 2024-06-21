import { useEffect, useState, useCallback } from 'react';
import './App.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=WWP0ZkMHW4a1CGgA-GBI0FrCCywjnB3L6d04IFuYIlk&query=${query}&page=${page}`
      );
      const newImages = response.data.results;
      if (page === 1) {
        setImages(newImages);
      } else {
        setImages(prevImages => [...prevImages,...newImages]);
      }
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query) {
    fetchImages();
  }
  }, [fetchImages]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchSubmit = async (inputValue: string) => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };
const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
   const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
       {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          selectedImage={selectedImage}
          onRequestClose={closeModal}
        />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
}

export default App;