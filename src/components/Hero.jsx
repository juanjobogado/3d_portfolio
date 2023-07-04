// import { styles } from "../styles";
// import { programming, meme } from "../assets";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Juan José</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop Full Stack mobile <br className='sm:block hidden' />
//             and web applications.
//           </p>
//           <img className="mt-10" src={meme}/>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default Hero;

// import { styles } from "../styles";
// import { programming, meme } from "../assets";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Juan José</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop Full Stack mobile <br className='sm:block hidden' />
//             and web applications.
//           </p>
//            <img
//             className="mt-10"
//             src={meme}
//             class="object-left-10 position-absolute"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };


// export default Hero;

import { styles } from "../styles";
import { programming, meme } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Juan José</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full Stack mobile <br className='sm:block hidden' />
            and web applications.
          </p>
          {/* <div className="flex flex-col justify-center items-center mt-10 ml-80">
            <img
              className="object-left-10 position-relative"
              src={meme}
            />
          </div> */}
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="position-relative">
              <img
                className="object-left-10"
                src={meme}
                style={{top: -10}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;