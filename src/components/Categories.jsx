export default function Categories() {
  const categories = [
    {
      title: "Premium Laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
    },
    {
      title: "Smartphones",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
    },
    {
      title: "Gaming",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000",
    },
    {
      title: "Audio",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
    },
    {
      title: "Smart Watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000",
    },
  ];

  return (
    <>
      <style>{`
        .categories{
          padding:100px 8%;
         background: linear-gradient(135deg, #0f172a, #1e3a8a);
          color:white;
        }

        .categories h2{
          text-align:center;
          font-size:3rem;
          margin-bottom:15px;
          color:#e2e8f0;
        }

        .categories p{
          text-align:center;
          color:#cbd5e1;
          margin-bottom:50px;
        }

        .category-layout{
          display:grid;
          grid-template-columns:2fr 1fr 1fr;
          gap:20px;
        }

        .category-card{
          position:relative;
          overflow:hidden;
          border-radius:25px;
          min-height:250px;
          cursor:pointer;
        }

        .category-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:.5s;
        }

        .category-card:hover img{
          transform:scale(1.08);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            transparent,
            rgba(0,0,0,.8)
          );
          display:flex;
          align-items:flex-end;
          padding:25px;
        }

        .overlay h3{
          font-size:1.6rem;
        }

        .featured{
          grid-row:span 2;
          min-height:520px;
        }

        @media(max-width:900px){
          .category-layout{
            grid-template-columns:1fr;
          }

          .featured{
            min-height:350px;
          }
        }
      `}</style>

      <section className="categories">
        <h2>Explore Categories</h2>
        <p>Find the latest tech across every category</p>

        <div className="category-layout">
          <div className="category-card featured">
            <img src={categories[0].image} alt="" />
            <div className="overlay">
              <h3>{categories[0].title}</h3>
            </div>
          </div>

          {categories.slice(1).map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.image} alt="" />
              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}