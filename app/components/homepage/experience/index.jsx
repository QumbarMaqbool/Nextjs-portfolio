'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BsPersonWorkspace } from 'react-icons/bs';

import { experiences } from '@/utils/data/experience';
import experienceLottie from '../../../assets/lottie/code.json';
import GlowCard from '../../helper/glow-card';

/*  ──────────────────────────────────────────
    Lazy‑load lottie‑react only on the client
    ────────────────────────────────────────── */
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Decorative background */}
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section title */}
      <header className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </header>

      {/* Main content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie illustration */}
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <Lottie animationData={experienceLottie} loop autoplay />
            </div>
          </div>

          {/* Experience cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt=""
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />

                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {exp.duration}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <BsPersonWorkspace
                      size={36}
                      className="text-violet-500 transition-all duration-300 hover:scale-125"
                    />
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {exp.title}
                      </p>
                      <p className="text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
