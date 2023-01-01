import BackgroundSection from "../../layout/backgroundSection";
import SectionTitle from "../../lib/sectionTaitle";
import ContactDiv from "./contactDiv";

const contacInfo = [
    {
        id : 1,
        icon : "fa fa-phone",
        title : "Phone",
        text : "+880174-326-0655"
    },
    {
        id : 2,
        icon : "fa fa-envelope",
        title : "Email",
        text : "info@digitalmarketingbd.com"
    },
    {
        id : 3,
        icon : "fa-brands fa-skype",
        title : "Skype",
        text : "dmsolution2015"
    },
    {
        id : 4,
        icon : "fa-brands fa-whatsapp",
        title : "What's App",
        text : "+880174-326-0655"
    },
]

export default function LocatinAndContact(){

    return(
        <BackgroundSection>
            <div className="contactLocation">
                <SectionTitle title="office Location" />
                
                <div className="Location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Flat # 6/A, Level 7, House 10, Rd# 02, Sec# 06, House Building Uttara Dhaka-1230.</span>
                </div>

                <hr />

                <div className="row contactMain">
                    {contacInfo.map((item)=>(
                        <ContactDiv 
                                    key = {item.id}
                                    icon={item.icon} 
                                    title={item.title}
                                    text={item.text}
                        />
                    ))}
                </div>
            </div>
        </BackgroundSection>
    )
}