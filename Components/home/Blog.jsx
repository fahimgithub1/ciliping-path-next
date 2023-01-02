import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import BlogCard from "../blog/blogCard";

const blog = [
    {
        id:1,
        blogTitle: "Introduction: Take Your Story Online",
        blogePara: "Lorem Ipsum Dolor Sit Amet Consectetur Adipis Elit. Natus Deleniti Quidem Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus Deleniti Quidem"
    },
    {
        id:2,
        blogTitle: "Introduction: Take Your Story Online",
        blogePara: "Lorem Ipsum Dolor Sit Amet Consectetur Adipis Elit. Natus Deleniti Quidem Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus Deleniti Quidem"
    },
    {
        id:3,
        blogTitle: "Introduction: Take Your Story Online",
        blogePara: "Lorem Ipsum Dolor Sit Amet Consectetur Adipis Elit. Natus Deleniti Quidem Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus Deleniti Quidem"
    }
]

export default function Blog(){

    return(
        <SectionWrapper>
            <div className="container">
                <SectionTitle title="Oure Latest Blog" />

                <div className="row">
                    {blog.map((item)=>(
                        <BlogCard 
                                    key={item.id}
                                    blogTitle={item.blogTitle}
                                    blogePara={item.blogePara}
                        
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}