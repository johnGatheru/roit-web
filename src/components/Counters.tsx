"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import image2 from "@/app/assets/images/task_complete_nqs46kf00n70_256.png";
import image3 from "@/app/assets/images/client_tju2x3v0pu5i_256.png";
import image4 from "@/app/assets/images/training_70c6mouat5tq_256.png";
import image5 from "@/app/assets/images/experience_z21dlvtu2b3e_256.png";

const SatisfiedCustomers = () => {
  const { ref: countUpRef1, inView: inView1 } = useInView({
    triggerOnce: false,
  });
  const { ref: countUpRef2, inView: inView2 } = useInView({
    triggerOnce: false,
  });
  const { ref: countUpRef3, inView: inView3 } = useInView({
    triggerOnce: false,
  });
  const { ref: countUpRef4, inView: inView4 } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="bg-black bg-opacity-65 py-16 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40">
      {/* Consultations Completed */}
      <Fade direction="up" duration={800}>
        <div className="flex flex-col items-center">
          <Image src={image2} width={100} alt="coming soon" />
          <div className="text-center mt-6" ref={countUpRef1}>
            {inView1 && (
              <CountUp
                start={0}
                end={1500}
                duration={3}
                separator=","
                className="text-4xl md:text-5xl font-bold text-blue-400"
              />
            )}
            <h2 className="text-md md:text-lg font-bold text-white">
              Consultations Completed
            </h2>
          </div>
        </div>
      </Fade>

      {/* Clients Served */}
      <Fade direction="up" duration={800}>
        <div className="flex flex-col items-center">
          <Image src={image3} width={100} alt="coming soon" />
          <div className="text-center mt-6" ref={countUpRef2}>
            {inView2 && (
              <CountUp
                start={0}
                end={500}
                duration={3}
                separator=","
                className="text-4xl md:text-5xl font-bold text-yellow-400"
              />
            )}
            <h2 className="text-md md:text-lg font-bold text-white">
              Clients Served
            </h2>
          </div>
        </div>
      </Fade>

      {/* Trainings Hosted */}
      <Fade direction="up" duration={800}>
        <div className="flex flex-col items-center">
          <Image src={image4} width={100} alt="coming soon" />
          <div className="text-center mt-6" ref={countUpRef3}>
            {inView3 && (
              <CountUp
                start={0}
                end={200}
                duration={3}
                separator=","
                className="text-4xl md:text-5xl font-bold text-green-400"
              />
            )}
            <h2 className="text-md md:text-lg font-bold text-white">
              Trainings Hosted
            </h2>
          </div>
        </div>
      </Fade>

      {/* Years of Experience */}
      <Fade direction="up" duration={800}>
        <div className="flex flex-col items-center">
          <Image src={image5} width={100} alt="coming soon" />
          <div className="text-center mt-6" ref={countUpRef4}>
            {inView4 && (
              <CountUp
                start={0}
                end={10}
                duration={8}
                separator=","
                className="text-4xl md:text-5xl font-bold text-orange-400"
              />
            )}
            <h2 className="text-md md:text-lg font-bold text-white">
              Years of Experience
            </h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SatisfiedCustomers;
