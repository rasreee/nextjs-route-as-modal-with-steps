import type formidable from "formidable"
import type IncomingForm from "formidable/Formidable"
import type { IncomingMessage } from "http"

export type ParseIncomingFormResult = {
  fields: formidable.Fields
  files: formidable.Files
}

export async function parseIncomingForm(
  req: IncomingMessage,
  form: IncomingForm
): Promise<ParseIncomingFormResult> {
  const result = await new Promise<ParseIncomingFormResult>(
    (resolve, reject) => {
      form.parse(req, (error, fields, files) => {
        if (error) {
          reject(error)
        } else {
          resolve({ fields, files })
        }
      })
    }
  )
  return result
}
