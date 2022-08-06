export function getInputElement(
  formElement: HTMLFormElement,
  inputIndex: number
): HTMLInputElement {
  const inputElement = formElement.item(inputIndex) as HTMLInputElement
  return inputElement
}

export function getInputFiles(inputElement: HTMLInputElement): FileList {
  const inputValue = inputElement.files || new FileList()
  return inputValue
}

export function getInputFile(
  inputElement: HTMLInputElement,
  fileIndex: number
): File | null {
  const fileList = getInputFiles(inputElement)
  const file = fileIndex < fileList.length ? fileList[fileIndex] : null
  return file
}
