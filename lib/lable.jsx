
export default function Label(props){

    return(
        <label htmlFor={props.hFor}>{props.text}</label>
    )
}