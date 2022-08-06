import * as xlsx from "xlsx"

import type { Dict, Entries } from "@/libs/abstract/types"

import type { SheetsJson } from "./xlsx.types"

export interface IFile {
  filepath: string
}

export interface IFiles {
  [file: string]: IFile | IFile[]
}

export async function readExcelFiles<TSheetsJson extends SheetsJson>(
  files: IFiles
): Promise<TSheetsJson> {
  const sheets: Entries<Dict> = []

  Object.values(files)
    .flat(1)
    .forEach((fileObject) => {
      const file = xlsx.readFile(fileObject.filepath)
      file.SheetNames.forEach((sheetName) => {
        const sheet = file.Sheets[sheetName]

        const sheetJson = xlsx.utils.sheet_to_json(sheet)
        sheets.push([sheetName, sheetJson])
      })
    })

  const finalResult = await Promise.resolve(Object.fromEntries(sheets))

  return finalResult as TSheetsJson
}
