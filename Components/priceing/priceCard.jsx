import Width33Wrappre from "../../layout/width33Wrappre";


export default function PriceCard(props){

    return(
        <Width33Wrappre>
            <div className="PerPricingDiv">
                <div className="Pricing">
                    <h2 className="TitleBg">{props.priceTitle}</h2>
    
                    <div className="text-center PriceImage">
                        <img src="/logo-removebg-preview.png" alt=""/>
                        <p>Starting At {props.price} USD/Image</p>
                    </div>
    
                    <div className="PriceAndText">
                        <p>{props.DisText}</p>
                        <p>Upton {props.Discount} on order</p>
                    </div>
                </div>
            </div>
        </Width33Wrappre>
    )
}