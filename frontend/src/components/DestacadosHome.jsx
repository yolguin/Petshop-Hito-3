/* eslint-disable react/prop-types */
import Slider from "react-slick"

const images = [
  "/producto.jpg",
  "/producto.jpg",
  "/producto.jpg",
  "/producto.jpg",
  "/producto.jpg",
  "/producto.jpg",
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

const DestacadosHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
          slidesToShow: 1,
        },
      },
    ],
  }

  return (

    <div className="destacadosSection">
      <h2>Productos destacados</h2>
      <div style={{ width: "70%", margin: "auto", padding: "20px" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} style={{ padding: "20px" }}>
              <img
                src={img}
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

export default DestacadosHome