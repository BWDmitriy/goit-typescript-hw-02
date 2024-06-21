import { useState } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsError(false); // Clear error state when input changes
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setIsError(true); // Set error state if input is empty
      return; // Prevent form submission
    }
    onSubmit(inputValue); // Pass inputValue to onSubmit
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
        {isError && <p>Please enter a search term.</p>}
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}

export default SearchBar;