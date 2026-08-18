import ToolIcon from "@/components/home/toolbox/ToolIcon";
import type { ToolboxGroup as ToolboxGroupData } from "@/types/toolbox";
import { toolboxTheme } from "@/theme/toolbox";

interface ToolboxGroupProps {
  group: ToolboxGroupData;
}

export default function ToolboxGroup({ group }: ToolboxGroupProps) {
  return (
    <article className={toolboxTheme.group}>
      <div className={toolboxTheme.groupInformation}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
            <ToolIcon icon={group.icon} className="h-6 w-6" />
          </div>

          <div>
            <h3 className={toolboxTheme.title}>{group.title}</h3>

            <p className={toolboxTheme.description}>
              {group.description}
            </p>
          </div>
        </div>
      </div>

      <ul className={toolboxTheme.tools}>
        {group.tools.map((tool) => (
          <li key={tool.name} className={toolboxTheme.tool}>
            {tool.icon && (
              <ToolIcon
                icon={tool.icon}
                className="h-5 w-5 shrink-0 text-primary"
              />
            )}

            <span>{tool.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
