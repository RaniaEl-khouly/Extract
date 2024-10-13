import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VaselineRImg from "../assets/images/VaselineRImg.png";
import DeodRImg from "../assets/images/DeodRImg.png";
import HandRImg from "../assets/images/HandRImg.png";
import MakeupRImg from "../assets/images/MakeupRImg.png";
import LotionRImg from "../assets/images/LotionRImg.jpg";
import BalmRImg from "../assets/images/BalmRImg.jpg";
import SplashRImg from "../assets/images/SplashRImg.png";
import WashRImg from "../assets/images/WashRImg.jpg";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const reviewsData=[
    {
        id:1 ,
     image: VaselineRImg,
     fblink: "https://www.facebook.com/photo/?fbid=423654113840690&set=g.2380858792089685",
     instalink: "https://www.instagram.com/p/C25UDhgtvSA/",
     title: "Shea Butter Vaseline"
    },
    {
        id:2 ,
        image:HandRImg ,
        fblink: "https://www.facebook.com/photo/?fbid=336974262508676&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C7MzVP2I4uv/",
        title: "Fragrance Hand Cream"
    },
    {
        id:3 ,
        image: DeodRImg,
        fblink: "https://www.facebook.com/photo/?fbid=404381485767953&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C9foRZKtxmc/?img_index=1",
        title: "Natural Deodrant"
    },
    {
        id: 4,
        image: MakeupRImg,
        fblink: "https://www.facebook.com/photo/?fbid=354249870781115&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C2nLIYbN8ce/",
        title: "Makeup Remover"
    },
    {
        id: 5,
        image: LotionRImg,
        fblink: "https://www.facebook.com/photo/?fbid=423654210507347&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C9IKFo6NkzS/",
        title: "Moisturizing Body Lotion"
    },
    {
        id:6 ,
        image: BalmRImg,
        fblink: "https://www.facebook.com/photo/?fbid=341465848726184&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C3vIwnBtQYq/",
        title: "Balm Cream"    
    },
    {
        id: 7,
        image: SplashRImg,
        fblink: "https://www.facebook.com/photo/?fbid=364962663043169&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C6waXyaNHne/",
        title: "Body Splash"
    },
    {
        id:8 ,
        image: WashRImg,
        fblink: "https://www.facebook.com/photo/?fbid=423654323840669&set=g.2380858792089685",
        instalink: "https://www.instagram.com/p/C8m6pY1NfIO/",
        title: "Facial Wash"
    },
]


export default function AppReviews(){
    return(
        <section id="reviews"  className='block  reviews-block'>
            <Container fluid>
            <div className='title-holder'>
              <h2>Reviews</h2>
              <div className='subtitle'> آراء العملاء</div>
          </div>
      <Row >
        {
            reviewsData.map(review =>{
                return(
                    <Col sm={3}  key={review.id}>
                      <div className='imagediv'>
                        <img src={review.image} alt='Image'/>
                        <div className='overlay'>
                            <div className='socials'>
                                <ul>
                               <li><a href={review.fblink}><FaFacebook /></a></li> 
                               <li><a href={review.instalink} ><AiFillInstagram /></a></li> 
                                </ul>
                            </div>
                        </div>
                      </div>
                      <h3>{review.title}</h3>
                    </Col>
                )
            })
        }
      </Row>
    </Container>
        </section>
    )
}