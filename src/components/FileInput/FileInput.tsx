import { ChangeEvent, forwardRef, useRef, useState } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { IconButton } from '~/components/IconButton'
import { Text } from '~/components/Text'
import { useCombinedRefs } from '~/hooks/useCombinedRefs'
import { CloseIcon } from '~/icons'
import { cn } from '~/utils'

import { textVariants } from '../Text'

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
      >
        <div className="w-full min-w-0">
          <div
            className={cn(
              textVariants({ variant: 'normal' }),
              'inline-flex items-center flex-row justify-start min-w-full p-4 relative h-[52px]',
              'border border-dashed border-border-normal rounded-xl',
              '[&:has(:disabled)]:cursor-default [&:has(:disabled)]:opacity-50',
              'focus-within:opacity-100 focus-within:ring-2 focus-within:ring-border-focus focus-within:ring-inset focus-within:border-transparent',
              fileData ? 'justify-between' : 'justify-start',
              fileData ? 'text-primary' : 'text-muted',
              className
            )}
          >
            {fileData ? (
              <div className="flex flex-row gap-2 items-center min-w-0">
                <Text ellipsis>{fileData.name}</Text>
                <Text color="muted" variant="xsmall" nowrap>
                  {fileData.size.toFixed(2)} kb
                </Text>
              </div>
            ) : (
              <Text ellipsis>{placeholder}</Text>
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
                className="cursor-pointer z-10"
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
