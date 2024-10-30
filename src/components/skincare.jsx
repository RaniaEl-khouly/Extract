import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineFace4 } from "react-icons/md";
import { CiDroplet } from "react-icons/ci";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { PiThermometerHotDuotone } from "react-icons/pi";
import { HiOutlineHandRaised } from "react-icons/hi2";

const skincareData =[
    {
        id:1,
        icon:< MdOutlineFace4/>,

        title:'Normal Skin',
        description:"This skin is neither too dry nor too oily. It has regular texture  soft appearance, and does not need special care.",

    },
    {
        id:2,
        icon:<CiDroplet/>,
        title:'Dry Skin',
        description:"It is usually temporary,caused by external factors such as the weather, low air humidity and immersion in hot water", 
    },
    {
        id:3,
        icon:<FaRegFaceSadCry/>,
        title:'Combination Skin',
        description:"Based on its location, it presents characteristics of both dry and oily skin since the distribution of sebaceous and sweat glands is not homogeneous. ",
    },
    {
        id:4,
        icon:<PiThermometerHotDuotone/>,
        title:'Oily Skin',
        description:"It is caused by excessive fat production,has a porous, humid and bright appearance.",
    },
    {
        id:5,
        icon:<HiOutlineHandRaised/>,
        title:'Sensetive Skin',
        description:" It is a fragile skin, usually accompanied by feelings of discomfort, such as heat, tightness, redness or itching.",
    },
]

export default function AppSkincare(){
    return(
        <section id="skincare" className='block skincare-block'> 
        <Container fluid>
        <div className='title-holder'>
            <h2>Skin Care</h2>
            <div className='subtitle'>تعرفى على نوع بشرتك</div>
          </div>
          
          <Row>
            {
                skincareData.map(skin =>{
                    return(
                        <Col sm={4} className="holder" key={skin.id}>
                            <div className='icon '>
                             <span className='skinicon'>{skin.icon} </span>
                             </div>
                            
                            <h3>{skin.title}</h3>
                            <p>{skin.description}</p>
                        
                        </Col>
                    )
                })
            }
            
          </Row>
        </Container>
        </section>
    )
}