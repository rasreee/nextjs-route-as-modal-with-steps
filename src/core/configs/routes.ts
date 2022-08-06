import type { StepId } from "@/features/steps"
import type { Dict } from "@/libs/abstract/types"
import { entries } from "@/libs/abstract/utils"

export function dynamicRoute(template: string, params: Dict) {
  let route = ""
  entries(params).forEach(([key, value]) => {
    route += template.replace(`[${key}]`, value)
  })
  return route
}

const routeTemplates = {
  step: "/steps/[id]" as const,
}

export const routes = {
  home: "/" as const,
  step: (id: StepId) => dynamicRoute(routeTemplates.step, { id }),
}
