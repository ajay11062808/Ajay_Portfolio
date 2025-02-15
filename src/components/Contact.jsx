import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'
import { EmailCanvas } from './canvas'

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xbllqrnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      
      if (response.ok) {
        setLoading(false)
        alert("Message sent, We will get back to you shortly");
        setForm({ name: '', email: '', message: '' })
      } else {
        setLoading(false);
        alert('Something went wrong');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-gray-200 dark:bg-black-100 p-8 rounded-2xl bg-opacity-40'
      >
        <p className={`${styles.darksectionSubText} dark:${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.darksectionHeadText} dark:${styles.sectionHeadText}`}>Contact</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        > 
          <label className="flex flex-col">
            <span className="text-black dark:text-white font-medium mb-4 px-7">Name </span>
            <input type='text' name='name' placeholder='Your name goes here'
              value={form.name} 
              onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none'
              required
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-black dark:text-white font-medium mb-4 px-7">Email </span>
            <input type='email' name='email' placeholder='Your email goes here'
              value={form.email} 
              onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none'
              required
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-black dark:text-white font-medium mb-4 px-7">Message </span>
            <textarea name='message' placeholder='Your message here' rows='7'
              value={form.message} 
              onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none'
              required
            />
          </label>
          
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none text-white w-fit font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[34.375rem] h-[21.875rem]'
      >
        <EmailCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
