/* eslint-disable react/prop-types */
import Slider from "react-slick"

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#5756562d" }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#5756562d" }}
            onClick={onClick}
        />
    )
}

const Subcategorias = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    }

    return (

        <div className="SubCatSection">
            <div className="SlideSubCat" style={{ margin: "auto", padding: "20px" }}>
                <Slider {...settings}>

                    <div className="boxSubCat">
                        <img
                            src="/002-btn-alimento.png"
                            className="imgSubCat"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <p>Alimento</p>
                    </div>

                    <div className="boxSubCat">
                        <img
                            src="/002-btn-higiene.png"
                            className="imgSubCat"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <p>Higiene</p>
                    </div>

                    <div className="boxSubCat">
                        <img
                            src="/002-btn-juguetes.png"
                            className="imgSubCat"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <p>Juguetes</p>
                    </div>

                    <div className="boxSubCat">
                        <img
                            src="/002-btn-accesorios.png"
                            className="imgSubCat"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <p>Accesorios</p>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Subcategorias