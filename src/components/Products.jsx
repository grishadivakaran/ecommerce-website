import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Link } from "react-router-dom";

const defaultForm = {
  title: "",
  description: "",
  price: "",
  category: "",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Number(value || 0));

  const fetchProducts = async () => {
    setMessage("");

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setMessage(error.message);
      return;
    }

    setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || form.price === "") {
      setMessage("Please fill in title, description, and price.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("products").insert([
      {
        name: form.title.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        category: form.category.trim() || "General",
        rating: 4.5,
        stock: 10,
        image_url: fallbackImage,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage(error.message);
    } else {
      setForm(defaultForm);
      await fetchProducts();
      setMessage("Product added successfully.");
    }

    setLoading(false);
  };

  const featuredProduct = products[0] || {
    id: 0,
    name: "MacBook Pro M4",
    description:
      "Experience next-generation performance with Apple's most powerful laptop.",
    price: 149999,
    image_url: fallbackImage,
  };

  return (
    <>
      <style>{`
        .products{
          padding:100px 8%;
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          color:white;
        }

        .products h2{
          text-align:center;
          font-size:3rem;
          margin-bottom:60px;
          color:#e2e8f0;
        }

        .add-product-form{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,.15);
          border-radius:20px;
          padding:24px;
          margin:0 auto 60px;
          max-width:800px;
        }

        .add-product-form h3{
          margin-bottom:18px;
          color:#e2e8f0;
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }

        .form-grid input,
        .form-grid textarea{
          width:100%;
          padding:14px;
          border-radius:12px;
          border:1px solid rgba(148, 163, 184, 0.35);
          background:#0f172a;
          color:#e2e8f0;
          outline:none;
        }

        .form-grid textarea{
          min-height:130px;
          resize:vertical;
          grid-column:span 2;
        }

        .form-grid button{
          grid-column:span 2;
          padding:14px;
          border:none;
          border-radius:12px;
          background:linear-gradient(135deg, #7c3aed, #2563eb);
          color:white;
          cursor:pointer;
          font-weight:600;
        }

        .form-grid button:disabled{
          opacity:.65;
          cursor:not-allowed;
        }

        .form-message{
          margin-top:12px;
          color:#bfdbfe;
        }

        .featured-product{
          display:flex;
          gap:40px;
          align-items:center;
          margin-bottom:80px;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,.15);
          border-radius:30px;
          padding:30px;
        }

        .featured-product img{
          width:50%;
          border-radius:20px;
        }

        .featured-content h3{
          font-size:2.5rem;
          margin-bottom:15px;
        }

        .featured-content p{
          color:#cbd5e1;
          margin-bottom:20px;
        }

        .featured-btn{
          padding:12px 25px;
          border:none;
          border-radius:12px;
          background:linear-gradient(135deg, #7c3aed, #2563eb);
          color:white;
          cursor:pointer;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
          gap:25px;
        }

        .product-card{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(15px);
          border-radius:20px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.15);
          transition:.4s;
        }

        .product-card:hover{
          transform:translateY(-10px);
          box-shadow:0 0 25px rgba(124,58,237,.4);
        }

        .product-card img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .product-info{
          padding:20px;
        }

        .product-info h3{
          margin-bottom:10px;
        }

        .description{
          color:#cbd5e1;
          font-size:0.95rem;
          margin-bottom:10px;
          min-height:48px;
        }

        .price{
          color:#60a5fa;
          font-weight:bold;
          margin-bottom:15px;
        }

        .buy-btn{
          width:100%;
          padding:12px;
          border:none;
          border-radius:10px;
          background:linear-gradient(135deg, #7c3aed, #2563eb);
          color:white;
          cursor:pointer;
        }

        @media(max-width:900px){
          .featured-product{
            flex-direction:column;
          }

          .featured-product img{
            width:100%;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          .form-grid textarea,
          .form-grid button{
            grid-column:span 1;
          }
        }
      `}</style>

      <section className="products">
        <h2>Featured Collection</h2>

        <form className="add-product-form" onSubmit={handleSubmit}>
          <h3>Add New Product</h3>

          <div className="form-grid">
            <input
              type="text"
              name="title"
              placeholder="Product name"
              value={form.title}
              onChange={handleChange}
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Product"}
            </button>
          </div>

          {message && (
            <div className="form-message">
              <p>{message}</p>
            </div>
          )}
        </form>

        <div className="featured-product">
          <img
            src={featuredProduct.image_url || fallbackImage}
            alt={featuredProduct.name}
          />

          <div className="featured-content">
            <h3>{featuredProduct.name}</h3>
            <p>{featuredProduct.description}</p>
            <h2 style={{ color: "#60a5fa" }}>
              {formatPrice(featuredProduct.price)}
            </h2>

            <Link to={`/product/${featuredProduct.id}`}>
              <button className="featured-btn">View Product</button>
            </Link>
          </div>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image_url || fallbackImage} alt={item.name} />

              <div className="product-info">
                <h3>{item.name}</h3>
                <p className="description">{item.description}</p>
                <p className="price">{formatPrice(item.price)}</p>

                <Link to={`/product/${item.id}`}>
                  <button className="buy-btn">View Product</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}