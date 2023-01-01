import Widthn25Wrapper from "../../layout/width25Wrapper";


export default function ContactDiv(props){

    return(
        <Widthn25Wrapper style="contactPerMain">
            <div className="contactPer">
                <i className={props.icon}></i>
                <h4>{props.title}</h4>
            </div>

            <div className="contactPerText">
                <p> 
                    {props.text}
                </p>
            </div>
        </Widthn25Wrapper>
    )
}