import EngineeringProcess from "@/components/home/engineering-process/EngineeringProcess";
import HomeIntroduction from "@/components/home/HomeIntroduction";
import Toolbox from "@/components/home/toolbox/Toolbox";

export default function HomePage() {
    return (
        <>
            <HomeIntroduction />
            <EngineeringProcess />
            <Toolbox />
        </>
    );
}