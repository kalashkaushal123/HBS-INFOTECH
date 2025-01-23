import React, { useState } from 'react'
import Header from '../comman/Header';

const Discusswithus = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to send the form data to your backend
    console.log('Form submitted with data:', { name, email, phone, message });
  };

  return (
    <>
    
    <div className="container-fuild  text-white" style={{height:"20rem",background:'url(bg.png)'}}>

    <div className="col-md-12">
        <center><label htmlFor="" className='display-1 fw-bolder mt-4'>Contact Us</label></center>
            <br />
        <center><label htmlFor="" className='fs-5'>

                <a className='text-white text-decoration-none'  href="/" >Home</a> 
                <label htmlFor="" className='text-primary'> ≫&nbsp;</label> 

                <a className='text-white text-decoration-none' href="Solutions">Solutions</a> 
                <label htmlFor="" className='text-primary'> ≫&nbsp;</label> 

                <a  className='text-white text-decoration-none' href="about">Contact Us</a>
        </label></center>


    </div>
            
    </div>

 
   <div className="container-fluid">
   <div className="row">
    

            <div className="col-md-1"></div>
    
            <div className="col-md-5 m-0   mt-5 ">
                <label htmlFor="" className='fs-1 ps-3'> Contact us</label>
                <br />
                <p className='ps-3 fs-5'>Have a question or comment? Let us know by filling out the
                form below and we'll be in touch shortly.
                </p>
                
                <div className='p-4 rounded-5 shadow' style={{background:' rgb(244, 248, 255)'}}>

                
                    
                    <form onSubmit={handleSubmit} className='rounded-5'>
                
                    <div className="mb-5">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control"  placeholder="Name"
                            value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>                  

                    <div className="mb-5">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control"  placeholder="Email id"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    


                    <div className="mb-5">
                        <label  className="form-label">Phone no *</label>
                        <input type="number" className="form-control"  placeholder="Enter a Mobile no"
                            value={phone} onChange={(e) => setPhone(e.target.value)} required
                        />
                    </div>



                    <div className="mb-5">
                        <label  className="form-label text-black">Message *</label>
                        <textarea type="textarea" className="form-control"  placeholder="Write a Message if any" rows={6}
                            value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>

            </div>

            
                
            <div className="col-md-5 m-0 ps-5  pe-5 mt-5  ">

                <div className='fs-1'>Our contact info</div>

                <div class="d-flex  border-black pt-4">
                    <img style={{width:'30px',height:"30px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBnZPbEcIgEEV3YgPpwC3BErCTlKAVhA60g5RgCdhBSqCEjH/+6ZKBEfGCkDtzflgOy/Ag+k4vjIIRFuElzMIkMBVyEKwXcow5cfkjBi6pbKlODKggDqB487txZ3ACdRNkkxQs/UaDBfad7xDnDmQ0duz81uIwmIjG1qDDGhMRzVGuqAmfqBPmQm1NT23X5JjirZtGmWNZbe3a2p2RrLZ2re3OJZkLoqaKXAnfK9fI7t7Tvz1QQzSB11Sbnj7vechN2mXGn8LDL3LOyW/Ckqf+xEpzRwAAAABJRU5ErkJggg==" alt="Location" />
                    <p class="sc-ecQkdc dambaF "> &ensp; SCF No. 34, 1st Floor, Sector 16-A, Part-1, Faridabad, Haryana - 121002</p>
                </div>

            

                <div class="d-flex border-top  border-black pt-4">
                    <img style={{width:'35px',height:"30px"}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBtZTNDYJAEIVf9KI3SpgSKIESLIEOpAPoRFuwAuyAEigBj3rC2chmCewfzPolX2Ikebt5DAMYcrZlR7ZCIi7sMIWO0+8MQojtZ6HaBkJullDxrQ/4dWtDhYq6Hj322Im68cvz/AEBesSWthBSwV6BeNxUwICEE6E4sm/2zBaz/0/sh31CiOvWhAT8rWuFbUI6T3iGyIMJ9r3RY13LFaayGhHkWPet1QG14/AyFF7C/ZkP8K8BVWe29+YhCwQg2DsPLS5CJM2G4M2rlth7ILSBAJoO6GBeZotFr18Odpfql/GbGwAAAABJRU5ErkJggg==" alt="Phone"  />
                    <p class="sc-ecQkdc dambaF ">+91-129-488 2321</p>
                </div>
                
                
                
                <div class="d-flex border-top border-bottom  border-black pt-4">
                <img style={{width:'35px',height:"30px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAVCAYAAABR915hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgBvZRtFYMgFIbvGhjBCDaYEdZAG8wG2mBrIA2MsAhE8CyBERwcXyYHRfADOOf5IR/3wXsBoqk1gjESHE6qI8o7QSIoCB0x5AyOAt//gZDyRsvuaIolLSZUgaULsV6HMqB0VSzhkGeC4aC0grS1jFsX9oIU8n6ntMTG2405mwGUPPWUy+zkkHLHXGcwX/mA7KQeUi+x5DOVyypXm5Ot84zpnMBprnW2kkY9Iw/I2VmxebolBYKXNJ3cxMhEjfH3UTGj+V01x14017Om5ZVT8mavmGHhk/zqtYZLvuhosKA+IfWRB5MqWsQsbeIQUoV6/+WpH3Sx6129AvOGeL2rV9ET7vwNf8oEd4rTvoL8B93k/qP51toRAAAAAElFTkSuQmCC" alt="Email" />
                    <p class="sc-ecQkdc dambaF ">&ensp; info@rarrtech.com</p>
                </div>

                
                <div className='fs-1'>Location</div>
                <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4215898742223!2d77.2051956783493!3d28.617124112947987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36e9e91bcff%3A0x3bf95bd66ac9204c!2sSansad%20Bhawan%20Delhi!5e0!3m2!1sen!2sin!4v1737112171942!5m2!1sen!2sin"
                    width="100%" height="50%" 
                    style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                
                
                
            




            
            
            
            
            </div>
            
            
            <div className="col-md-1"></div>
</div>
   </div>
    
<br /><br /><br /><br /><br /><br /><br /><br />

    </>
  )
}

export default Discusswithus