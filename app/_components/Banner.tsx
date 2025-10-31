'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top top',
                    end: 'bottom 20%',
                    scrub: 1.5,
                },
            });

            tl.to('.animate-text', {
                y: -80,
                opacity: 0,
                stagger: 0.03,
                ease: 'power1.out',
            });

            tl.to(
                '.animate-badge',
                {
                    scale: 0.8,
                    opacity: 0,
                    ease: 'power2.in',
                },
                '<',
            );
        },
        { scope: wrapperRef },
    );

    return (
        <section
            className="relative overflow-hidden"
            id="banner"
            ref={wrapperRef}
        >
            <ArrowAnimation />

            <div className="container min-h-[100svh] flex items-center justify-center py-20">
                <div className="w-full max-w-5xl">
                    <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
                        {/* Main Content */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="inline-block animate-badge">
                                <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                                    <span className="text-sm font-medium text-primary">
                                        Available for work
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-anton space-y-2">
                                    <span className="animate-text block text-4xl sm:text-6xl lg:text-7xl">
                                        FULL STACK
                                    </span>
                                    <span className="animate-text block text-5xl sm:text-7xl lg:text-8xl text-primary">
                                        DEVELOPER
                                    </span>
                                </h1>
                            </div>

                            <p className="animate-text text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                                I&apos;m{' '}
                                <span className="font-bold text-foreground">
                                    Akshit Chadgal
                                </span>
                                , a Computer Science student with a strong focus
                                on the MERN stack. I'm passionate about building
                                modern, scalable web applications and love
                                turning ideas into smooth, user-friendly digital
                                experiences through hands-on projects and
                                continuous learning.Through personal projects
                                and freelance work, I've gained real-world
                                experience in building full-stack applications.
                            </p>

                            {/* <Button
                as="link"
                target="_blank"
                rel="noopener noreferrer"
                href={GENERAL_INFO.upworkProfile}
                variant="primary"
                className="animate-text"
              >
                View My Work
              </Button> */}
                        </div>

                        {/* Stats Sidebar */}
                        {/* <div className="lg:border-l lg:border-border lg:pl-12 space-y-8">
              <div className="animate-text">
                <div className="text-5xl lg:text-6xl font-anton text-primary leading-none mb-3">
                  3+
                </div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Years Building
                </p>
              </div>

              <div className="animate-text">
                <div className="text-5xl lg:text-6xl font-anton text-primary leading-none mb-3">
                  7+
                </div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Projects Launched
                </p>
              </div>

              <div className="animate-text">
                <div className="text-5xl lg:text-6xl font-anton text-primary leading-none mb-3">
                  10K+
                </div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Hours Invested
                </p>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
