'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import noise from 'src/Images/noise.svg'
import { useToast } from '../../contexts/ToastContext'
import NewToast from '../../contexts/NewToast'
import { addContactFormData } from '../../firebase/firestore'

export default function ContactComponent() {
  const [formData, setFormData] = useState({})
  const { toast, showToast, hideToast } = useToast()

  const [validated, setValidated] = useState({
    firstName: false,
    company: false,
    email: false,
    subject: false,
    message: false,
    consent: false,
  })

  const validateForm = () => {
    const newValidations = {
      firstName: !formData.firstName,
      company: !formData.company,
      email: !formData.email,
      subject: !formData.subject,
      message: !formData.message,
      consent: !formData.consent,
    }

    setValidated(newValidations)

    // Check if any validation failed
    return !Object.values(newValidations).includes(true)
  }

  const handleSubmitContact = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast('Please fill all the required fields!.', 'red')
      setTimeout(() => {
        setValidated({
          firstName: false,
          company: false,
          email: false,
          subject: false,
          message: false,
          consent: false,
        })
        
      }, 3200);
     
     
      
      return
    }

    const { profileImage, ...dataWithoutFile } = formData

    try {
      const docId = await addContactFormData(dataWithoutFile)
      setFormData({
        firstName: '',
        company: '',
        email: '',
        subject: '',
        message: '',
        consent: '',
      })

      showToast('Message Sent Successfully!', 'green')
    } catch (error) {
      console.error(error)
      showToast('An error occurred. Please try again.', 'red')
    }
  }

  return (
    <div className="w-full md:h-[950px] relative bg-white">
     
      <div className="hidden sm:block opacity-20 w-full md:h-auto absolute top-[133px] -z-10">
        <div className="md:w-[352.74px] md:h-[547.03px] z-0 absolute md:left-[545.20px] md:top-[82.97px] w-full origin-top-left rotate-[76.11deg] bg-sky-500 rounded-full blur-[200px]"></div>
      </div>

      <Image
        className="hidden sm:block w-full md:h-auto absolute top-0 opacity-20 mix-blend-soft-light -z-10"
        src={noise}
        alt="Background Noise"
      />

      <div className="w-full  md:w-[606px]  justify-center px-5 m-auto sm:py-20 py-4 sm:px-0 flex flex-col items-center gap-12 z-20">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="text-center text-gray-900 text-2xl sm:text-4xl font-semibold  leading-10">
            Contact Aethereflow
          </div>
          <div className="text-center px-10  text-slate-600 text-base sm:text-lg font-normal  leading-normal">
            Complete the contact form below to get in touch with our team and
            discover how we can assist you.
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[576px]  flex flex-col justify-center items-center sm:items-center mx-auto gap-6 px-4 sm:px-20 z-20">
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="fullName"
            className="text-gray-900 text-sm font-medium  leading-tight"
          >
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className={`block w-full rounded-md border-1 px-[17px] py-[13px] text-slate-600 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              validated.firstName === true
                ? 'border-red-500 border-2'
                : 'border-slate-600'
            }`}
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value })
              setValidated((prev) => ({ ...prev, firstName: false }))
            }}
          />
        </div>

        {/* Company Field */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="company"
            className="text-gray-900 text-sm font-medium  leading-tight"
          >
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your company"
            className={`block w-full rounded-md border-1 px-[17px] py-[13px] text-slate-600 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              validated.company ? 'border-red-500 border-2' : 'border-slate-600'
            }`}
            value={formData.company}
            onChange={(e) => {
              setFormData({ ...formData, company: e.target.value })
              setValidated({ company: false })
            }}
          />
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-gray-900 text-sm font-medium  leading-tight"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            placeholder="you@example.com"
            className={`block w-full rounded-md border-1 px-[17px] py-[13px] text-slate-600 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              validated.email ? 'border-red-500 border-2' : 'border-slate-600'
            }`}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              setValidated({ email: false })
            }}
          />
        </div>

        {/* Subject Field */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="subject"
            className="text-gray-900 text-sm font-medium  leading-tight"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value })
              setValidated({ subject: false })
            }}
            placeholder="Subject of your message"
            className={`block w-full rounded-md border-1 px-[17px] py-[13px] text-slate-600 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              validated.subject ? 'border-red-500 border-2' : 'border-slate-600'
            }`}
          >
            <option>Select Your Subject</option>
            <option value={'Auditing Your AI System'}>
              Auditing Your AI System
            </option>
            <option value={'Bias Mitigation'}>Bias Mitigation</option>
            <option value={'Data Protection'}>Data Protection</option>
            <option value={'Certifications'}>Certifications</option>
            <option value={'Others'}>Others</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-gray-900 text-sm font-medium  leading-tight"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              setValidated({ message: false })
            }}
            placeholder="Your message"
            className={`block w-full rounded-md border-1 px-[17px] py-[13px] text-slate-600 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
              validated.message ? 'border-red-500 border-2' : 'border-slate-600'
            }`}
          ></textarea>
        </div>

        {/* Consent Checkbox */}
        <div className="w-full flex items-center gap-3">
          <input
            type="checkbox"
            id="consent" // added id to associate the label with the checkbox
            className={`w-5 h-5 ${
              validated.consent ? 'border-red-500 border-2' : 'border-gray-300'
            }`}
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked })
              setValidated({ ...validated, consent: false })
            }}
          />
          <label
            htmlFor="consent" // this should match the input id
            className={`text-sm font-medium ${
              validated.consent ? 'text-red-500' : 'text-slate-600'
            }`}
          >
            I agree to the{' '}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/cookie-policy" className="text-blue-600 underline">
              Cookie Policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmitContact}
          className="w-[80%] sm:w-[420px]  h-[50px] px-[25px] py-[13px] bg-slate-950 rounded-[200px] shadow border border-blue-600 justify-center items-center inline-flex"
        >
          <span className="text-white text-base font-medium font-['Inter'] leading-normal">
            {' '}
            Let’s talk
          </span>
        </button>
      </div>
      <div className="text-center items-center mx-auto flex  justify-end sm:justify-center">
      {toast && (
        <NewToast
          message={toast.message}
          onClose={hideToast}
          color={toast.color}
        />
      )}
      </div>
       
    </div>
  )
}
