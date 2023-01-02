import BackgroundSection from "../../layout/backgroundSection";
import SectionTitle from "../../lib/sectionTaitle";
import SeeAllBTn from "../../lib/seeAll";
import PriceCard from "../priceing/priceCard";

const pricing = [
    {
        id1 : 1,
        priceTitle : "Cliping Path",
        price: "$10",
        DisText: "Discount Facility",
        Discount: "24%"
    },
    {
        id1 : 2,
        priceTitle : "Cliping Path",
        price: "$10",
        DisText: "Discount Facility",
        Discount: "24%"
    },
    {
        id1 : 3,
        priceTitle : "Cliping Path",
        price: "$10",
        DisText: "Discount Facility",
        Discount: "24%"
      },
]

export default function Pricing(){

    return(
        <BackgroundSection>
            <SectionTitle title="Pricing" />
            
            <div className="row text-center">
                {pricing.map((item)=>(
                    <PriceCard 
                                key={item.id1}
                                priceTitle={item.priceTitle}
                                price={item.price}
                                DisText={item.DisText}
                                Discount={item.Discount}
                    />
                ))}
            </div>

            <SeeAllBTn />
        </BackgroundSection>
    )
}