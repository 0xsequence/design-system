import { ChangeEvent, ElementType, forwardRef, useState } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'
import { Text } from '~/components/Text'

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
  disabled?: boolean
  name: string
  processing?: boolean
  validExtensions: AllowedMimeTypes[]
  value?: string
  onValueChange?: (value: File) => void
}

export const FileInput: PolymorphicComponent<FileInputProps, 'input'> =
  forwardRef(
    <T extends ElementType>(
      {
        disabled = false,
        id,
        label = '',
        labelLocation = 'hidden',
        name,
        onValueChange,
        processing = false,
        validExtensions,
        ...rest
      }: PolymorphicProps<FileInputProps, T>,
      ref: PolymorphicRef<T>
    ) => {
      const [fileData, setFileData] = useState<FileData>()

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const filelist = e.target.files as FileList
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
          forId={id ?? name}
          label={label}
          labelLocation={labelLocation}
        >
          <Box
            color={fileData ? 'textBody' : 'textFaded'}
            className={styles.wrap}
          >
            {fileData ? (
              <Box flexDirection="row" gap="2" alignItems="baseline">
                <Text>{fileData.name}</Text>
                <Text color="textFaded" variant="xsmall">
                  {fileData.size.toFixed(2)} kb
                </Text>
              </Box>
            ) : (
              <Text>Upload a file</Text>
            )}

            <Box
              accept={accept}
              as="input"
              className={styles.input}
              disabled={disabled || processing}
              id={id ?? name}
              name={name}
              ref={ref}
              type="file"
              onChange={handleChange}
              {...rest}
            />
          </Box>
        </LabelledField>
      )
    }
  )
