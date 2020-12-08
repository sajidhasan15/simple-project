import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs(props) {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[number,setNumber] = useState('');
    const[date,setDate] = useState('');
    const[comment,setComment] = useState('');

    return (
        <div classNameName={ContactUs}>
            <h1>Contact Us</h1>
            <hr/>
            <br/>
            <br/>
            <p>Name :</p>
            <input type="text" value={name} placeholder="Your name.."  onChange={(e)=>{setName(e.target.value)}}/>
            <p>Email :</p>
            <input type="text" value={email} placeholder="Your email.."  onChange={(e)=>{setEmail(e.target.value)}}/>
            <p>Number :</p>
            <input type="number" id="quantity" name="quantity" min="1" max="11" value={number} placeholder="Your number.."  onChange={(e)=>{setNumber(e.target.value)}}/>
            <p>Date :</p>
            <input type="date" value={date}  onChange={(e)=>{setDate(e.target.value)}}/>
            <p>Comment :</p>
            <input type="text" value={comment} placeholder="Your comment.."  onChange={(e)=>{setComment(e.target.value)}}/>

            <button onClick={()=>{props.submit(name,email,number,date,comment)}} >Submit</button>
        </div>
    //     <div className={clases.container}>
    //     <form>
      
    //       <label>First Name</label>
    //       <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      
    //       <label>Last Name</label>
    //       <input type="text" id="lname" name="lastname" placeholder="Your last name.." ?>
      
      
    //       <label>Subject</label>
    //       <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px">
              
    //       </textarea>
      
      
    //     </form>
    //   </div>
        
    );
}

const mapDispathToProps = (dispatch) =>{
    return{
        submit:(name,email,number,date,comment)=>{
            dispatch({
                type: 'SUBMIT',payload: {name:name,email:email,number:number,date:date,comment:comment}
            })
        }
    }
}

export default ContactUs;