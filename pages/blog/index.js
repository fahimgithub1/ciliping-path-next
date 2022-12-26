import Footer from '../../layout/footer';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import BlogCard from '../../Components/blog/blogCard';

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

export default function Bloge() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />
          <SectionWrapper>
            <div className="container Blog">
                <SectionTitle  title="The Cops Blog" />
                <p>
                  Resources, advise and inspiration for creators
                </p>

                <div class="nav toggole text-center" id="nav-tab" role="tablist" >
                    <button 
                            class="nav-link active mb-2" id="nav-dscr-tab" data-bs-toggle="tab" 
                            data-bs-target="#nav-dscr" type="button" role="tab" aria-controls="nav-dscr" 
                            aria-selected="true"
                    >
                                Photography
                    </button>

                    <button 
                            class="nav-link mb-2" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" 
                            type="button" role="tab" aria-controls="nav-info" aria-selected="false"
                    >
                            Tutorial
                    </button>

                    <button 
                            class="nav-link mb-2" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" 
                            type="button" role="tab" aria-controls="nav-review" aria-selected="false"
                    >
                             Ecommerce
                    </button>
                </div>

                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-dscr" role="tabpanel" aria-labelledby="nav-dscr-tab" tabindex="0">
                    <div className='row'>
                        {Photography.map((item)=>(
                          <BlogCard 
                                      key = {item.id}
                                      blogTitle = {item.blogTitle}
                                      blogePara = {item.blogePara}
                          />
                        ))}
                    </div>
                  </div>

                  <div  class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
                    <div className='row'>
                          
                        {Photography.map((item)=>(
                          <BlogCard 
                                      key = {item.id}
                                      blogTitle = {item.blogTitle}
                                      blogePara = {item.blogePara}
                          />
                        ))}
                    </div>
                  </div>

                  <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
                    <div className='row'>
                        {Photography.map((item)=>(
                          <BlogCard 
                                      key = {item.id}
                                      blogTitle = {item.blogTitle}
                                      blogePara = {item.blogePara}
                          />
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
