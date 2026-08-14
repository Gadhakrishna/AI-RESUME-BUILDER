import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{height:'350px',backgroundColor:'#0e0c0a'}} className='container-fluid text-light p-5'>
      <div className="row">
        <div className="col-lg-4">
          <h4 className="mb-3">AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4 className='mb-3'>Contact Us</h4>
          <p> <MdAttachEmail /> resumebuilder@gmail.com</p>
          <p> <FaPhone /> 9087654321</p>
          <h5 className="my-3">Connect With Us</h5>
          <div className="fs-5">
            <BsInstagram />
            <FiFacebook className='mx-3' />
            <FaWhatsapp />

          </div>
        </div>
      </div>
      <h6 className="text-center my-2">Designed & built with ❤️ using React</h6>
    </div>
  )
}

export default Footer
