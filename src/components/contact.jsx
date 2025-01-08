import {useState} from "react";
import emailjs from "emailjs-com";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{name, email, message}, setState] = useState(initialState);
  // const notify = () => toast("Wow so easy !");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({...prevState, [name]: value}));
  };
  const clearState = () => setState({...initialState});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // const emailPromise =
    //   emailjs.sendForm("service_qdi32t4", "template_7b4fhci", e.target, "owGsC7zMaz4520u5r")
    const emailPromise = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(emailPromise,
      {
        pending: 'Sending email...',
        success: 'Email received!',
        error: 'Something went wrong'
      }
    )

    // .then(
    //   (result) => {
    //
    //     console.log(result.text);
    //     clearState();
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>



          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.location: "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
      />

    </div>
  );
};
