export default function FlexWrapper(props){

    return(
        <div className="FlexWrapper row container">
            {props.children}
        </div>
    )
}