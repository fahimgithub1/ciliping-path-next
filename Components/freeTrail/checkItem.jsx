

export default function CheckItem(props){

    return(
        <div className="CheckItem">
            <input type="checkbox" />
            <span>{props.checkText}</span>
        </div>
    )
}