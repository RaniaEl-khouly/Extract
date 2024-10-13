import Container from 'react-bootstrap/Container';

import Carousel from 'react-bootstrap/Carousel';


var haircareData =[
    {
        id:1,
       title:"اتباع نظام غذائى صحى",
      description:"النظام الغذائى يجب احتوائه على العناصر الغذائية المهمة للشعر - مثل الاهتمام بالخضروات والفاكهة اللازمة لنمو الشعر -مع شرب الماء يكمية كبيرة يوميا"
    },
    {
        id:2,
        title:"الحرارة والصبغات",
       description:"احرصى على عدم نعريض الشعر للحرارة العالية جدا التى تسبب تلف وإضعاف الشعر -وأيضا احرصى على عدم تكرار صبغ الشعر فى فترات متقاربة دون العناية به"
    },
    {
        id: 3,
        title:"منتجات العناية بالشعر",
       description:"استخدمى منتجات تناسب طبيعة شعرك سواء كان عالى البروتين او منخفض البروتين او يحتاج لترطيب زائد"
    },
]

export default function AppHaircare(){
    return(
        <section id="haircare"  className=' haircare-block'>
          <Container fluid>
            <div className='title-holder'>
               <h2>Hair Care</h2>
               <div className='subtitle'> طرق العناية بالشعر</div>
             </div>
             <Carousel  controls={false}>
        
               {
                haircareData.map(haircare=>{
                   return(
                    <Carousel.Item key={haircare.id}>
                    <div className='arabic-content'>
                    <h3>{haircare.title}</h3>
                    <p>{haircare.description}</p>
                    </div>
                 </Carousel.Item>
                   )
                })
               }
            
            </Carousel>
    </Container>
          
           
            
         
        </section>
    )
}