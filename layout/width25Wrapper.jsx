

export default function Widthn25Wrapper(props){

    return(
        <div className={`col-lg-3 col-md-6 col-sm-6 ${props.style}`}>
            {props.children}
        </div>
    )
}