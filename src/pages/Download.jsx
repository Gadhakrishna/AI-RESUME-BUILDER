import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function Resume() {
  return (
    <div className='m-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Download Resume History</h2>
        <Link to={'/resume-details'}><IoArrowBack /> Back</Link>
      </div>
      <h6 className='mt-3 fs-5'>Total downloaded resume from our site is 10</h6>
      <div className='row my-3'>
        {/* duplicate according to the download resume count */}
        <div className="col-lg-4 mb-3">
          <div style={{height:'450px'}} className='shadow p-3 rounded'>
            <div className="justify-content-between align-items-center">
              <h6>Review at: time stamp</h6>
            </div>
            <div className='mt-3 text-center'>
              <Link to={'/resumes/id'}><img className='w-100' height={'350px'} src="https://template.canva.com/EAG0So5lBF0/1/0/1131w-oA_ZsX4MvMk.jpg" alt="download cv"/></Link>
              {/* <Link to={'/resumes/id'}><img className='w-100' height={'350px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uvQbfZyautihLYpnlaOM06PUKNkQExnfyesJikNIzQ&s=10" alt="download cv"/></Link>
              <Link to={'/resumes/id'}><img className='w-100' height={'350px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgevh0gkCv2IWRtznf1qybIqsHAkLqil_RDBUlrCf9g&s=10" alt="download cv"/></Link> */}
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Resume
