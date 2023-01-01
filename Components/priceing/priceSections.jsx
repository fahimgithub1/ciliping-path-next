import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import PriceCard from "./priceCard";

const pricing = [
    {
        id : 1,
        title : "Clipping Path Services",
        parts : [
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
    },
    {
        id : 2,
        title : "Photoshop Image Retouching Services",
        parts : [
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
    },
    {
        id : 3,
        title : "Ghost Mannequin Service",
        parts : [
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
    },
    {
        id : 4,
        title : "Color Correction Services",
        parts : [
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
    }
]

export default function PriceSections(props){

    return(
        <>
            {pricing.map((item)=>(
                <SectionWrapper key={item.id}>
                    <div className="container Blog PricingSection">
                        <SectionTitle  title={item.title} />

                        <div className="row">
                            {item.parts.map((item1) =>(
                                <PriceCard key={item1.id1} 
                                        priceTitle={item1.priceTitle}
                                        price={item1.price}
                                        DisText={item1.DisText}
                                        Discount={item1.Discount}
                                />
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            ))}
        </>
    )
}