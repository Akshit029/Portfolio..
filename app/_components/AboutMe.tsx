'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const enterTimeline = gsap.timeline({
                scrollTrigger: {
                    id: 'about-enter',
                    trigger: sectionRef.current,
                    start: 'top 65%',
                    end: 'center center',
                    scrub: 1,
                },
            });

            enterTimeline.from('.fade-in-element', {
                y: 100,
                opacity: 0,
                stagger: 0.08,
                ease: 'power2.out',
            });
        },
        { scope: sectionRef },
    );

    useGSAP(
        () => {
            const exitTimeline = gsap.timeline({
                scrollTrigger: {
                    id: 'about-exit',
                    trigger: sectionRef.current,
                    start: 'bottom 40%',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            exitTimeline.to('.fade-in-element', {
                y: -120,
                opacity: 0,
                stagger: 0.025,
                ease: 'power1.in',
            });
        },
        { scope: sectionRef },
    );

    return (
        <section className="py-32 md:py-40" id="about-me">
            <div className="container" ref={sectionRef}>
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* Philosophy Statement */}
                    <div className="fade-in-element">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight max-w-5xl">
                            Every project I craft is built with
                            intention—combining user-centered design with
                            technical excellence to create digital experiences
                            that truly resonate.
                        </h2>
                    </div>

                    {/* Divider */}
                    <div className="fade-in-element">
                        <div className="h-px bg-border w-full" />
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4">
                            About Me
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                        {/* Left Column - Name */}
                        <div className="fade-in-element">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-anton leading-tight">
                                HI, I&apos;M
                                <span className="block text-primary mt-2">
                                    AKSHIT CHADGAL
                                </span>
                            </h3>
                        </div>

                        {/* Right Column - Description */}
                        <div className="space-y-6">
                            <p className="fade-in-element text-base sm:text-lg text-muted-foreground leading-relaxed">
                                A Computer Science student passionate about
                                full-stack development, specializing in the MERN
                                stack. I thrive on transforming concepts into
                                polished, functional web applications through
                                thoughtful code and creative problem-solving.
                            </p>

                            <p className="fade-in-element text-base sm:text-lg text-muted-foreground leading-relaxed">
                                I believe in building applications that scale
                                gracefully and perform flawlessly. My focus is
                                on crafting accessible, responsive interfaces
                                that not only look great but deliver measurable
                                value to users and businesses alike.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
