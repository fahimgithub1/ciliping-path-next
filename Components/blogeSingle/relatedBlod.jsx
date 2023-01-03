import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import BlogCard from "../blog/blogCard";

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
  ]

export default function RelatedBlod(){

    return(
        <SectionWrapper>
            <div className='container RelatedBlog'>
                <SectionTitle title="Related Blog" />

                <div className='row'>
                    {Photography.map((item)=>(
                        <BlogCard  
                                    blogTitle={item.blogTitle}
                                    blogePara={item.blogePara}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}