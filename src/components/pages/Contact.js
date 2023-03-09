import React from "react";

//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 4000);
}

const Contact = () => {
  return (
 
     
    
    
     <div className="formContainer">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
          className=""
        >
          <p className="">
            Contact
          </p>
           <p className="py-6">Submit the form below to get in touch with me</p>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className=""
          />
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className=""
          />
          <br></br>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            required
            className=""
          ></textarea>
          <br></br>

          <button type="submit" className=" ">
            Send Message
          </button>
        </form>
      </div>

      

            
      );
};

      export default Contact;