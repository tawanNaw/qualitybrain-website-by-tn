import React from "react";

 const Footer = () => {
  return (
    <>
      {/* About Us, Media and Contact Us Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-deepGreen">
          <div className="md:border-r md:border-gray-100 p-6">
            <h1 className="text-2xl font-semibold mb-4 text-gray-500">About Us</h1>
            <p className="text-black"> บริษัท ควอลิตี้ เบรน จำกัด </p><br></br>
            <p className="text-black"> Quality brain company limited</p>
          </div>

          <div className="flex flex-col md:border-gray-100 p-6">
            <h1 className="flex items-center text-2xl font-semibold mb-4 text-gray-500">Media</h1>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/qualitybrain.facebook" target="_blank" rel="noopener noreferrer">
                <img src="/logo/facebook.png" alt="Facebook" className="w-12 h-12 object-cover cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/qualitybrain.ig" target="_blank" rel="noopener noreferrer">
                <img src="/logo/instagram.png" alt="Instagram" className="w-12 h-12 object-cover cursor-pointer" />
              </a>
              <a href="https://x.com/qualitybrain_x" target="_blank" rel="noopener noreferrer">
                <img src="/logo/x.png" alt="Twitter" className="w-12 h-12 object-cover cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@qualitybrain.youtube" target="_blank" rel="noopener noreferrer">
                <img src="/logo/youtube.png" alt="YouTube" className="w-12 h-12 object-cover cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@qualitybrain.tiktok" target="_blank" rel="noopener noreferrer">
                <img src="/logo/tik-tok.png" alt="TikTok" className="w-12 h-12 object-cover cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="md:border-l md:border-gray-200 p-6">
            <h1 className="text-2xl font-semibold mb-4 text-gray-500">Contact Us</h1>
            <p className="text-black">tawan.naw@qualitybrain.com</p>
            <p className="text-black">Phone/Line Number: (+66)064-791-6698</p>
          </div>
        </div>
      </section>
      <footer className="p-4 text-center text-deepBlue border-t">
        <p>&copy; 2024 Quality Brain. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;

