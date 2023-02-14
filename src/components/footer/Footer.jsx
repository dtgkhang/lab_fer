import React, { Component } from 'react'
import './footer.css'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
export default class Footer extends Component {
  render() {
    return (
        <footer className='mt-5'>
        <a href="#" className='footer__logo'>DTGK</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="https://dtgk-one.vercel.app/#">About</a></li>
          <li><a href="https://dtgk-one.vercel.app/#">Experience</a></li>
          <li><a href="https://dtgk-one.vercel.app/#">Portfolio</a></li>
          <li><a href="https://dtgk-one.vercel.app/#">Contact</a></li>
        </ul>
  
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/khang-do-b38456204/" target="_blank"><BsLinkedin/></a>
          <a href="https://instagram.com/dtgkhang"><AiFillInstagram/></a>
          <a href="https://www.facebook.com/khang.do.5623/"><BsFacebook/></a>
        </div>
      </footer>
    )
  }
}
