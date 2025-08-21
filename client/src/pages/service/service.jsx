import React from 'react';
import Navbar from "../../components/Navbargallery/navbar";
import Footer from "../../components/Footer/footer.jsx";
import backgroundImage from "../newimg/background.png";
import ss2 from "../newimg/ss2.png";
import s2 from "../newimg/s2.png";
import s3 from "../newimg/s3.png";
import s4 from "../newimg/s4.png";

const PlanStyleManageSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-16 gap-8 md:gap-44">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold my-4 text-gray-800">Plan, Style & Manage</h2>
        <h3 className="text-2xl italic text-gray-500 mb-4">An effortless wedding planning experience</h3>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          When you just want to leave it up to the experts, our full-service planning allows you to do exactly that. 
          From initial brief through to final creation, we simply take care of everything.
        </p>
      </div>
      <div className="w-full md:w-3/6 flex justify-center relative left-24">
        <img
          src={ss2}
          alt="Plan, Style & Manage"
          className="w-full md:w-full shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

const ServiceSection = ({ title, subtitle, description, leftImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-16 py-12 gap-8 md:gap-4">
      <div className="w-full md:w-2/6 flex justify-center relative right-24">
        {leftImage && (
          <img
            src={s2}
            alt={title}
            className="shadow-lg w-3/4 md:w-full rounded-lg relative md:top-24 top-8"
          />
        )}
      </div>
  
      <div className="w-full md:w-9/12 text-center">
        <h2 className="text-4xl font-bold my-4 text-gray-800">{title}</h2>
        <h3 className="text-2xl italic text-gray-500 mb-4">{subtitle}</h3>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">{description}</p>
      </div>
  
      <div className="w-full md:w-2/6 flex justify-center relative left-24">
        <img
          src={s3}
          alt={title}
          className="shadow-lg w-3/4 md:w-full rounded-lg relative md:-top-12 top-4"
        />
      </div>
    </div>
  );
};

const StyleSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-16 py-12 gap-12 md:gap-36">
      <div className="w-full md:w-1/4 flex justify-center relative right-24">
        <img
          src={s4}
          alt="Style"
          className="shadow-lg w-3/4 md:w-full rounded-lg"
        />
      </div>
  
      <div className="w-full md:w-1/2 text-center md:text-right px-4 md:px-6">
        <h2 className="text-4xl font-bold my-4 text-gray-800">Style</h2>
        <h3 className="text-2xl italic text-gray-500 mb-4">
          For the look and feel of your day
        </h3>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
        Our design service focuses on beauty and details, creating weddings that feel connected from the invitation to the reception.
        </p>
      </div>
    </div>
  );
};

const WeddingServicesPage = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
  
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl font-serif font-bold mb-6">Who We Are</h1>
          <p className="text-lg leading-relaxed">
            White Events is a premier event design and planning studio dedicated
            to creating unforgettable moments. Based in Perth, we specialize in
            designing events that are as unique as our clients, blending creativity
            and precision to make your dreams come true.
          </p>
        </div>
      </section>
      <div className="relative">
        {/* Gray background on the left for the first half */}
        <div className="absolute bottom-0 left-0 w-[25%] h-1/2 bg-gray-200 z-0"></div>

        {/* Gray background on the right for the second half */}
        <div className="absolute top-0 right-0 w-[25%] h-1/2 bg-gray-200 z-0"></div>

        {/* Main content */}
        <div className="relative  max-w-screen-xl mx-auto flex flex-col items-center justify-center z-10">
          <PlanStyleManageSection />
          <ServiceSection
            title="Style & Manage"
            subtitle="For a beautiful wedding that flows seamlessly"
            description="For a flawlessly styled wedding and a day that runs seamlessly, our wedding styling & management service can be designed to suit the varying needs of each and every couple. This service allows you to be a little hands-on with your wedding plans, while we take care of all the finer details, to create the perfect look and feel for your wedding day. Then, as the big day draws closer, we'll manage every element, ensuring that no detail is overlooked, that each supplier is properly confirmed, and of course, that the day itself flows effortlessly from start to finish."
            leftImage={true}
            leftImageUrl="/path-to-left-image.jpg"
            rightImageUrl="/path-to-right-image.jpg"
          />
          <StyleSection />
          <PlanStyleManageSection />
          <ServiceSection
            title="Style & Manage"
            subtitle="For a beautiful wedding that flows seamlessly"
            description="For a flawlessly styled wedding and a day that runs seamlessly, our wedding styling & management service can be designed to suit the varying needs of each and every couple. This service allows you to be a little hands-on with your wedding plans, while we take care of all the finer details, to create the perfect look and feel for your wedding day. Then, as the big day draws closer, we'll manage every element, ensuring that no detail is overlooked, that each supplier is properly confirmed, and of course, that the day itself flows effortlessly from start to finish."
            leftImage={true}
            leftImageUrl="/path-to-left-image.jpg"
            rightImageUrl="/path-to-right-image.jpg"
          />
        </div>
      </div>
      <Footer />
    </>
  );  
};

export default WeddingServicesPage;
