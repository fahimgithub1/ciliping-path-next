import PriceSections from '../../Components/priceing/priceSections';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import SectionWrapper from '../../layout/sectionWrapper';
import HeaderMataTage from '../../lib/headMataTag';
import SectionTitle from '../../lib/sectionTaitle';

export default function Pricing() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
          <PriceSections />

        <Footer />
      </main>
    </>
  )
}
