import React from "react";

const Thankyou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-amazon_blue  mb-6">
        Thank You for Shopping with Us!
      </h1>
      <p className="text-lg text-amazon_light ">
        We appreciate your business and hope to see you again soon.
      </p>
      <img
        src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/07/amazon-1200x537-1-1531806703.jpg"
        alt="Thank You"
        className="mt-8 max-w-full h-auto"
      />
    </div>
  );
};

export default Thankyou;
