import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";


const benefits: Array <BenefitType> = [
    {
        icon: <HomeModernIcon className="w-6 h6"/>,
        title: "Modern Equipment",
        description: "We provide modern equipment to help you achieve your fitness goals."
    },
    {
        icon: <UserGroupIcon className="w-6 h6"/>,
        title: "Modern Equipment",
        description: "We provide modern equipment to help you achieve your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="w-6 h6"/>,
        title: "Modern Equipment",
        description: "We provide modern equipment to help you achieve your fitness goals."
    }
]
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:my:w-3/5">
            <HText>MORE THAN JUST A GYM</HText>
            <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
            </p>
        </div>
        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Benefits;
