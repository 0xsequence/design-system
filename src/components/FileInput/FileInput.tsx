import { ChangeEvent, ElementType, forwardRef, useRef, useState } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { IconButton } from '~/components/IconButton'
import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'
import { Text } from '~/components/Text'
import { useCombinedRefs } from '~/hooks/useCombinedRefs'
import { CloseIcon } from '~/icons'

import * as styles from './styles.css'

const MIME_TYPES = {
  png: '.png,image/png',
  jpeg: '.jpeg,image/jpeg',
  jpg: '.jpg,image/jpg',
  images: 'image/*',
  pdf: '.pdf,application/pdf',
}

type AllowedMimeTypes = keyof typeof MIME_TYPES

type FileData = {
  name: string
  size: number
  extension: string
}

export type FileInputProps = (HasLabel | HiddenLabel) & {
  description?: string
  disabled?: boolean
  name: string
  processing?: boolean
  validExtensions: AllowedMimeTypes[]
  value?: File
  onValueChange?: (value: File | null) => void
}

export const FileInput: PolymorphicComponent<FileInputProps, 'input'> =
  forwardRef(
    <T extends ElementType>(
      {
        description,
        disabled = false,
        id,
        label = '',
        labelLocation = 'hidden',
        name,
        onValueChange,
        placeholder = 'Upload a file',
        processing = false,
        validExtensions,
        ...rest
      }: PolymorphicProps<FileInputProps, T>,
      ref: PolymorphicRef<T>
    ) => {
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
        <LabelledField
          description={description}
          disabled={disabled}
          display="grid"
          forId={id ?? name}
          label={label}
          labelLocation={labelLocation}
        >
          <Box width="full">
            <Box
              justifyContent={fileData ? 'space-between' : 'flex-start'}
              color={fileData ? 'text100' : 'text50'}
              className={styles.wrap}
            >
              {fileData ? (
                <Box flexDirection="row" gap="2" alignItems="baseline">
                  <Text>{fileData.name}</Text>
                  <Text color="text50" variant="xsmall">
                    {fileData.size.toFixed(2)} kb
                  </Text>
                </Box>
              ) : (
                <Text>{placeholder}</Text>
              )}

              <Box
                accept={accept}
                as="input"
                className={styles.input}
                cursor={fileData ? 'text' : 'pointer'}
                disabled={disabled || processing || !!fileData}
                id={id ?? name}
                name={name}
                onChange={handleChange}
                ref={combinedRef}
                type="file"
                {...rest}
              />

              {fileData && (
                <IconButton
                  cursor="pointer"
                  icon={CloseIcon}
                  size="xs"
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()

                    inputRef.current?.value && (inputRef.current.value = '')

                    onValueChange?.(null)
                    setFileData(null)
                  }}
                  zIndex="10"
                />
              )}
            </Box>
          </Box>
        </LabelledField>
      )
    }
  )
