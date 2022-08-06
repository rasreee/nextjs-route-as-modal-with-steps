import formidable from "formidable"
import type { NextApiRequest, NextApiResponse } from "next"

import { handleErrorResponse, handleSuccessResponse } from "@/libs/api"
import { parseIncomingForm } from "@/libs/formidable"
import type { SheetsJson } from "@/libs/xlsx"
import { readExcelFiles } from "@/libs/xlsx"

async function handleUploadRequest(req: NextApiRequest): Promise<SheetsJson> {
  const incomingForm = formidable({})

  const { files } = await parseIncomingForm(req, incomingForm)

  const sheets = await readExcelFiles(files)

  return sheets
}

export const config = {
  api: {
    bodyParser: false /* Required for streaming the data */,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return handleErrorResponse(res, {
      message: `Request method ${req.method} not supported.`,
    })
  }

  try {
    const data = await handleUploadRequest(req)

    handleSuccessResponse(res, data)
  } catch (error) {
    handleErrorResponse(res, error, { status: 500 })
  }
}
