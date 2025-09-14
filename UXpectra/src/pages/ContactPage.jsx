import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { HiOutlineMail } from "react-icons/hi";;
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactPage() {
  return (
    <>
    <div className="py-10 bg-white text-center SpaceGrotesk">
      <h2 className="text-3xl font-semibold mb-2">Feel Free To Get In Touch</h2>
      <p className=" mb-4"> <span className=' font-bold' >CodeSpectra </span> is ready to provide you the right solution according to your needs</p>
      <div className="max-w-4xl mx-auto border-[0.5] border-transparent rounded-lg bg-gradient-to-r from-[#88f7ea] to-[#4e45ff] animate-gradient-flow p-[1.3px]">
        <div className="bg-[#F3EEEF] rounded-[6px] flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-left p-6 rounded-tl-lg rounded-bl-lg">
            <h3 className=" font-bold text-[#1E293B] mb-3">Get In Touch</h3>
            <p className="text-[#1E293B] text-[12px] mb-7">We're always excited to collaborate on new projects and help businesses achieve their digital goals. Whether you need a complete website, a mobile app, or just a landing page, we're here to help.</p>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="bg-[#d2cced] text-[#4F46E5] rounded-full p-2 mr-3">
                  {/* Email Icon */}
                  <HiOutlineMail />
                </div>
                <div>
                  <span className="font-bold text-[14px]">Email Us</span><br />
                  <span className=' text-[12px]'>CodeSpectra@gmail.com</span> 
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-[#d2cced] text-[#4F46E5] rounded-full p-2 mr-3">
                  {/* Phone Icon */}
                  <FiPhone />
                </div>
                <div>
                  <span className="font-bold text-[14px]">Call Us</span><br />
                  <span className=' text-[12px]'>(+20)101234567</span> 
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-[#d2cced] text-[#4F46E5] rounded-full p-2 mr-3">
                  {/* Location Icon */}
                  <IoLocationOutline />
                </div>
                <div>
                  <span className="font-bold text-[14px]">Location</span><br />
                  <span className=' text-[12px]'>Zagazig</span> 
                </div>
              </li>
            </ul>
          </div>
          {/* Right Side */}
          <div className="w-full bg-white rounded-tr-lg rounded-br-lg md:w-1/2 text-left p-6">
            <h3 className=" font-bold mb-4">Send us a message</h3>
            <p className="text-[#1E293B] text-[12px] mb-2">We typically respond to all inquiries within 24 hours. Don't hesitate to call us directly.</p>
            <form className="space-y-4">
              <div className=' flex gap-2'> 
              <div className="space-y-1">
                <label htmlFor="name" className="block text-[#1E293B] text-sm font-medium">Name*</label>
                <input id="name" type="text" placeholder="Enter your full name" className="w-full p-2 border-[0.5px] border-[#00000070] rounded-[12px] text-sm" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-[#1E293B] text-sm font-medium">Email*</label>
                <input id="email" type="email" placeholder="user@gmail.com" className="w-full p-2 border-[0.5px] border-[#00000070] rounded-[12px] text-sm" required />
              </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="company" className="block text-[#1E293B] text-sm font-medium">Company</label>
                <input id="company" type="text" placeholder="Enter your company name" className="w-full p-2 border-[0.5px] border-[#00000070] rounded-[12px] text-sm" />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="block text-[#1E293B] text-sm font-medium">Message*</label>
                <textarea id="message" placeholder="Enter your message" className="w-full p-2 border-[0.5px] border-[#00000070] rounded-[12px] h-10 text-sm" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#4F46E5] text-white py-2 rounded-[14px] hover:bg-[#201b7a]">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}