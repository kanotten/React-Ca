import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return <h1>Product Page - Product ID: {id}</h1>;
}
