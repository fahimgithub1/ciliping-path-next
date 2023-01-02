import PriceSections from '../../Components/priceing/priceSections';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';

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
