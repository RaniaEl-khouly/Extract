import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/blog2.png';
import blog3 from '../assets/images/blog3.png';


import { IoIosArrowForward } from "react-icons/io";

var blogData=[
    {
     id:1 ,
     image: blog1,
     time: ' Feb 02 2023',
     title:"ازاى تعرفى ان بشرتك دهنية",
     description:'زيوت البشره زياده - مسام واسعه - فيها لمعه خاصة في منطقة الجبين والانف - معرضه للحبوب بشكل كبير. والحل عندنا ماتقلقيش', 
     link:"https://www.instagram.com/p/C3c6TqYtj48/"
    },
    {
        id:2 ,
        image: blog2,
        time: ' Jan 04 2023',
        title:"سر جمال الفراعنة",
        description:'سر جمال ملكات الفراعنة؟ سؤال حير الجميع. الجمال عند المصريين القدماء كانت محل اهتمام العالم أجمع. بعد مرور السنين تظهر المومياوات بصورة تجعلك تتعجب من جمالها',

        link:"https://www.facebook.com/photo/?fbid=140349228837848&set=g.2380858792089685"
    },
    {
        id:3 ,
        image: blog3,
        time: '  April 03 2024  ',
        title:"ازاى تهتمى ببشرتك فى الصيف",
        description:" روتينك اليومى لبشرة صحية- اهتمى بجسمك داخليا وخارجيا- واستخدمى المنتجات المناسبة لطبيعة بشرتك",
        link:"https://www.facebook.com/reel/1026690138338481"
    },
]


export default function AppBlog(){
    return(
        <section id="blog" className="block blog-block">
           <Container fluid>
                <div className='title-holder'>
                    <h2>Blogs</h2>
                    <div className='subtitle'>تعرف على أحدث النصائح عن البشرة والشعر</div>
                </div>
                <Row>
                    {
                        blogData.map(blog =>{
                            return(
                             <Col sm={4} key={blog.id}>
                                <div className='holder card h-100'>
                                  <Card >
                                    <Card.Img variant="top"  src={blog.image} />
                                    <Card.Body className='d-flex flex-column meta'>
                                        <time >{blog.time}</time>
                                       
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                        {blog.description}
                                        </Card.Text>
                                        <a href={blog.link} className='btn btn-primary mt-auto text-center '> <IoIosArrowForward /> Read More</a>
                                        
                                        
                                    </Card.Body>
                                  </Card>
                                </div>
                             </Col>
                            )
                        })
                    }
                    
                </Row>
           </Container>
        </section>
    )
}


                                    