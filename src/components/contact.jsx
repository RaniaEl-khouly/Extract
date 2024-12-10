import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";


export default function AppContact(){
    return(
        <section id="contact" className="block contact-block">
             <Container fluid>
                <div className='title-holder'>
                        <h2>Contact Us</h2>
                        <div className='subtitle'>يمكنك ترك بياناتك للتواصل</div>
                    </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <label htmlFor="name">Name:</label>
                        <Form.Control type='text' id='name' name='name'autoComplete='given-name' placeholder="Enter your Full Name" required />
                        </Col>
                        <Col sm={4}>
                        <label htmlFor="email">Email:</label>
                        <Form.Control type='email' id='email' name='email' autoComplete='on' placeholder="Enter your Email Address" required />
                        </Col>
                        <Col sm={4}>
                        <label htmlFor="tel">Tel:</label>
                        <Form.Control type='tel' id='tel' name='tel' autoComplete='off' placeholder="Enter your Contact Number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <label htmlFor="msg">Msg:</label>
                        <Form.Control as="textarea" id='msg' name='msg' placeholder="Enter your Message" required/>
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
               <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218752.39254153168!2d31.616331651710144!3d31.053928798697676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7777bfe771703%3A0xd1aa28f76e87bc34!2z2KfZhNmF2YbYtdmI2LHYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1729062714405!5m2!1sar!2seg"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li><MdEmail className='icon' /> <br/>extract.wuiltweb.com</li>
                                                              
                        <li><BsFillTelephoneFill className='icon'/>
                        <br/>
                        01551617306</li>
                        <li><MdLocationOn className='icon'/>
                        <br/>
                        EGYPT , Mansoura.</li>
                    </ul>

                </div>
            </Container>
        </section>
    )
}