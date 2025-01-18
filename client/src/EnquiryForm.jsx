import '../src/App.css'
import { useState } from 'react'
import axios from 'axios'


const EnquiryForm = () => {

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    PhoneNumber: '',
    category: 'service request',
    message: '',
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target;
   setEnquiryForm((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(enquiryForm)
   axios.post(`${import.meta.env.VITE_API_BASE_URL}/enquiry`,EnquiryForm,{
    headers:{
     "Content-Type":'application/json',
    },
   }).catch((err)=> console.error(err, "unable to submit form"));
  }

  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center">
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-md" onSubmit={handleFormSubmit}>
        <h2 className="font-bold text-xl mb-4">Enquiry Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm mb-2 text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            min={2}
            max={60}
            className="p-2 border border-gray-400 rounded w-full"
            autoComplete='off'
            onChange={handleFormChange}
            value={enquiryForm.name}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2 text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-400 rounded w-full"
            autoComplete='off'
            onChange={handleFormChange}
            value={enquiryForm.email}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNumber" className="block text-sm mb-2 text-gray-700">Whatsapp Number</label>
          <input
            type="number"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Enter your Whatsapp Number"
            int={10}
            className="p-2 border border-gray-400 rounded w-full hide-arrows"
            autoComplete='off'
            onChange={handleFormChange}
            value={enquiryForm.PhoneNumber}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Category" className="block text-sm mb-2 text-gray-700">Choose your service</label>
          <select name="category" id="category" className="p-2 border border-gray-400 rounded w-full" 
            onChange={handleFormChange}
            value={enquiryForm.category}
          required>
            <option value="Service request">Service request</option>
            <option value="Contact">Contact</option>
            <option value="Complaint">Complaint</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="Message" className="block text-sm mb-2 text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            style={{
              resize: "none"
            }}
            minLength={3}
            maxLength={250}
            cols={50}
            className="p-2 border border-gray-400 rounded w-full"
            autoComplete='off'
            onChange={handleFormChange}
            value={enquiryForm.message}
            required
          />
        </div>
        <button type="submit" className="p-2 w-full bg-blue-800 rounded-md text-white hover:bg-blue-500 transition duration-200">Submit</button>
      </form>
    </div>
  )
}

export default EnquiryForm