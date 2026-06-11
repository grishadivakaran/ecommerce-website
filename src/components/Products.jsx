export default function Products() {
  const products = [
    {
      name: "MacBook Pro M4",
      price: "₹1,49,999",
      image:
        "https://www.androidauthority.com/wp-content/uploads/2023/02/Apple-MacBook-Pro-2023-sitting-on-desk-with-AA-site-on-screen-scaled.jpg"
    },
    {
      name: "iPhone 17 Pro",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
    },
    {
      name: "Sony XM5",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
    },
    {
      name: "Gaming Keyboard",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1000",
    },
  ];

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
          color:#e2e8f0;x
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
          background:linear-gradient(
            135deg,
            #7c3aed,
            #2563eb
          );
          color:white;
          cursor:pointer;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(
            auto-fit,
            minmax(250px,1fr)
          );
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
          background:linear-gradient(
            135deg,
            #7c3aed,
            #2563eb
          );
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
        }
      `}</style>

      <section className="products">
        <h2>Featured Collection</h2>

        <div className="featured-product">
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2023/02/Apple-MacBook-Pro-2023-sitting-on-desk-with-AA-site-on-screen-scaled.jpg"
            alt="..."
          />

          <div className="featured-content">
            <h3>MacBook Pro M4</h3>

            <p>
              Experience next-generation performance with
              Apple's most powerful laptop.
            </p>

            <h2 style={{ color: "#60a5fa" }}>
              ₹1,49,999
            </h2>

            <button className="featured-btn">
              Shop Now
            </button>
          </div>
        </div>

        <div className="product-grid">
          {products.slice(1).map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="product-info">
                <h3>{item.name}</h3>

                <p className="price">
                  {item.price}
                </p>

                <button className="buy-btn">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}