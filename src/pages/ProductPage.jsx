import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return <div>Produkt-ID: {id}</div>;
};

export default ProductPage;
