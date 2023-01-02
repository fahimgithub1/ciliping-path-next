import LeftSide from '../../Components/blogeSingle/leftSide';
import RightSide from '../../Components/blogeSingle/rightSide';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';

export default function BlogeSingle(){
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
        
        <div className='container '>
          <div className='mt-2 mt-md-4 mt-lg-5 row'>
            <div className='col-lg-9 col-md-8 col-sm-6'>
              <LeftSide /> {/* main */}
              <LeftSide />
              <LeftSide />
              <LeftSide />
              <LeftSide />
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 AboutUsRight'>
              <RightSide />
              <RightSide />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
