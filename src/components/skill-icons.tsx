import { Code, Globe, Server, Database, Cpu, PaintBucket, Figma, Terminal, GitBranch } from "lucide-react"

export const skillIcons = {
  html: Globe,
  css: PaintBucket,
  javascript: Code,
  typescript: Code,
  react: Code,
  nextjs: Code,
  nodejs: Server,
  express: Server,
  mongodb: Database,
  sql: Database,
  postgresql: Database,
  graphql: Database,
  redux: Cpu,
  tailwind: PaintBucket,
  git: GitBranch,
  figma: Figma,
  terminal: Terminal,

  // You can add more icons as needed
  default: Code,
}

export function getSkillIcon(skillName: string) {
  const lowerName = skillName.toLowerCase().replace(/[^a-z0-9]/g, "")

  for (const [key, icon] of Object.entries(skillIcons)) {
    if (lowerName.includes(key)) {
      return icon
    }
  }

  return skillIcons.default
}

