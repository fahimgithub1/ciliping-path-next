import LeftImage from '../../Components/howItwork/leftImage';
import RightImage from '../../Components/howItwork/rightImage';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import Heros from '../../lib/heros';

const howWorks = [
  {
    id : 1,
    step: "Step1",
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
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
  },
  {
    id : 2,
    step: "Step2",
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
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
  },
  {
    id : 3,
    step: "Step3",
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
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
  },
  {
    id : 4,
    step: "Step4",
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
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
  },
  {
    id : 5,
    step: "Step1",
    title : "KICK THINGS OFF BY REQUESTING A QUOTE.",
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
  },
]

export default function OurWork() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
        <Heros title="How It work" btntext="About us" path="about" />
        
        {howWorks.map((itme,index)=>{
          if(index % 2 === 0){
              return(
                <LeftImage 
                            key={itme.id}
                            step={itme.step} 
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
