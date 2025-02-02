
import Slider from "react-slick"

const images = [
  "/BANNER1.jpg",
  "/BANNER1.jpg",
  "/BANNER1.jpg",
]

const HeaderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className="contenedorHeadHome">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ padding: "" }}>
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
  )
}

export default HeaderHome