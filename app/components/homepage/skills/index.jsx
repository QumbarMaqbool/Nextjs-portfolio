/* app/(components)/Skills/index.tsx */
'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';

/*  ──────────────────────────────────────────
    Lazy‑load react‑fast‑marquee only on the
    client so it never runs during SSR
    ────────────────────────────────────────── */
const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20" />

      {/* top divider */}
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      {/* section title */}
      <header className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </header>

      {/* marquee */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          play
          direction="left"
          className="gap-6"
        >
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="w-36 min-w-fit m-3 sm:m-5 flex flex-col items-center justify-center rounded-lg group cursor-pointer transition-transform duration-500 hover:scale-110"
            >
              <div className="w-full h-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-colors duration-500">
                {/* inner top gradient line */}
                <div className="flex justify-center -translate-y-px">
                  <div className="w-3/4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
