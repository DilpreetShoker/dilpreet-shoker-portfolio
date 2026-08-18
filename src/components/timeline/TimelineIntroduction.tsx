import Timeline from "@/components/timeline/Timeline";
import TimelineHeader from "@/components/timeline/TimelineHeader";

export default function TimelineIntroduction() {
  return (
    <div className="relative">
      <div className="sticky top-[var(--navbar-height)] z-0 h-[38svh] min-h-[22rem] max-h-[30rem]">
        <TimelineHeader />
      </div>

      <div className="relative z-10">
        <Timeline />
      </div>
    </div>
  );
}
