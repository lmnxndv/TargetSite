import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";
import { Products, allProductsArray } from "../../../data/productsData";
import { Link } from "react-router-dom";

type SearchResult = Pick<Products, "name" | "id" | "image">;

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const handleSearch = (text: string) => {
    const filteredData = allProductsArray.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    const filteredNames = filteredData.map((item) => ({
      name: item.name,
      id: item.id,
      image: item.image,
    }));
    setSearchResult(filteredNames);
  };
  const clearSearch = () => {
    setSearchResult([]);
    setSearchText("");
  };
  return (
    <div className="Searchbar">
      <div className="search-input">
        <input
          type="text"
          placeholder="What can we help you find?"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button>
          <i className="fa-solid fa-microphone"></i>
        </button>
        <button>
          <SearchOutlined />
        </button>
      </div>
      {searchResult.length > 0 && (
        <div
          className="container-bg"
          onClick={clearSearch}
        >
          <div className="result-container">
            <div>
              <ul>
                {searchResult.map((result) => (
                  <li key={result.id}>
                    <img src={result.image} alt="photo" />
                    <Link to={`/products/${result.id}`}>{result.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
