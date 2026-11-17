import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  console.log(params.title);
  return <div>la partie dynamique de cette route est : {params.title}</div>;
};

export default Products;
