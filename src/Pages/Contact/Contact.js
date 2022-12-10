import React from 'react';

const Contact = () => {
    return (
        <div class="text-center">
        <h1 className='text-3xl font-bold my-4'>Send Your Message</h1>
        <form target="_blank" action="https://formsubmit.co/sakirhossainfaruque104@gmail.com" method="POST" >
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
              <div>
                <input type="text" name="name" className="input input-bordered w-full" placeholder="Full Name" required/>
              </div>
              <div>
                <input type="email" name="email" className="input input-bordered w-full" placeholder="Email Address" required/>
              </div>
            </div>
          </div>
          <div class="form-group col-span-2 my-4">
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-lg bg-blue-700 w-full">Submit Form</button>
        </form>
      </div>
    );
};

export default Contact;