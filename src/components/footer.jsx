import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function AppFooter(){
    const [showTopBtn, setShowTopBtn]= useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >400){
                setShowTopBtn(true);
            } else{
                setShowTopBtn(false);
            }
        })
    })

    function goTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <Container fluid>
          <div className='copyright'>&copy; 2024 Extract. All Right Reserved.</div>
          <div className='socials'>
            <ul>
            <li><a href="https://www.facebook.com/ra.extract"><FaFacebook /></a></li> 
            <li><a href="https://www.instagram.com/extract_nature/" ><AiFillInstagram /></a></li> 
            </ul>
          </div>
          {
            showTopBtn && (<div className='go-top' onClick={goTop}></div>)
          }
        </Container>
    )
}