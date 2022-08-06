import clsx from "clsx"
import type { FC } from "react"

import type { Nullable } from "@/libs/abstract/types"
import { isDefined, isNullish } from "@/libs/abstract/utils"
import type { BasicError } from "@/libs/api/api.types"

import { ExclamationIcon } from "./ExclamationIcon"

type ErrorMessageProps = {
  error: Nullable<BasicError>
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (isNullish(error)) {
    return null
  }

  return (
    <div className={clsx("text-base", error.stack && "flex-col gap-2")}>
      <div className="flex h-7 items-center gap-2">
        <ExclamationIcon className="h-5 w-auto" />
        <span className="leading-none">{error.message}</span>
      </div>
      {isDefined(error.stack) && <div>{error.stack}</div>}
    </div>
  )
}

export default ErrorMessage
