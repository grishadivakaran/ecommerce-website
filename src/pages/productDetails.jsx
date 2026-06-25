import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    setProduct(data);
  }

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "50px"
    }}>
      <h1>{product.name}</h1>

      <h2 style={{ color: "#60a5fa" }}>
        ₹{product.price}
      </h2>

      <p>{product.description}</p>
    </div>
  );
}