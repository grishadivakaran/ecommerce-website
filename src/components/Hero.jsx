export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 8%;
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          color: white;
          flex-wrap: wrap;
          gap: 40px;
        }

        .hero-content {
          flex: 1;
          min-width: 300px;
        }

        .hero-content h1 {
          font-size: 4rem;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-content span {
          color: #60a5fa;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 30px;
          max-width: 550px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .shop-btn,
        .learn-btn {
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .shop-btn {
          background: #2563eb;
          color: white;
          border: none;
        }

        .shop-btn:hover {
          transform: translateY(-3px);
        }

        .learn-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .learn-btn:hover {
          background: white;
          color: #0f172a;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .hero-stats h2 {
          color: #60a5fa;
        }

        .hero-image {
          flex: 1;
          min-width: 300px;
          text-align: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 500px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        @media(max-width:768px){
          .hero {
            text-align: center;
            justify-content: center;
          }

          .hero-content h1 {
            font-size: 2.8rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          
            <span style={{ fontFamily: 'Arial, sans-serif' }}>Upgrade Your</span> 
            <h1>
            <span>Tech Lifestyle</span>
          </h1>

          <p>
            Discover premium laptops, smartphones, gaming accessories,
            headphones, and smart gadgets designed to elevate your everyday
            experience.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">View Products</button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2>500+</h2>
              <p>Premium Products</p>
            </div>

            <div>
              <h2>4.9★</h2>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000"
            alt="Latest Technology"
          />
        </div>
      </section>
    </>
  );
}