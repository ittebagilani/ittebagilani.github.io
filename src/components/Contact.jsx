import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"




const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //tempid template_ujrm7v5
//servid  service_i221zh8
//pub z7q-ERnEDm896OmmY

    emailjs.send(
      'service_i221zh8', 
      'template_8805puv',  
      {
        from_name: form.name,
        to_name: "Itteba",
        from_email: form.email,
        to_email: 'itteba1@gmail.com',
        message: form.message,
      },
      'z7q-ERnEDm896OmmY'
      ).then(() => {
        setLoading(false);
        alert("Thank You! I'll get back to you as soon as possible");
        setForm({
          name: '',
          email: '',
          message: '',
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert("Something went wrong")
        })
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 m-auto overflow-hidden z-0">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#f0e3cb] p-8 rounded-2xl m-auto shadow-inner"
      >
        <h3 className={styles.sectionHeadText}>Get in touch.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 m-auto"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name please?"
              className="bg-[#fdf0d5] py-4 px-6 placeholder:text-[#370926] text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email please?"
              className="bg-[#fdf0d5] py-4 px-6 placeholder:text-[#370926] text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"></span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-[#fdf0d5] py-4 px-6 placeholder:text-[#370926] text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-[#370926] py-3 px-8 outline-none w-fit m-auto
             text-[#fdf0d5] font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact, "contact");