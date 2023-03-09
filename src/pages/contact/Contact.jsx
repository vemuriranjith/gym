import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io"
import "./contact.css"

    

const Contact = () => {
  return (

    <>
    <Header title="Get In Touch" image={HeaderImage}>
    You can reach us by phone, email, or by filling out the contact form on our website. If you prefer,
     you can also stop by our gym during our staffed hours to speak with us in person. 

    </Header>
    <section className="contact">
      <div className='container contact__container'>
        <div className="contact__wrapper">
          <a href="mailto:ranjitchowdary0609@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/vemuriranjith" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+16473394982" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
        </div>

    </section>
    </>
  )
}

export default Contact
