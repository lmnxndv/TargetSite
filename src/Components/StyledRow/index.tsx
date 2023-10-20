import { Link } from "react-router-dom";
import "./style.css";
import { MediaBlock, mediaBlock } from "../../data/data";

const StyledRow: React.FC = () => {
  return (
    <div className="styledRow">
      <div className="container">
        <div className="row-title">
          <h1>Save on style</h1>
        </div>
        <div className="row-cards">
          {mediaBlock.map((block: MediaBlock) => (
            <Link to={`/product/${block.id}`}>
              <div className="card" key={block.id}>
                <img src={block.image} alt={block.name} />
                <h3>{block.name}</h3>
                <p>{block.percent}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyledRow;
