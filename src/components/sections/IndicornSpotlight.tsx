import Image from "next/image";

export default function IndicornsSpotlight() {
  return (
    // FIXED: Perfectly replicated the exact expansive, premium blue background gradient from the first screenshot
    <section className="relative w-full bg-[radial-gradient(197.93%_77.97%_at_24.55%_26.31%,#003CB3_0%,#001A4D_100%)] px-6 py-12 lg:h-[401px] lg:px-0 lg:py-0 overflow-hidden flex items-center self-stretch">
      
      {/* Centered bounding wrapper matching layout limits */}
      <div className="relative mx-auto w-full max-w-[1440px] h-full flex flex-col lg:block justify-start gap-8">
        
        {/* =========================================
              LEFT SIDE CONTENT BLOCK
              ========================================= */}
        <div className="w-full lg:max-w-[695px] flex flex-col items-center lg:items-start text-center lg:text-left lg:absolute lg:left-[63px] lg:top-[50px]">
          
          {/* Main Heading */}
          <h2 className="m-0 text-[#FBF7F0] font-['Libre_Baskerville',_serif] text-[28px] md:text-[36px] font-medium leading-[140%] max-w-[695px]">
            Indicorns: Celebrating India's Enduring Startups
          </h2>
          
          {/* Subheading: Perfectly aligned bullet structures */}
          <p className="m-0 mt-4 text-[#D3E2FF] font-['Libre_Baskerville',_serif] text-[16px] md:text-[20px] font-semibold leading-[155%] flex flex-wrap items-center justify-center lg:justify-start gap-x-2 md:gap-x-3">
            <span>Profitable</span> 
            
            <span className="inline-flex items-center justify-center h-full text-[28px] md:text-[34px] text-[#D3E2FF] select-none pointer-events-none line-height-none">
              &bull;
            </span> 
            
            <span>₹100 Cr+ revenue</span> 
            
            <span className="inline-flex items-center justify-center h-full text-[28px] md:text-[34px] text-[#D3E2FF] select-none pointer-events-none line-height-none">
              &bull;
            </span> 
            
            <span>Founded &lt; 15 years</span>
          </p>
          
          {/* Button Layer */}
          <button className="group relative mt-6 lg:mt-0 lg:absolute lg:left-0 lg:top-[165px] flex h-[47px] w-[199px] shrink-0 cursor-pointer items-center justify-center gap-[10px] rounded-[9px] border-none bg-white p-[10px] font-['Libre_Baskerville',_serif] text-[16px] font-semibold text-[#001A4D] overflow-hidden transition-all duration-300 shadow-md">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,#D6E4FF_0%,#FFFFFF_55%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          
            <span className="relative z-10 text-center">
              Meet the Indicorns
            </span>
          </button>

          {/* Portfolio Footer Row */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[235px] flex items-center justify-center lg:justify-start gap-4">
            <span className="text-white/60 font-sans text-[13px] tracking-wide uppercase font-medium">
              Portfolio Indicorns
            </span>
            <div className="relative w-[115px] h-[35px]">
              <Image 
                src="/images/logos/ofbusiness_white.svg" 
                alt="OfBusiness" 
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
          </div>
        </div>

        {/* =========================================
              RIGHT SIDE QUOTE CONTAINER
              ========================================= */}
        <div className="w-full lg:max-w-[475px] border-t border-white/10 lg:border-none pt-6 lg:pt-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:absolute lg:right-[112px] lg:top-[81px]">
          <p className="m-0 text-white font-['Poppins',_sans-serif] text-[16px] md:text-[20px] font-light italic leading-[126%] max-w-[475px]">
            "For too long, success in the startup world has been equated solely with sky-high valuations. With Indicorns, we're celebrating a different kind of success — one rooted in fundamentals like profitability, sustainable growth, and real impact."
          </p>
          <p className="m-0 mt-3 text-white/80 font-['Poppins',_sans-serif] text-[14px] md:text-[16px] font-normal tracking-wide">
            - Titan Capital
          </p>
        </div>

      </div>
    </section>
  );
}