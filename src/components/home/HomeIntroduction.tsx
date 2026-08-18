import About from "@/components/home/about/About";
import Hero from "@/components/home/hero/Hero";

export default function HomeIntroduction() {
    return (
        <div className="relative">
            <div
                className=" sticky top-[var(--navbar-height)] z-0 h-[calc(100svh_-_var(--navbar-height))]">
                <Hero/>
            </div>

            <div className="relative z-10">
                <About/>
            </div>
        </div>
    );
}
