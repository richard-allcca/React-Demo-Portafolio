// slider library
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// images
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        // eslint-disable-next-line max-len
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloribus fugiat fugit cum corporis esse sed exercitationem dolorum dolore quisquam quasi voluptas officia praesentium iste iure voluptatibus, ipsa magni tempora obcaecati eum magnam eaque sapiente! Dolores eum est neque.",
      },
      {
        img: profilePic2,
        review:
        // eslint-disable-next-line max-len
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloribus fugiat fugit cum corporis esse sed exercitationem dolorum dolore quisquam quasi voluptas officia praesentium iste iure voluptatibus, ipsa magni tempora obcaecati eum magnam eaque sapiente! Dolores eum est neque.",
      },
      {
        img: profilePic3,
        review:
        // eslint-disable-next-line max-len
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloribus fugiat fugit cum corporis esse sed exercitationem dolorum dolore quisquam quasi voluptas officia praesentium iste iure voluptatibus, ipsa magni tempora obcaecati eum magnam eaque sapiente! Dolores eum est neque.",
      },
      {
        img: profilePic4,
        review:
        // eslint-disable-next-line max-len
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloribus fugiat fugit cum corporis esse sed exercitationem dolorum dolore quisquam quasi voluptas officia praesentium iste iure voluptatibus, ipsa magni tempora obcaecati eum magnam eaque sapiente! Dolores eum est neque.",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        {/* background width blur */}
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index} id="Testimonial">
              <div className="testimonial">
                <img src={client.img} alt="imagen" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
