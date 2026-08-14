import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      {/* landing */}
      <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundAttachment:'fixed'}} className="d-flex justify-content-center align-items-center">
        <div style={{backgroundColor:'rgba(0,0,0,0.4)'}} className="w-50 p-3 rounded text-center text-light">
          <h1>Designed to Get Hired. Your Skills, Tour Story, Your Next Job - All In One.</h1>
          <Link to={'/resume'} style={{backgroundColor:'#755846 '}} className='btn text-light mt-3'>Make your Resume with AI</Link>
        </div>
      </div>
      {/* about */}
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <p style={{textAlign:'justify'}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>
            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
            <p style={{textAlign:'justify'}}>The system can suggest job specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS friendly. It also helps users tailor their resumes to specific job roles by highlighting relevant skills and experience.</p>   
          </div>
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <img width={'100%'} height={'500px'} className='img-fluid' src="/resume.png" alt="resume"/>
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{height:'80vh',backgroundImage:'url("/team.png")',backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}></div>
      {/* testimony */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
          <h5>Trusted by professionals worldwide</h5>
            <p style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p style={{textAlign:'justify'}}>Join thousands of job-seekers who have fast-tracked their careers with a résumé that truly stands out </p>
          </div> 
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.jpg?s=1024x1024&w=is&k=20&c=7XHB-CdycBQv37oGCIdK0MvyVTKNV4cnIh1fyuSB7rY=" alt="user"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
