import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function Saved() {
  return (
    <div className='my-5 container d-flex justify-content-center align-items-center flex-column'>
      <h1>All Saved Resumes</h1>
      <table className='my-5 table table-hover table-stripped'>
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={'/resumes/id'} >NAME</Link></td>
            <td>JOB</td>
            <td><button class="btn text-danger"><MdDelete /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
