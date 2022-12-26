import TextOverview from '../../Components/about/textOverview';
import Footer from '../../layout/footer';
import HeaderMataTage from '../../lib/headMataTag';
import Heros from '../../lib/heros';
import Navber from '../../layout/nav';
import WhoWeAre from '../../Components/about/whoWeAre';
import OurMission from '../../Components/about/ourMissin';
import OurVission from '../../Components/about/ourVission';
import CompanyFacts from '../../Components/about/companFacts';

export default function About() {
  return (
    <>
      <HeaderMataTage />

      <main>
        <Navber />
        <Heros title="About US" btntext="View Our Works" path="ourWork" />
        <TextOverview hedderText="How we can take your business to The " 
                      spanText="next label"
                      paraText="Here at Clipping Path Studio, we help professional photographers, studio managers, and ecommerce managers (among other clients who deal with intensive image-editing tasks) by providing high-quality, affordable, and hand-drawn clipping path services."
        />
        <WhoWeAre />
        <OurVission />
        <OurMission />
        <CompanyFacts />

        <Footer />
      </main>
    </>
  )
}
