import React, { useState, useEffect } from 'react'
import useContactForm from './hooks/useContactForm'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { error, isLoading, message, submitContact } = useContactForm()

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.values })
  }
  const handleFormSubmit = (e) => {
    e.prevenDefault()
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          values={form.name}
          onChange={handleOnChange}
          placeholder="Enter your Email "
        />
        <input
          name="email"
          values={form.email}
          onChange={handleOnChange}
          placeholder="Enter your name "
        />
        <textarea
          name="message"
          values={form.message}
          onChange={handleOnChange}
          placeholder="Enter your message "
        />
        <button type='submit' disabled={isLoading}>{isLoading?"Loading...":"Send"}</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default ContactForm
