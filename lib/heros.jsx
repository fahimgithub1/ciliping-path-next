

export default function Heros(props){

    return(
        <section className="Heros">
            <div className="ServiceHeros">
                <h5>{props.title}</h5>
                <button>
                    <a href={props.path}>{props.btntext}</a>
                </button>
            </div>
        </section>
    )
}