import React from 'react'
import './SecoundHeader.css'
const SecoundHeader = () => {
    function showelement() {
        let aa=document.getElementById('aaa')
        aa.style.display='block';
        
    }
  return (
    <>
        <center style={{width:'70%'}}>


        <div align='center' class="navbar " style={{marginLeft:"12rem"}}>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src/features/secoundHeader/img/doctorateactive.svg"  alt="Doctorate"/><br />
            <span>Doctorate</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\AI+active.svg" alt="AI & ML"/><br />
            <span>AI & ML</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\MBA+active.svg" alt="MBA"/><br />
            <span>MBA</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\data+science+active.svg" alt="Data Science"/><br />
            <span>Data Science</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\Marketing+active.svg" alt="Marketing"/><br />
            <span>Marketing</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\management+active.svg" alt="Management"/><br />
            <span>Management</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\technology+active.svg" alt="Software & Tech"/><br />
            <span>Software & Tech</span>
        </div>
        <div class="navbar-item" onClick={showelement}>
            <img width={'40px'} src="src\features\secoundHeader\img\Law+Active.svg" alt="Law"/><br />
            <span>Law</span>
        </div>
        </div>

        <div className='bg-info' id='aaa' style={{width:"80%",height:"200px", display:'none'}}></div>

        </center>

   

    </>
  )
}

export default SecoundHeader