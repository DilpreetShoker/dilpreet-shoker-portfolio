export type ToolboxIcon =
  | "code"
  | "java"
  | "python"
  | "typescript"
  | "javascript"
  | "swift"
  | "database"
  | "spring"
  | "api"
  | "kafka"
  | "redis"
  | "shield"
  | "test"
  | "performance"
  | "observability"
  | "frontend"
  | "mobile"
  | "vision"
  | "ai"
  | "git"
  | "review"
  | "delivery";

export interface ToolboxTool {
  name: string;
  icon?: ToolboxIcon;
}

export interface ToolboxGroup {
  title: string;
  description: string;
  icon: ToolboxIcon;
  tools: readonly ToolboxTool[];
}
