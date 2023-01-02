import { Fragment } from "react";
import SectionWrapper from "../../layout/sectionWrapper";


export default function LeftSide(){


    return(
        <Fragment>
            <SectionWrapper>
                <div class="DaitlesPerDIv">
                    <h2 class="MainTilte">Freelancing Training Course In Bangladesh</h2>

                    <div class="imageDivBlog text-center">
                            <img src="/blog1.jpg" alt="" />
                    </div>

                    <p>
                        Freelancing is a good way to earn extra money if you are looking for part-time income.
                            If you have the skills and are willing to work hard, this opportunity might be right 
                            for you. On the other hand, hiring freelancers is also an option for small businesses
                            and startups who can’t afford full-time employees or don’t have enough work yet to 
                        make it worth it. Freelancers usually charge less than employees because they can 
                        pick and choose what type of work they want to do.
                    </p>
                </div>
            </SectionWrapper>
        </Fragment>
    )
}