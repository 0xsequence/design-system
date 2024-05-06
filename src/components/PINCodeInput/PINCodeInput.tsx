import { createRef, Fragment, useEffect, useMemo } from 'react'

import { Box } from '../Box'

import * as styles from './styles.css'

interface PINCodeInputProps {
  digits: number
  group?: number
  onChange: (code: string[]) => void
  onConfirm?: () => void
  disabled?: boolean
  value: string[]
}

export const PINCodeInput = (props: PINCodeInputProps) => {
  const {
    value,
    digits = 6,
    group,
    onChange,
    onConfirm,
    disabled = false,
  } = props

  const inputRefs = useMemo(() => {
    return range(0, digits).map(() => createRef<HTMLInputElement>())
  }, [digits])

  useEffect(() => {
    inputRefs[0]?.current?.focus()
  }, [inputRefs])

  const handleChange = (idx: number, character: string) => {
    if (!/^\d$/.test(character)) {
      character = ''
    }

    const curr = [...value]
    curr[idx] = character

    if (character !== '') {
      inputRefs[idx + 1]?.current?.focus()
    }

    onChange(curr)
  }

  const isValid = () => value.join('').length === digits

  const handleKeyDown = (
    idx: number,
    ev: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const currentRef = inputRefs[idx].current
    const prevRef = inputRefs[idx - 1]?.current
    const nextRef = inputRefs[idx + 1]?.current

    switch (ev.key) {
      case 'Backspace':
        ev.preventDefault()

        if (currentRef) {
          currentRef.value = ''
          handleChange(idx, '')
        }

        prevRef?.focus()
        break

      case 'ArrowLeft':
        ev.preventDefault()
        prevRef?.focus()
        break

      case 'ArrowRight':
        ev.preventDefault()
        nextRef?.focus()
        break

      case 'Enter':
        ev.preventDefault()
        if (isValid()) {
          onConfirm?.()
        }
        break

      default:
        // Fire an onChange event even if the key pressed is the same as the current value
        if (currentRef?.value === ev.key) {
          ev.preventDefault()
          handleChange(idx, ev.key)
        }
    }
  }

  const handlePaste = (
    idx: number,
    ev: React.ClipboardEvent<HTMLInputElement>
  ) => {
    const pasted = ev.clipboardData.getData('text/plain')
    const filtered = pasted.replace(/\D/g, '')
    const re = new RegExp(`^\\d{${digits}}$`)

    if (re.test(filtered)) {
      inputRefs[0]?.current?.focus()

      onChange(filtered.split(''))

      setTimeout(() => {
        inputRefs[inputRefs.length - 1]?.current?.focus()
      })
    }
  }

  return (
    <Box gap="2">
      {range(0, digits).map(idx => (
        <Fragment key={idx}>
          {!!group && idx > 0 && idx % group === 0 && <span />}
          <Box
            as="input"
            className={styles.digitInput}
            value={value[idx] || ''}
            ref={inputRefs[idx]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            disabled={disabled}
            onFocus={ev => ev.target.select()}
            onPaste={ev => handlePaste(idx, ev)}
            onChange={ev => handleChange(idx, ev.target.value)}
            onKeyDown={ev => {
              handleKeyDown(idx, ev)
            }}
          />
        </Fragment>
      ))}
    </Box>
  )
}

export const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (v, k) => k + start)