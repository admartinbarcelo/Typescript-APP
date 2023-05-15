import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { SelectedPage, ClassType } from "@/shared/types";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weightlifting Classes",
    description:
      "Get fit and strong with Weightlifting Classes. Our expert trainers offer personalized instruction for all fitness levels. Join us and start your fitness journey today!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover the transformative power of yoga at Yoga Classes. Our experienced instructors offer classes for all levels. Join us and embark on your yoga journey today!",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Get ready to strengthen and tone your core at Ab Core Classes. Our expert instructors will guide you through dynamic workouts for a stronger and more defined midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience thrilling adventures with Adventure Classes! Join us for outdoor activities like rock climbing, hiking, and kayaking led by experienced guides. Step out of your comfort zone and sign up today!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Achieve your fitness goals with Fitness Classes! Our dynamic workouts, led by certified trainers, are suitable for all levels. Join us today and start your transformation!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Elevate your training at Training Classes! Join us for personalized instruction and reach your fitness goals with experienced trainers. Unleash your potential and sign up today!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
