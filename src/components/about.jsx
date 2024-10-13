import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import aboutImg from '../assets/images/aboutImg.jpg';


export default function AppAbout(){
    
    return(
        <section id="about" className='block about-block'> 
          
          <Container fluid >
          <div className='title-holder'>
            <h2>About Us</h2>
            <div className='subtitle'>Why Extract?</div>
          </div>
            <Row >
             <Col sm={6}>
            <Image src={aboutImg} thumbnail/>
            </Col>
            <Col  sm={6}>
            <ul className='arabic-list'>
                <p>
                ليه تتعامل مع اكستراكت   ايه ميزة منتجاتها عن باقى المنتجات   :-
                </p>

                <li>اولا: منتجاتنا طبيعية أصلية خامات مستوردة أساس تصنيعها زبدة الشيا الأصلية الأفريقية وفيتامينات مضادة للأكسدة ..خالية من الكيماويات وأضرارها.</li>
                <li>ثانيا: أسعارنا مناسبة جدا بالنسبة لجودة المنتج وهتجربى بنفسك</li>
                <li>ثالثا: توافر عينات للتجربة حتى تكتسبى الثقة فى المنتج</li>
                <li>ابعا:توافر منافذ لنا يمكنك الشراء من خلالها..لو مش بتحبى الاون لاين</li>
                <li>خامسا: اسرع وأأمن وأشيك توصيل ف المنصورة عند طلبك للمنتج 🤩</li>
                <li>سادسا: تواجدنا فى نوادى المنصورة بصفة دورية مما يتيح لكى تجربة المنتج قبل الشراء والتعامل المباشر معنا ومع المنتج.</li>
                <li>سابعا: توافر خدمة مابعد البيع من الاستفسار والاستفادة عن أى منتج ومايخص البشرة والشعر.</li>

                 <p className='text-center ' style={{color:"#fc2ec1"}}> #أأمن_منتج_لبشرتك_وشعرك
              </p> 
            </ul>

            <div className='progress-block'>
                <div className='d-flex justify-content-between align-items-center'>
                    {}
                    <p className='text-start'>Hair Products</p>
                    {}
                    <p className='mx-auto text-center'>Skin Care</p>
                    </div> 
               
                <ProgressBar>
                   <ProgressBar striped style={{backgroundColor:"#1a237e"}} now={50} key={1} />
      
                   <ProgressBar striped style={{backgroundColor:"#fc2ec1"}} now={50} key={2} />
                </ProgressBar>
                
                
            </div>
            </Col>
            </Row>
          </Container>
        </section>
    )
}