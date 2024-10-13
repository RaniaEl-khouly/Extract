import Carousel from 'react-bootstrap/Carousel';
import heroImg1 from '../assets/images/heroImg1.png';
import heroImg2 from '../assets/images/heroimg2.png';
import heroImg3 from '../assets/images/heroImg3.jpg';

var heroData=[
    {
        id:1,
        image: heroImg1,
        title: 'Welcome To Extract',
        description:'منتجات طبيعية للشعر والبشرة',
        link:'https://www.facebook.com/ra.extract'
    
    },
    {
        id:2,
        image:heroImg2,
        title: 'Natural Deodrant',
        description:'مزيل عرق مفتح ويقلل نمو الشعر',
        link:'https://www.instagram.com/p/C9iIbfCtSaD/'
    
    },
    {
        id:3,
        image:heroImg3,
        title: 'Body Splash',
        description:'اسبلاش للجسم مرطب معطر',
        link:'https://www.facebook.com/photo.php?fbid=319335620939207&set=pb.100085883143090.-2207520000&type=3'
    
    },
]


export default function AppHero(){
    return(
        <section id='home' className='hero-block'>
<Carousel>
  {
        heroData.map(hero => {
            return(
              <Carousel.Item key={hero.id}>
        <img 
        className="d-block w-100"
        src={hero.image} 
        alt={"Slide "+ hero.id}
         />
        <Carousel.Caption>
          <h3>{hero.title}</h3>
          <p>{hero.description}</p>
          <a className='btn btn-primary' href={hero.link}>Show more</a>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })
    }
      
      
    </Carousel>
        </section>
    )
}