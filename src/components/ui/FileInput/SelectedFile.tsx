import { DocumentIcon } from "@/components/icons/DocumentIcon"
import { XIcon } from "@/components/icons/XIcon"
import { round } from "@/libs/abstract/utils"

type SelectedFileProps = {
  file: File | null
  onClear: () => void
}

export const SelectedFile: React.FC<SelectedFileProps> = ({
  file,
  onClear,
}) => {
  if (file === null) {
    return null
  }

  const { name, size } = file

  return (
    <div className="my-3 flex items-center justify-between border-gray-200 px-3">
      <div className="flex h-12 items-center gap-2">
        <div className="circle-icon">
          <DocumentIcon />
        </div>
        <span className="text-sm font-medium leading-none">{name}</span>
        <span className="text-hint pl-2 text-sm leading-none">
          {formatKiloBytes(size)}
        </span>
      </div>
      <button className="icon-button" onClick={onClear}>
        <XIcon />
      </button>
    </div>
  )
}

function formatKiloBytes(value: number): string {
  const kilobytes = round(value / 1000)
  return `${kilobytes} KB`
}
