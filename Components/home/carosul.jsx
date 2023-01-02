

export default function Carosul(){

    return(
        <section className="Heros">
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/professional-editor-doing-retouching-work-image_482257-6419.jpg?size=626&ext=jpg&ga=GA1.2.1595105959.1664433145&semt=sph" className="d-block w-100" alt="..."/>

                            <div className="carousel-caption d-block">
                                <h5>Cliping Path Perfectionis</h5>
                                <button>
                                    <a href="/freaTrail">Free Trail</a>
                                </button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="https://img.freepik.com/premium-photo/woman-editing-photo-computer-software-interface-is-completely-made-up_746318-1425.jpg?size=626&ext=jpg&ga=GA1.2.1595105959.1664433145&semt=sph" className="d-block w-100" alt="..."/>

                            <div className="carousel-caption d-block">
                                <h5>Cliping Path Perfectionis</h5>
                                <button>
                                    <a href="/freaTrail">Free Trail</a>
                                </button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="https://img.freepik.com/premium-vector/beautiful-design-golden-frame-background-vector_664482-1613.jpg?size=338&ext=jpg&ga=GA1.2.1595105959.1664433145&semt=sph" className="d-block w-100" alt="..."/>

                            <div className="carousel-caption d-block">
                                <h5>Cliping Path Perfectionis</h5>
                                <button>
                                    <a href="/freaTrail">Free Trail</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}