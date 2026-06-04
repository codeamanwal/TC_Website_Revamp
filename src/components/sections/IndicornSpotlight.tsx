import Image from "next/image";

export default function IndicornsSpotlight() {
  return (
    <section className="indicorns">
      <div className="indicorns__content">
        
        {/* Left Side */}
        <div className="indicorns__left">
          <h2 className="indicorns__heading">
            Indicorns: Celebrating India's Enduring Startups
          </h2>
          
          <p className="indicorns__subheading">
            Profitable &nbsp;&bull;&nbsp; ₹100 Cr+ revenue &nbsp;&bull;&nbsp; Founded &lt; 15 years
          </p>
          
          {/* Button moved to the left side */}
          <button className="indicorns__btn">
            Meet the Indicorns
          </button>

          {/* New Portfolio Indicorns Row */}
          <div className="indicorns__portfolio">
            <span className="indicorns__portfolio-text">Portfolio Indicorns</span>
            <Image 
              src="/images/logos/ofbusiness_white.svg" 
              alt="OfBusiness" 
              width={140} 
              height={40} 
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right Side (Absolutely positioned as requested) */}
        <div className="indicorns__right-quote">
          <p className="indicorns__quote-text">
            "For too long, success in the startup world has been equated solely with sky-high valuations. With Indicorns, we're celebrating a different kind of success — one rooted in fundamentals like profitability, sustainable growth, and real impact."
          </p>
          <p className="indicorns__quote-author">
            -Titan Capital
          </p>
        </div>

      </div>
    </section>
  );
}