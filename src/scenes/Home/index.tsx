import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="br-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home__page__text" />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          </div>
        </div>
        {/* IMAGE */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
