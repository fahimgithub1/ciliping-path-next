import LeftImage from '../../Components/services/leftImage';
import RightImage from '../../Components/services/rightImage';
import SmalOverview from '../../Components/services/smalOverview';
import WorkSemple from '../../Components/services/workSemple';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import Heros from '../../lib/heros';

const howWorks = {
    id : 1,
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
    paraTest : [
      {
        id:1,
        text: "Put In Place To Product Photographs. Such As Clothing Items. For Example A Blouse, T-Shirt, Undies, Underwear, Pen, Mobile, Wallet, Flat Items. Product Item (Ebook, Table Garments, Pen, Cellular, Pockets, Flat Items, Simple Ring. And A Flat Chain, Earring, Various Jewelry, And So, Etc). Apart From Product Images, Shadows Can Also Put In Place To Model Photography. Group Images, Natural Photos, Inner And Exterior Images.",
      },
      {
        id:2,
        text: "Put In Place To Product Photographs. Such As Clothing Items. For Example A Blouse, T-Shirt, Undies, Underwear, Pen, Mobile, Wallet, Flat Items. Product Item (Ebook, Table Garments, Pen, Cellular, Pockets, Flat Items, Simple Ring. And A Flat Chain, Earring, Various Jewelry, And So, Etc)."
      }
    ]
}

const workSemple = [
  {
    id : 1
  },
  {
    id : 2
  },
  {
    id : 3
  },
  {
    id : 4
  }
]

const howWorks3 = [
  {
    id : 1,
    title : "PHOTOSHOP SHADOW SERVICE",
    paraTest : [
      {
        id:1,
        text: "Put In Place To Product Photographs. Such As Clothing Items. For Example A Blouse, T-Shirt, Undies, Underwear, Pen, Mobile, Wallet, Flat Items. Product Item (Ebook, Table Garments, Pen, Cellular, Pockets, Flat Items, Simple Ring. And A Flat Chain, Earring, Various Jewelry, And So, Etc). Apart From Product Images, Shadows Can Also Put In Place To Model Photography. Group Images, Natural Photos, Inner And Exterior Images.",
      },
      {
        id:2,
        text: "Not A New Customer? Skip This Step If Your Needs Are Similar To Projects You’ve Submitted In The Past."
      }
    ]
  },
  {
    id : 2,
    title : "CREATE REFLECTION SHADOW",
    paraTest : [
      {
        id:2,
        text: "Put In Place To Product Photographs. Such As Clothing Items. For Example A Blouse, T-Shirt, Undies, Underwear, Pen, Mobile, Wallet, Flat Items. Product Item (Ebook, Table Garments, Pen, Cellular, Pockets, Flat Items, Simple Ring. And A Flat Chain, Earring, Various Jewelry, And So, Etc). Apart From Product Images, Shadows Can Also Put In Place To Model Photography. Group Images, Natural Photos, Inner And Exterior Images."
      }
    ]
  },
  {
    id : 3,
    title : "CREATE DROP SHADOW",
    paraTest : [
      {
        id:1,
        text: "Head Over To The Quote Request Form And Tell Us What You Need. Every Project Gets Customized Timing And Pricing, So We’ll Review The Details To Come Up With Yours.",
      },
      {
        id:2,
        text: "Put In Place To Product Photographs. Such As Clothing Items. For Example A Blouse, T-Shirt, Undies, Underwear, Pen, Mobile, Wallet, Flat Items. Product Item (Ebook, Table Garments, Pen, Cellular, Pockets, Flat Items, Simple Ring. And A Flat Chain, Earring, Various Jewelry, And So, Etc). Apart From Product Images, Shadows Can Also Put In Place To Model Photography. Group Images, Natural Photos, Inner And Exterior Images."
      }
    ]
  },
  {
    id : 4,
    title : "RETAIN ORIGINAL SHADOW SERVICE",
    paraTest : [
      {
        id:1,
        text: "Head Over To The Quote Request Form And Tell Us What You Need. Every Project Gets Customized Timing And Pricing, So We’ll Review The Details To Come Up With Yours.",
      },
      {
        id:2,
        text: "Not A New Customer? Skip This Step If Your Needs Are Similar To Projects You’ve Submitted In The Past."
      }
    ]
  }
]

export default function Services() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
        <Heros title="Photoshop Shadow Service" 
               btntext="Free Trail" 
               path="/freaTrail" 
        />

        <LeftImage title={howWorks.title} 
                   paraTest={howWorks.paraTest}
        />

        <WorkSemple workSemple = {workSemple} />
        
        <SmalOverview />

        {howWorks3.map((itme,index)=>{
          if(index % 2 === 0){
              return(
                <LeftImage 
                            key={itme.id}
                            title={itme.title} 
                            paraTest={itme.paraTest}
                />)
          }else{
            return(
              <RightImage 
                      key={itme.id}
                      step={itme.step} 
                      title={itme.title} 
                      paraTest={itme.paraTest}
              />
            )
          }
        })}

        <Footer />
      </main>
    </>
  )
}