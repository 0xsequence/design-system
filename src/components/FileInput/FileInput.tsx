import { forwardRef, useRef, useState, type ChangeEvent } from 'react'

import { Field, type FieldProps } from '~/components/Field/index.js'
import { IconButton } from '~/components/IconButton/index.js'
import { Text } from '~/components/Text/index.js'
import { useCombinedRefs } from '~/hooks/useCombinedRefs.js'
import { CloseIcon } from '~/icons/index.js'
import { focusRingVariants } from '~/styles.js'
import { cn } from '~/utils/classnames.js'

import { textVariants } from '../Text/index.js'

const MIME_TYPES = {
  png: '.png,image/png',
  jpeg: '.jpeg,image/jpeg',
  jpg: '.jpg,image/jpg',
  images: 'image/*, video/*',
  pdf: '.pdf,application/pdf',
  mp4: '.mp4,video/mp4',
  csv: '.csv,text/csv',
  json: '.json,application/json',
  gif: '.gif,image/gif',
  webp: '.webp,image/webp',
  svg: '.svg,image/svg+xml',
}

type AllowedMimeTypes = keyof typeof MIME_TYPES

type FileData = {
  name: string
  size: number
  extension: string
}

export interface FileInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'type' | 'onChange'
    >,
    FieldProps {
  name: string
  validExtensions: AllowedMimeTypes[]
  onValueChange?: (value: File | null) => void
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    const {
      description,
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      name,
      onValueChange,
      placeholder = 'Upload a file',
      validExtensions,
      className,
      error,
      trailDescription,
      ...rest
    } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const combinedRef = useCombinedRefs(inputRef, ref)
    const [fileData, setFileData] = useState<FileData | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const filelist = e.currentTarget.files as FileList
      if (!filelist || !filelist[0]) {
        return
      }

      const file = filelist[0]
      const filename = file.name
      const filesize = file.size / 1000

      setFileData({
        name: filename,
        size: filesize,
        extension: filename.split('.').pop() ?? '',
      })

      onValueChange?.(file)
    }

    const accept = validExtensions.map(ext => MIME_TYPES[ext]).join(',')

    return (
      <Field
        description={description}
        disabled={disabled}
        id={id ?? name}
        label={label}
        labelLocation={labelLocation}
        className="grid"
        error={error}
        trailDescription={trailDescription}
      >
        <div className="w-full min-w-0">
          <div
            className={cn(
              textVariants({ variant: 'normal' }),
              'inline-flex items-center flex-row justify-start w-[200px] min-w-full p-4 relative h-[52px]',
              'rounded-xl bg-background-input',
              '[&:has(:disabled)]:cursor-default [&:has(:disabled)]:opacity-50',
              fileData
                ? 'justify-between text-primary'
                : 'justify-start text-muted',
              focusRingVariants({ variant: 'within', error: !!error }),
              // inputBorderStyle,
              'border border-dashed border-border-normal hover:not-disabled:not-focus-within:border-border-hover focus-within:[&:has(:focus-visible)]:border-none',
              className
            )}
          >
            {fileData ? (
              <div className="flex flex-row gap-2 items-center min-w-0">
                <Text ellipsis asChild>
                  <p>{fileData.name}</p>
                </Text>
                <Text color="muted" variant="xsmall" nowrap>
                  {fileData.size.toFixed(2)} kb
                </Text>
              </div>
            ) : (
              <Text ellipsis asChild>
                <p>{placeholder}</p>
              </Text>
            )}

            <input
              accept={accept}
              className="absolute inset-0 opacity-0 cursor-pointer focus:outline-hidden"
              disabled={disabled}
              id={id ?? name}
              name={name}
              onChange={handleChange}
              ref={combinedRef}
              type="file"
              {...rest}
            />

            {fileData && (
              <IconButton
                className="cursor-pointer z-10 ml-1"
                icon={CloseIcon}
                size="xs"
                onClick={ev => {
                  ev.preventDefault()
                  ev.stopPropagation()

                  if (inputRef.current?.value) {
                    inputRef.current.value = ''
                  }

                  onValueChange?.(null)
                  setFileData(null)
                }}
              />
            )}
          </div>
        </div>
      </Field>
    )
  }
)
