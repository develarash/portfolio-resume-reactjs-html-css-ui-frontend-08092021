import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/sun.png"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact=()=>{
    const [done,setDone]=useState(false)
    const formRef= useRef()
    const handelsubmit=(e)=>{ 
        e.preventDefault();
        emailjs.sendForm('service_tftq72s', 'template_eyvhzzn', formRef.current, 'user_dK6Pddf0AbTdk4ZV79C1n')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

 return <div className="c">
<div className="c-bg"></div>
<div className="c-wrapper">
<div className="c-left">
    <h1 className="c-title">
        lets discuss your project
    </h1>
    <div className="c-ifno">
        <div className="c-info-item">
            <img className="c-icon" src={Phone} alt="" />+98 9378804946
        </div>
        <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />+98 9378804946
        </div>
        <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />develarash@gmial.com
        </div>
    </div>
</div>
<div className="c-right">
    <p className="c-desc">
        <b>What's your story ?</b>
        Get in touch . Always freelancing if the right project comes along.
    </p>
    <form ref={formRef} onSubmit={handelsubmit}>
        <input type="text" name="user_name" placeholder="Name" />
        <input type="text" name="user_subject" placeholder="Subject" />
        <input type="text" name="user_email" placeholder="Email" />
        <textarea placeholder="message" name="message" rows="5"></textarea>
        <button>Submit</button>
        {  done && "thank you"}
    </form>
</div>

</div>
 </div>   
}

export default Contact