import React, { useState } from "react";
import contactusimg from './images/contactusimg.svg'
const Contact = () => {

    const [data, setdata] = useState({
        fullname: '',
        mobile: '',
        email: '',
        msg: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setdata((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const onsubmit = (e) => {
        e.preventDefault();
        alert(
            `Your name is ${data.fullname}
            Your mobile no is ${data.mobile}
            Your email is ${data.email}
            Your msg is ${data.msg}`
        )
    }

    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-6">
                    <form onSubmit={onsubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Enter Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary mb-3">submit</button>
                        </div>

                    </form>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <img src={contactusimg} alt="contactus img" className="img-fluid animated"/>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;