// src/components/AboutUs.js
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  MdEmail
} from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">About Us</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700">
            Welcome to Property Pioneer! We are dedicated to providing the best real estate services to our customers. Our mission is to deliver high-quality properties that meet the needs of our diverse client base.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to continuously innovate and offer top-notch services to our customers. We believe in the power of technology and strive to integrate the latest advancements in our offerings.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-700">
              We have a passionate team of professionals who are committed to excellence. Our team's expertise spans across various domains, ensuring comprehensive solutions for our clients.
            </p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-row ml-40  ">
          <div className="flex flex-row gap-4 flex-1">
         <MdEmail className="mt-1.5"/>  <a  href="mailto:abhinpatel11@gmail.com?subject=Inquiry%20from%20Property%20Pioneer%20Website" className="text-blue-500 hover:underline ">Gmail</a>
          </div>
          <div className="flex flex-row gap-4 flex-1">
         <FaLinkedin className="mt-1.5"/>  <a  href="https://www.linkedin.com/in/patel-abhi-366391242/" className="text-blue-500 hover:underline ">Linkedin</a>
          </div>
          <div className="flex flex-row gap-4 flex-1">
         <FaTwitter className="mt-1.5"/>  <a  href="https://x.com/_Abhi_Ptl_" className="text-blue-500 hover:underline ">Twitter</a>
          </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default AboutUs;