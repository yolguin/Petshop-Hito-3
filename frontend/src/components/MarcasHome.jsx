/* eslint-disable react/prop-types */
import Slider from "react-slick"

const images = [
    "/001-marca-hills.png",
    "/001-marca-orijen.png",
    "/001-marca-amity.png",
    "/001-marca-royal.png",
    "/001-marca-virbac.png",
    "/001-marca-petlife.png",
]


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

const MarcasHome = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
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

        <div className="destacadosSection">
            <h2>Nuestras Marcas</h2>
            <div className="SlideMarcas" style={{ margin: "auto", padding: "20px" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} style={{ padding: "20px" }}>
                            <img
                                src={img}
                                className="imgMarca"
                                alt={`Thumbnail ${index}`}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    padding: "20px"
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default MarcasHome