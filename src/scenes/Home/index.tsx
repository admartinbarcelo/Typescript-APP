import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
  return <section> Home </section>;
};

export default Home;
