import TeamMember from '../../Components/team/teamMember';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import SectionWrapper from '../../layout/sectionWrapper';
import HeaderMataTage from '../../lib/headMataTag';

export default function Team() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />

        <div className='container mt-2 mt-md-2 mt-lg-2 text-center' >
          <SectionWrapper>
            <div className='TopMember row text-center'>
              <TeamMember />
            </div>

            <div className='row text-center'>
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
            </div>
          
          </SectionWrapper>
        </div>
        

        <Footer />
      </main>
    </>
  )
}
