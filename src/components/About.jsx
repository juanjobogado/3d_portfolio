import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
    >
      Hi! My name is Juan José, and I'm a Full Stack Web Developer with great entrepreneurial skills.
I enjoy being connected with people and working together as a team. I have background in Law studies and I've also worked in administration and customer service.
I consider myself proactive. I always have to be learning new stuff, working on projects, and learning new languages.
I decided to became a developer because all my life I wanted to be able to do homeoffice while I travel to different places discovering the world. And I'm happy to start this journey looking for the job that will allow me to fulfill my dreams. And the best part of this, is that I discovered I love studying new technologies.
The thechnologies I work with are Javascript, TypeScript CSS, HTML, React, Redux, NextJs, Prisma, PostgreSQL, Sequelize, Express, JQuery, NodeJs, Cloudinary and Bootstrap, and I'm willing to learn more.
I also have as soft skills SCRUM, and the GitFlow.

Besides the projects I made during the time I studied in Henry, I also was Teacher Assistant. And before Henry, I used to teach Spanish to people from all over the world. So I love meeting new people, work with them, and learn from them as well.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");