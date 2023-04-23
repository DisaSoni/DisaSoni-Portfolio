import React from 'react'

const ContactForm = () => {
  return (
    <div id='contact'>
         <p className="topic"></p>
                    <h2 className="my-3">Connect with me</h2>
    
    <div className="card">

<form>
    <div class="form-group">
        <div className="row">
            <div className="col-12">

        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">

        <label for="exampleFormControlInput1">Subject</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject" />
        
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">

        <label for="exampleFormControlInput1">Message</label>
        <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
        
            </div>
        </div>
    </div>
    <button className='btn btn-primary mt-3'>Contact</button>
    </form>
    </div>
    </div>
  )
}

export default ContactForm