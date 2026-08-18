import {
  Activity,
  Apple,
  Braces,
  BrainCircuit,
  CircleGauge,
  Code2,
  Coffee,
  Database,
  Eye,
  GitBranch,
  Leaf,
  Network,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  TestTube2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { ToolboxIcon } from "@/types/toolbox";

interface ToolIconProps {
  icon: ToolboxIcon;
  className?: string;
}

const icons: Record<ToolboxIcon, LucideIcon> = {
  code: Code2,
  java: Coffee,
  python: Braces,
  typescript: Braces,
  javascript: Braces,
  swift: Apple,
  database: Database,
  spring: Leaf,
  api: Braces,
  kafka: Network,
  redis: Database,
  shield: ShieldCheck,
  test: TestTube2,
  performance: CircleGauge,
  observability: Activity,
  frontend: PanelsTopLeft,
  mobile: Smartphone,
  vision: Eye,
  ai: BrainCircuit,
  git: GitBranch,
  review: SearchCheck,
  delivery: Workflow,
};

export default function ToolIcon({
  icon,
  className = "h-5 w-5",
}: ToolIconProps) {
  const Icon = icons[icon];

  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.8}
      className={className}
    />
  );
}
