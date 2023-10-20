import { SearchOutlined } from "@ant-design/icons"
import './style.css'

const SearchBar = () => {
  return (
    <div className="Searchbar">
        <input type="text" placeholder="What can we help you find?" />
        <button><i className="fa-solid fa-microphone"></i></button>
        <button><SearchOutlined /></button>
    </div>
  )
}

export default SearchBar