import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productsImg1 from '../assets/images/productsImg1.png';
import productsImg2 from '../assets/images/productsImg2.jpg';
import productsImg3 from '../assets/images/productsImg3.png';
import productsImg4 from '../assets/images/productsImg4.jpg';
import productsImg5 from '../assets/images/productsImg5.jpg';
import productsImg6 from '../assets/images/productsImg6.jpg';
import productsImg7 from '../assets/images/productsImg7.jpg';
import productsImg8 from '../assets/images/productsImg8.png';
import productsImg9 from '../assets/images/productsImg9.png';
import Pagination from 'react-bootstrap/Pagination';


const productsData=[
    {
      id:1,
      link:'https://www.facebook.com/photo/?fbid=298205723052197&set=g.2380858792089685',
      image:productsImg1,
      title: "Leave-in Shea Hair Cream",
      subtitle: "كريم تصفيف للشعر بزبدة الشيا"
    },
    {
        id:2,
        link:'https://www.instagram.com/p/C3vIwnBtQYq/',
        image:productsImg2,
        title: "Balm Cream",
        subtitle: "كريم ترميم للشعر"
    },
    {
        id:3,
      link:'https://www.instagram.com/p/C7MzVP2I4uv/',
      image:productsImg3,
      title: "Hand Cream",
      subtitle: "كريم أيدى معطر مرطب"
    },
    {
        id:4,
      link:'https://www.facebook.com/photo/?fbid=423654270507341&set=g.2380858792089685',
      image:productsImg4,
      title: "Face Cream for Oily Skin",
      subtitle: "كريم وجه للبشرة الدهنية"
    },
    {
        id:5,
      link:'https://www.facebook.com/photo/?fbid=423654323840669&set=g.2380858792089685',
      image:productsImg5,
      title: "Face Cream for Dry Skin",
      subtitle: "كريم وجه للبشرة الجافة"
    },
    {
        id:6,
      link:'https://www.instagram.com/p/C0cPKGeLKrd/',
      image:productsImg6,
      title: "Free Sulphate Shampoo",
      subtitle: "شامبو خالى من السلفات"
    },
    {
        id:7,
      link:'https://www.instagram.com/p/C9IKFo6NkzS/',
      image:productsImg7,
      title: "  Shower Gel",
      subtitle: "سائل استحمام مرطب بالعطور المختلفة"
    },
    {
        id:8,
      link:'https://www.instagram.com/p/C4TlgGzLB7Y/',
      image:productsImg8,
      title: "Moisturizer Body Lotion",
      subtitle: "لوشن للجسم معطر"
    },
    {
        id:9,
      link:'https://www.instagram.com/p/CyBnHQ2Lprg/',
      image:productsImg9,
      title: "Tint",
      subtitle: "مورد للخدود والشفاه طبيعى "
    },
   
]

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export default function AppProducts(){
    return(
<section id="products" className='block products-block'> 
          
          <Container fluid>
          <div className='title-holder'>
            <h2>Products</h2>
            <div className='subtitle'>اختر من بين أجود المنتجات</div>
          </div>
      <Row className='productlist'>
        {
            productsData.map(products =>{
                return(
                  <Col sm={4}  key={products.id}>
                    <div className='products-wrapper'>
                      <a href={products.link}>
                        <img src={products.image} />
                        <div className='label text-center'>
                           <h3>{products.title}</h3>
                           <p>{products.subtitle}</p>
                        </div>      
                      </a>
                    </div>
                 </Col>
                )
            })
        }
      </Row>
      <Pagination>{items}</Pagination>
    </Container>
          </section>
    )
}