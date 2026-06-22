export default function Footer() {
  return (
    <>
      <style>{`
        .footer{
          background:linear-gradient(
            180deg,
            #0f172a,
            #020617
          );
          color:white;
          padding:80px 8% 30px;
          border-top:1px solid rgba(255,255,255,0.1);
        }

        .newsletter{
          background:rgba(255,255,255,0.05);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:25px;
          padding:40px;
          margin-bottom:60px;
          text-align:center;
        }

        .newsletter h2{
          font-size:2rem;
          margin-bottom:10px;
          color:#e2e8f0;
        }

        .newsletter p{
          color:#cbd5e1;
          margin-bottom:25px;
        }

        .newsletter-box{
          display:flex;
          justify-content:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .newsletter-box input{
          padding:14px 18px;
          width:300px;
          border:none;
          border-radius:12px;
          outline:none;
        }

        .newsletter-box button{
          padding:14px 25px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          color:white;
          background:linear-gradient(
            135deg,
            #7c3aed,
            #2563eb
          );
        }

        .footer-container{
          display:grid;
          grid-template-columns:
            2fr
            1fr
            1fr
            1fr;
          gap:40px;
        }

        .footer-brand h2{
          font-size:2rem;
          margin-bottom:15px;
          background:linear-gradient(
            135deg,
            #8b5cf6,
            #60a5fa
          );
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .footer-brand p{
          color:#94a3b8;
          line-height:1.8;
        }

        .footer-column h3{
          margin-bottom:20px;
        }

        .footer-column ul{
          list-style:none;
          padding:0;
        }

        .footer-column li{
          margin-bottom:12px;
        }

        .footer-column a{
          color:#94a3b8;
          text-decoration:none;
          transition:.3s;
        }

        .footer-column a:hover{
          color:#60a5fa;
        }

        .socials{
          display:flex;
          gap:12px;
          margin-top:20px;
        }

        .social{
          width:45px;
          height:45px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:rgba(255,255,255,0.08);
          cursor:pointer;
          transition:.3s;
        }

        .social:hover{
          transform:translateY(-4px);
          box-shadow:0 0 20px rgba(124,58,237,.5);
        }

        .footer-bottom{
          margin-top:50px;
          border-top:1px solid rgba(255,255,255,0.1);
          padding-top:25px;
          text-align:center;
          color:#64748b;
        }

        @media(max-width:900px){
          .footer-container{
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="newsletter">
          <h2>Stay Updated</h2>

          <p>
            Get notified about new arrivals, exclusive deals,
            and the latest technology trends.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-brand">
            <h2>⚡ TechStore</h2>

            <p>
              Discover premium electronics, innovative gadgets,
              and cutting-edge technology designed to power
              your digital lifestyle.
            </p>

            <div className="socials">
              <div className="social">📘</div>
              <div className="social">📷</div>
              <div className="social">🐦</div>
              <div className="social">▶️</div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Shop</h3>

            <ul>
              <li><a href="/">Laptops</a></li>
              <li><a href="/">Phones</a></li>
              <li><a href="/">Gaming</a></li>
              <li><a href="/">Accessories</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>

            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 TechStore • Designed for the Future 🚀
        </div>
      </footer>
    </>
  );
}