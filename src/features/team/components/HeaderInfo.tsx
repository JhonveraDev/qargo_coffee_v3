import headerImg from "../../../assets/images/our-team/header.png";
import headerImgMobile from "../../../assets/images/our-team/header-mobile.png";

export const HeaderInfo = () => {
  return (
    <header className="header-info">
      <picture>
        <source
          media="(max-width: 719px)"
          srcSet={headerImgMobile}
        />

        <img
          src={headerImg}
          alt=""
          className=""
        />
      </picture>
      <div className="header-info__content">
        <h1>Our Team</h1>
        <p>Meet the heart of Qargo Coffee—a family of passionate experts across diverse fields, united in setting a new standard for coffee. Together, we’re redefining the coffee experience and pushing customer satisfaction to new heights, ensuring every cup reflects our unwavering commitment to quality and support.</p>
      </div>
    </header>
  )
}
