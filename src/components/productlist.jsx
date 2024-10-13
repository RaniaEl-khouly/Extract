import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

var productlistData=[
    {
        id:1 ,
        title:"Hair Products",
        products:['Balm Cream','Free-Protein Hair Cream','Hibiscus Hair Mask','Herbal Shampoo','Anti-Dandruff Shampoo'],
        link:'https://www.facebook.com/groups/httpsextract.wuiltweb.comfbclidiwar0sgidy7/permalink/2602272703281625'
    },
    {
        id: 2,
        title:"Extract Products",
        products:['Moisturizing Hand Cream','Leave-in Shea Hair Cream','Body Splash','Natural Deodrant','Facial Wash'],
        link:'https://www.facebook.com/groups/httpsextract.wuiltweb.comfbclidiwar0sgidy7/permalink/2432340096941554'
    },
    {
        id: 3,
        title:"Skin Products",
        products:['Facial Cream with Niacinamide','Fragrance Body Lotion','Shower Gel','Zinc Cream','Shea Butter Vaseline'],
        link:'https://www.facebook.com/groups/httpsextract.wuiltweb.comfbclidiwar0sgidy7/permalink/2581104968731732'
    },
    
]


export default function AppProductlist(){
    return(
        <section id="productlist" className="block  productlist-block">
            <Container fluid>
               <div className='title-holder'>
                  <h2>Product List</h2>
                  <div className='subtitle'>اختارى حسب احتياجاتك</div>
               </div>
                <Row>
                    {
                        productlistData.map(productlist =>{
                            return(
                                <Col sm={4} key={productlist.id}>
                                  <div className='heading'>
                                    <h3 >{productlist.title}</h3>
                                  </div>
                                 <div className='content'>
                                    <ListGroup>
                                        {
                                            productlist.products.map((products,index) =>{
                                                return(
                                                    <ListGroup.Item key={index}>{products}</ListGroup.Item>
                                                )
                                            })
                                        }
                                        </ListGroup>
                                </div>
                                <div className='btn-holder'>
                                    <a href={productlist.link} className='btn btn-primary'>Buy Now</a>
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