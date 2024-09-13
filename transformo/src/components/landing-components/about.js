import React from 'react';

const About = () => {
  return (
    <section className="min-h-[50vh] w-full py-[4.5vw] lg:mt-20 mt-6 max-lg:flex-col px-10 flex items-center  justify-between relative z-10" id='about'>
      <h1 className="text-[2vw] max-lg:mt-10 max-lg:w-full w-[60%] max-lg:order-2 max-lg:leading-[7vw] leading-[4vw] text-black font-semibold textColorChange max-md:text-center" >
      Automate converting non-machine-readable PDFs and Word files to machine-readable formats, improving data accessibility, extraction, and usability for enhanced insights.
      </h1>
      <div className="w-[30%] -mt-10 max-lg:w-full  max-lg:h-[28rem] max-md:h-[20rem]">
        <img
          src={"https://th.bing.com/th/id/OIP.iutN121Le42QYwv2UgLJfgHaDt?rs=1&pid=ImgDetMain"}
          alt="Holding Thumb"
          className="w-full rounded-[30px] h-full"
        />
      </div>
    </section>
  );
};

export default About;
