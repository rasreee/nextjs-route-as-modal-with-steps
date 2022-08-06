import type { NextApiResponse } from "next"

import type { Dict } from "@/libs/abstract/types"

export function handleSuccessResponse(res: NextApiResponse, data: Dict): void {
  res.status(200).json(data)
  res.end()
}

export function handleErrorResponse(
  res: NextApiResponse,
  error: any,
  options: { status?: number } = {}
): void {
  const { status = 500 } = options
  res.status(status).json(error)
  res.end()
}
