import { useParams } from "react-router";
import shoes from "../../data/shoeData";

const ShoesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = shoes.find((prod) => prod.id.toString() === id);
  return (
    <>
      {product ? (
        <div className="shoe-details">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ) : (
        <div>Error!</div>
      )}
    </>
  );
};

export default ShoesPage;
