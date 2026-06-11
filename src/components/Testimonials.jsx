export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Verified Customer",
      image: "https://i.pravatar.cc/150?img=11",
      review:
        "The product quality is exceptional. Delivery was quick and the packaging felt premium.",
    },
    {
      name: "Priya Patel",
      role: "Tech Enthusiast",
      image: "https://i.pravatar.cc/150?img=32",
      review:
        "One of the best online tech stores I've used. Smooth experience from browsing to checkout.",
    },
    {
      name: "Aman Verma",
      role: "Gamer",
      image: "https://i.pravatar.cc/150?img=15",
      review:
        "The gaming accessories are fantastic. Great prices and amazing customer support.",
    },
  ];

  return (
    <>
      <style>{`
        .testimonials{
          padding:100px 8%;
          background:linear-gradient(
            180deg,
            #0f172a,
            #111827,
            #1e1b4b
          );
          color:white;
          text-align:center;
        }

        .testimonials h2{
          font-size:3rem;
          margin-bottom:15px;
          color:#e2e8f0;
        }

        .testimonials-subtitle{
          color:#cbd5e1;
          margin-bottom:60px;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:30px;
        }

        .testimonial-card{
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,0.15);
          border-radius:25px;
          padding:30px;
          text-align:left;
          transition:0.4s;
          position:relative;
          overflow:hidden;
        }

        .testimonial-card:hover{
          transform:translateY(-10px);
          box-shadow:0 0 30px rgba(124,58,237,.4);
        }

        .quote{
          font-size:3rem;
          color:#8b5cf6;
          margin-bottom:10px;
        }

        .stars{
          color:#fbbf24;
          margin-bottom:15px;
          font-size:1.1rem;
        }

        .review{
          color:#dbeafe;
          line-height:1.8;
          margin-bottom:25px;
        }

        .user{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .user img{
          width:60px;
          height:60px;
          border-radius:50%;
          border:2px solid #8b5cf6;
        }

        .user h4{
          margin:0;
          color:white;
        }

        .user p{
          margin-top:4px;
          color:#94a3b8;
          font-size:0.9rem;
        }

        .stats{
          margin-top:80px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:25px;
        }

        .stat-card{
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,0.15);
          border-radius:20px;
          padding:25px;
        }

        .stat-card h3{
          font-size:2rem;
          background:linear-gradient(
            135deg,
            #8b5cf6,
            #60a5fa
          );
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin-bottom:10px;
        }

        .stat-card p{
          color:#cbd5e1;
        }
      `}</style>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <p className="testimonials-subtitle">
          Trusted by thousands of tech enthusiasts worldwide
        </p>

        <div className="testimonial-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote">❝</div>

              <div className="stars">★★★★★</div>

              <p className="review">{review.review}</p>

              <div className="user">
                <img src={review.image} alt={review.name} />

                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats">
          <div className="stat-card">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h3>4.9★</h3>
            <p>Average Rating</p>
          </div>

          <div className="stat-card">
            <h3>500+</h3>
            <p>Premium Products</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </>
  );
}