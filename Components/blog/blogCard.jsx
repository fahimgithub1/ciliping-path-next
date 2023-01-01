import Link from "next/link";
import Width33Wrappre from "../../layout/width33Wrappre";


export default function BlogCard(props){

    return(
        <Width33Wrappre>
            <Link href="/blogeSingle">
                <div className="BlogDiv">
                    <img src="/blog2.jpg" alt="" />
                    <h2>{props.blogTitle}</h2>
                    <p>
                        {props.blogePara}
                    </p>
                </div>
            </Link>
        </Width33Wrappre>
    )
}