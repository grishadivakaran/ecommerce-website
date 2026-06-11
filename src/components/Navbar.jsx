export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 8%;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo h2 {
          color: white;
          margin: 0;
          font-size: 1.8rem;
          font-weight: 700;
        }

        .logo span {
          font-size: 2rem;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: 0.3s;
          position: relative;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: #60a5fa;
          left: 0;
          bottom: -5px;
          transition: 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a:hover {
          color: #60a5fa;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cart {
          font-size: 1.3rem;
          cursor: pointer;
        }

        .shop-btn {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .shop-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .logo h2 {
            font-size: 1.4rem;
          }

          .shop-btn {
            padding: 10px 16px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">
          <span>⚡</span>
          <h2>TechStore</h2>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Categories</a>
          <a href="/">Deals</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <div className="nav-actions">
          <span className="cart">🛒</span>
          <button className="shop-btn">Shop Now</button>
        </div>
      </nav>
    </>
  );
}