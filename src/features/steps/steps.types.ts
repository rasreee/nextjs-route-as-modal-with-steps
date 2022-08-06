import type { PayStub } from "@/core/domains/paystub"
import type { SuccessCallback } from "@/libs/abstract/types"
import type { SheetsJson } from "@/libs/xlsx"

export enum StepId {
  Upload = "upload",
  Generate = "generate",
  Download = "download",
}

export interface IStepState<Type extends StepId = StepId, Data = any> {
  id: Type
  data?: Data
}

export type StepState =
  | IStepState<StepId.Upload, SheetsJson>
  | IStepState<StepId.Generate, PayStub>
  | IStepState<StepId.Download>

export type StepProps<Input = undefined, Result = undefined> = {
  onSuccess: SuccessCallback<Result>
  data?: Input extends undefined ? never : Input
}
