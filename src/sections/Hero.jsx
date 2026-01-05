import { useMemo } from 'react';
import {Button} from '@/components/Button';
import { ArrowRight, Download, Github,Linkedin,ChevronDown, } from 'lucide-react';
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


// A deterministic pseudo-random generator (not truly random, but pure)
function deterministicRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Custom hook to generate random durations
import { useEffect, useState } from "react";

const useRandomDurations = (count) => {
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    const result = Array.from(
      { length: count },
      () => 2 + Math.random() * 8
    );
    setDurations(result);
  }, [count]);

  return durations;
};


const skills = ['PANDAS','NUMPY', 'SCKITLEARN','PYTHON','SQL','EXCELL','POWER BI','TABLUAE']

export const Hero = () => {
  const dotPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 30; i++) {
      const seed = i * 100; // Or any fixed number
      positions.push({
        left: `${deterministicRandom(seed) * 100}%`,
        top: `${deterministicRandom(seed + 1) * 100}%`,
      });
    }
    return positions;
  }, []);

  const durations = useRandomDurations(30); // Generate random durations outside of render

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/Project/hero2.png"
          alt="Hero Image" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {dotPositions.map((position, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: position.left,
              top: position.top,
              animation: `slow-drift ${durations[index]}s ease-in-out infinite`, // Use pre-calculated duration
                animationDelay:`${deterministicRandom(index) * 5}s`,
           
            }}
          />
        ))}
      </div>

      {/* Content*/}
    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'> 
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/*Left Column- Text content */}
            <div className='space-y-8'>
                <div className=' animate-fade-in'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-(--color-primary)'>
                    <span className='w-2 h-2 bg-(--color-primary) rounded-full animate-pulse'/>
                    Analytics for Finance, Trade & Social Impact
                    </span>
                </div>

                 {/*HeadLine*/}
                 <div className='space-y-4'>
                    <h1 className='text-5xl mmd:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in'>
                        From <span className='text-(--color-highlight)'> banking</span>,
                        <span className='text-(--color-primary) glow-text'><br/>trade data</span>
                        <br/>
                         and <span className='text-(--color-primary) glow-text'>social insights</span>
                        <br/>
                        <span className='font-serif italic font-normal text-wite'>
                        to real-world impact.
                        </span>
                    </h1>
                        <p className='text-lg text-(--color-muted-foreground) max-w-lg animate-fade-in animation-delay-400'>
                            Hi, I'm S.Esdeki- a “Data Analyst with 11+ years in financial and FX ecosystems,
                             turning complex data into actionable, profitable insights.”
                        </p>
                 </div>

                {/* CTA */}
                    <div className='flex flex-wrap gap-4'>
                      <a href="#contact">
                    <Button size='lg' className="rounded-full! px-8 flex items-center gap-2"> 
                        Contact Me <ArrowRight className='w-5 h-5'/>
                    </Button>
                    </a>
                    <a 
                        href="/resume.pdf" 
                        download="S.Esdeki.CV.pdf" 
                        className="no-underline"
                      >
                    <AnimatedBorderButton>
                    <div className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                            <span>Download CV</span>
                    </div>
                    </AnimatedBorderButton>
                    </a>
                    </div>
            {/*SOCIAL LINKS*/}
                <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                    <span className='text-sm items-center text-(--color-muted-foreground)'>Follow Me: </span>
                        {[
                        {icon: Github, href:"https://github.com/esdeki"},
                        {icon: Linkedin, href:"https://www.linkedin.com/in/saeedeh-esdaki27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
                        ].map((social,inx) =>(
                            <a key={inx} href={social.href} className='p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all duration-300'>
                                {<social.icon className='w-5 h-5'/> }
                                </a>
                        ))}               
                </div>
            </div>
            {/*Right Column - Profile Image*/}
            <div className='relative animate-fade-in animation-delay-300'>
                {/*PROFILE IMAGE*/}
                <div className='relative max-w-md mx-auto'>
                    <div className='relative glass rounded-3xl p-2 glow-border'>
                        <img src='/sem2.png' alt="SADIE ESDEKI" className='w-full aspect-4/5 object-cover rounded-2xl'/>
                        {/*FLOATING BADGE*/}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
            {/*STATS BADGE*/}
            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-(--color-primary)">5+</div>
                  <div className="text-xs text(--color--muted-foreground)">
                    Years Exp.
                  </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    {/*SKILLS SECTION*/}
    <div className='mt-20 animate-fade-in animation-delay-600'>
        <p className='text-sm text-(--color-muted-foreground) mb-6 text-center'>Technologies I work with:</p>
        <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
                {[...skills, ...skills].map((skill, idx) =>(
                    <div key={idx} className='shrink-0 px-8 py-4'>
                        <span className="text-xl font-semibold text-(--color-muted-foreground)/90 hover:text-(--color-highlight) transition-colors">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>

    </div>
    <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
