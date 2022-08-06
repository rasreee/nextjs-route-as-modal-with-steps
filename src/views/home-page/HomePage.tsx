import { useRouter } from "next/router"
import type { FC } from "react"
import React from "react"

import { routes } from "@/core/configs/routes"
import { site } from "@/core/configs/site"
import { StepId } from "@/features/steps"

export const HomePage: FC = () => {
  return (
    <div className="my-44 mx-auto flex w-min flex-col gap-5">
      <Hero />
      <CallToAction />
    </div>
  )
}

const Hero: FC = () => {
  return (
    <div className="flex w-max flex-col gap-5 py-10">
      <div className="w-max text-3xl font-bold leading-none md:text-5xl">
        {site.title}
      </div>
      <div className="w-max text-lg font-light leading-none text-gray-700 md:text-xl">
        {site.description}
      </div>
    </div>
  )
}

const CallToAction: FC = () => {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <button
        className="primary-button"
        onClick={() => {
          router.push(routes.step(StepId.Upload), undefined, {
            shallow: true,
          })
        }}
      >
        Get Started Now
      </button>
    </div>
  )
}
