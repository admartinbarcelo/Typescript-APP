import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h6 w-6" />,
    title: "Modern Equipment",
    description:
      "We provide modern equipment to help you achieve your fitness goals.",
  },
  {
    icon: <UserGroupIcon className="h6 w-6" />,
    title: "Diverse Classes",
    description:
      "We provide diverse classes to help you achieve your fitness goals.",
  },
  {
    icon: <AcademicCapIcon className="h6 w-6" />,
    title: "Expert Trainers",
    description:
      "We provide expert trainers to help you achieve your fitness goals.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          >
            {/* HEADER */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>MORE THAN JUST GYM.</HText>
              <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
              </p>
            </motion.div>
    
            {/* BENEFITS */}
            <motion.div
              className="mt-5 items-center justify-between gap-8 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {benefits.map((benefit: BenefitType) => (
                <Benefit
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
    
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* GRAPHIC */}
              <img
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
              />
    
              {/* DESCRIPTION */}
              <div>
                {/* TITLE */}
                <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className="text-primary-500">FIT</span>
                      </HText>
                    </motion.div>
                  </div>
                </div>
    
                {/* DESCRIPT */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">
                  Join our community today and become one of the millions of happy members getting fit! Experience the transformative power of our fitness programs and start your journey towards a healthier and stronger life. Our member-centric approach and proven results will provide you with the motivation and support you need to achieve your goals. Don't miss out, join us now!
                  </p>
                  <p className="mb-5">
                  In our community, you'll find a welcoming and motivating environment where you can connect with like-minded individuals who share your goals and enjoy a rewarding fitness experience. Our trained professionals are ready to provide personalized guidance and help you maximize your results. Regardless of your fitness level, we have options for everyone, from beginners to experienced athletes. Join us and discover the joy of being fit alongside millions of satisfied members. Don't wait any longer, start your journey to a healthier lifestyle today!
                  </p>
                </motion.div>
    
                {/* BUTTON */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      );
};

export default Benefits;
