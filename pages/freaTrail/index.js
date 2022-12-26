import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import Footer from '../../layout/footer'
import FristSection from '../../Components/freeTrail/fristSection';
import OutPutFileOption from '../../Components/freeTrail/outPutFileOption';
import UplodeFile from '../../Components/freeTrail/uplodeFile';
import FreeTrailFrom from '../../Components/freeTrail/FreeTrailFrom';

export default function FreaTrail() {
  return (
    <>
      <HeaderMataTage />

      <main>
        <Navber /> 
          <div className='FreeTrailMain'>
            <FristSection/>
            <OutPutFileOption />
            <UplodeFile />
            <FreeTrailFrom />
          </div>

        <Footer />
      </main>
    </>
  )
}
