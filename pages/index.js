import HeaderMataTage from '../lib/headMataTag';
import Navber from '../layout/nav';
import Footer from '../layout/footer';
import Carosul from '../Components/home/carosul';
import RightImage from '../Components/services/rightImage';
import LeftImage from '../Components/services/leftImage';
import WorkSample from '../Components/home/workSample';
import Pricing from '../Components/home/pricing';
import Counting from '../Components/home/counting';
import WhyUs from '../Components/home/whyUs';
import HowItWorkds from '../Components/home/howItWorkds';
import S3teps from '../Components/home/3steps';
import Blog from '../Components/home/Blog';
import OwlCarosul from '../Components/home/owlCarosul';

const leftImage = {
  title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
  paraTest : [
    {
      id:1,
      text: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Ab Facilis Cum Dolore Nam Eaque Quis Debitis Neque Explicabo Ad, Fugiat Iste Ipsam Iusto Numquam Sed Dicta Quae Tempore Saepe Velit?",
    }
  ]
}

export default function Home() {
  return (
    <>
      <HeaderMataTage />
      
      <main>
        <Navber />
        <Carosul />
        <RightImage title={leftImage.title} 
                    paraTest={leftImage.paraTest}
        />
        <LeftImage title={leftImage.title} 
                    paraTest={leftImage.paraTest}
        />
        <WorkSample />
        <Pricing />
        <Counting />
        <WhyUs />
        <HowItWorkds />
        <S3teps />
        <OwlCarosul />
        <Blog />

        <Footer />
      </main>
    </>
  )
}
