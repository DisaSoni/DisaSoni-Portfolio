import React from 'react'

const Experience = () => {
  return (
    <section id="experience">
    <p className="topic"></p>
    <h2 className="my-3">Experience</h2>
    <div className="row ">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Company</h5>
                    <span>Date - Date</span><br/>
                    <em>Position</em>
                    <p className="card-text">With supporting text below as a natural lead-in to additional
                        content.</p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 offset-md-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Company</h5>
                    <span>Date - Date</span><br/>
                    <em>Position</em>
                    <p className="card-text">With supporting text below as a natural lead-in to additional
                        content.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Experience