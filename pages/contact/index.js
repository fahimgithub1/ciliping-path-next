import ConactFrom from '../../Components/contact/conactFrom';
import LocatinAndContact from '../../Components/contact/locatinAndContact';
import Map from '../../Components/contact/map';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import SectionWrapper from '../../layout/sectionWrapper';
import HeaderMataTage from '../../lib/headMataTag';
import Heros from '../../lib/heros';

export default function Contact() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
        <Heros title="contact" btntext="Let's Massage" />
        <LocatinAndContact />

        <SectionWrapper>
          <div className='row container MapAndInfo'>
            <ConactFrom />
            <Map />
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  )
}
