import ImageMatching from '../../Components/home/imageMatching';
import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import SectionWrapper from '../../layout/sectionWrapper';
import HeaderMataTage from '../../lib/headMataTag';
import Heros from '../../lib/heros';
import SectionTitle from '../../lib/sectionTaitle';

const Photography = [
  {
    id : 1,
    // blogImg : require("/blog2.jpg"),
    blogTitle : "Introduction: Take Your Story Online",
    blogePara : "Lorem ipsum dolor sit amet consectetur adipis elit. Natus deleniti quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quidem"
  },
  {
    id : 2,
    // blogImg : require('/blog.jpg'),
    blogTitle : "Introduction: Take Your Story Online",
    blogePara : "Lorem ipsum dolor sit amet consectetur adipis elit. Natus deleniti quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quidem"
  },
  {
    id : 3,
    // blogImg : require('/blog2.jpg'),
    blogTitle : "Introduction: Take Your Story Online",
    blogePara : "Lorem ipsum dolor sit amet consectetur adipis elit. Natus deleniti quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quidem"
  },
  {
    id : 4,
    // blogImg : require('/blog.jpg'),
    blogTitle : "Introduction: Take Your Story Online",
    blogePara : "Lorem ipsum dolor sit amet consectetur adipis elit. Natus deleniti quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quidem"
  },
  {
    id : 5,
    // blogImg : require('/blog2.jpg'),
    blogTitle : "Introduction: Take Your Story Online",
    blogePara : "Lorem ipsum dolor sit amet consectetur adipis elit. Natus deleniti quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quidem"
  },
]

export default function OurWork() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
        <Heros title="portfolio" btntext="Free Trail" path="freaTrail" />
        
        <SectionWrapper>
            <div className="container Blog OureWarks">
                <SectionTitle  title="Our works" />

                <div className="nav toggole text-center" id="nav-tab" role="tablist" >
                    <button 
                            className="nav-link active mb-2" id="nav-all-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" 
                            aria-selected="true"
                    >
                                All
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-dscr-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-dscr" type="button" role="tab" aria-controls="nav-dscr" 
                            aria-selected="true"
                    >
                                Clipping Path
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" 
                            type="button" role="tab" aria-controls="nav-info" aria-selected="false"
                    >
                            Product Photo Editing
                    </button>
                    
                    <button 
                            className="nav-link mb-2" id="nav-Background-tab" data-bs-toggle="tab" data-bs-target="#nav-Background" 
                            type="button" role="tab" aria-controls="nav-Background" aria-selected="false"
                    >
                             Remove Image Background
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-Correction-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-Correction" type="button" role="tab" aria-controls="nav-Correction" 
                            aria-selected="true"
                    >
                                Color Correction
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-Shadow-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-Shadow" type="button" role="tab" aria-controls="nav-Shadow" 
                            aria-selected="true"
                    >
                                Image Shadow
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-Vector-tab" data-bs-toggle="tab" data-bs-target="#nav-Vector" 
                            type="button" role="tab" aria-controls="nav-Vector" aria-selected="false"
                    >
                            Raster To Vector
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-Retouching-tab" data-bs-toggle="tab" data-bs-target="#nav-Retouching" 
                            type="button" role="tab" aria-controls="nav-Retouching" aria-selected="false"
                    >
                             Image Retouching
                    </button>
                    
                    <button 
                            className="nav-link mb-2" id="nav-Mannequin-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-Mannequin" type="button" role="tab" aria-controls="nav-Mannequin" 
                            aria-selected="true"
                    >
                                Ghost Mannequin
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-Design-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-Design" type="button" role="tab" aria-controls="nav-Design" 
                            aria-selected="true"
                    >
                                Logo Design
                    </button>

                    <button 
                            className="nav-link mb-2" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" 
                            type="button" role="tab" aria-controls="nav-info" aria-selected="false"
                    >
                            Image Masking
                    </button>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div className="tab-pane fade show" id="nav-dscr" role="tabpanel" aria-labelledby="nav-dscr-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div  className="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>
            
                  <div  className="tab-pane fade" id="nav-Mannequin" role="tabpanel" aria-labelledby="nav-Mannequin-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                      <ImageMatching />
                    </div>
                  </div>
                  
                  <div className="tab-pane fade" id="nav-Background" role="tabpanel" aria-labelledby="nav-Background-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-Correction" role="tabpanel" aria-labelledby="nav-Correction-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div  className="tab-pane fade" id="nav-Shadow" role="tabpanel" aria-labelledby="nav-Shadow-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                          
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-Vector" role="tabpanel" aria-labelledby="nav-Vector-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-Retouching" role="tabpanel" aria-labelledby="nav-Retouching-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div  className="tab-pane fade" id="nav-Mannequin" role="tabpanel" aria-labelledby="nav-Mannequin-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                          
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>
                  
                  <div className="tab-pane fade" id="nav-Design" role="tabpanel" aria-labelledby="nav-Design-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-Masking" role="tabpanel" aria-labelledby="nav-Masking-tab" tabIndex="0">
                    <div className='row justify-content-center'>
                        {Photography.map((item)=>(
                          <ImageMatching />
                        ))}
                    </div>
                  </div>
              </div>
            </div>
          </SectionWrapper>

        <Footer />
      </main>
    </>
  )
}
