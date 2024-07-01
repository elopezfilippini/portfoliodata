import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lm26g95', 'template_p6vtcqr', form.current, {
        publicKey: '-MyTkzLZw7TK9v6Z8',
      })
      .then(
        () => {
          window.alert('Mensaje enviado con éxito!');
          // Limpiar el formulario después de enviar el correo
          form.current.reset();
        },
        (error) => {
          window.alert('Error...', error.text);
        },
      );
  };

  return (

    <div>
      <h3 className='py-8 text-4xl font-bold'>Contact me</h3>
    

      <form className='flex flex-col items-center border-gray-500' ref={form} onSubmit={sendEmail}>
        <label className='w-1/2 '>Name:</label>
        <input className='w-42 border border-black outline-none rounded-xl mt-2' type="text" name="user_name" />
        <label className='w-1/4 mt-2'>Email:</label>
        <input className="w-42 border border-black outline-none rounded-xl mt-2 " type="email" name="from_name" />
        <label className="w-1/4 mt-2">Message:</label>
        <textarea className="sm:w-full md:w-1/4   h-40 border border-black outline-none rounded-xl mt-2"name="message" />
       
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-10 mb-4" type="submit">Send</button>

      </form>
    </div>
  );
};
