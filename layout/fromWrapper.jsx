

export default function FromWrapper(props){
    return(
        <form className="Form">
            {props.children}
        </form>
    )
}