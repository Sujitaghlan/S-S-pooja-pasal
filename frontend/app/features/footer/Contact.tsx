import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form"

interface IFormInput {
  name: string,
  contact: string,
  email: string,
  question: string
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className='p-16 max-w-xl mx-auto'>
      <div>
        <p className='text-red-600'>Have questions?</p>
        <p className='font-bold text-2xl mb-6'>Get in touch</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>

          <div>
            <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
            <input
              id="name"
              {...register("name", { required: "Name is required." })}
              className="w-full border border-gray-400 p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact" className="block font-medium mb-1">Your Contact</label>
            <input
              id="contact"
              {...register("contact", { required: "Contact is required." })}
              className="w-full border border-gray-400 p-2 rounded"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              id="email"
              {...register("email", { required: "Email is required." })}
              className="w-full border border-gray-400 p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="question" className="block font-medium mb-1">Your Question</label>
            <textarea
              id="question"
              {...register("question", { required: "Question is required." })}
              className="w-full border border-gray-400 p-2 rounded"
            />
            {errors.question && (
              <p className="text-red-500 text-sm">{errors.question.message}</p>
            )}
          </div>

          <input
            type="submit"
            value="Submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
