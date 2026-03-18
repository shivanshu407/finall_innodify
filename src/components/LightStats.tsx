"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Trophy } from "lucide-react";
import { useRef, useEffect } from "react";

const stats = [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Projects Delivered", value: 100, suffix: "+" },
    { label: "Industries Served", value: 8, suffix: "+" },
    { label: "AI Solutions Built", value: 30, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            });
            return controls.stop;
        }
    }, [isInView, motionValue, value]);

    return (
        <span ref={ref} className="flex items-baseline gap-1">
            <motion.span className="text-5xl md:text-6xl font-bold text-dark group-hover:text-primary transition-colors font-serif max-lg:text-4xl tabular-nums">
                {isInView ? <Counter motionValue={rounded} /> : "0"}
            </motion.span>
            <span className="text-3xl font-serif text-primary">{suffix}</span>
        </span>
    );
}

function Counter({ motionValue }: { motionValue: ReturnType<typeof useTransform<number, number>> }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = String(latest);
            }
        });
        return unsubscribe;
    }, [motionValue]);

    return <span ref={ref}>0</span>;
}

export function LightStats() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side - Visual/Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                        >
                            <span className="text-primary italic font-serif text-lg">Why Choose Us</span>
                            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-tight">
                                Delivering <span className="text-primary italic">excellence</span><br />
                                across the globe
                            </h2>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed font-light">
                                We combine technical expertise with creative innovation to build digital products that drive real business value. Our track record speaks for itself.
                            </p>

                            <div className="mt-10 flex gap-4">
                                <div className="p-4 bg-light rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-dark font-bold">Award Winning</p>
                                        <p className="text-sm text-gray-500">Design & Dev Agency</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Grid of Stats with animated counters */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                                className="bg-light p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 group"
                            >
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="mt-2 text-gray-500 font-medium tracking-wide uppercase text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
