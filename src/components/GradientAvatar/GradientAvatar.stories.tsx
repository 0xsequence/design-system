import { StoryObj, Meta } from '@storybook/react'
import { ethers } from 'ethers'

import { Text } from '~/components/Text'

import { GradientAvatar } from './GradientAvatar'

const mnemonic =
  'bulb cute board file buddy subway memory exercise busy repair foam item'

export default {
  title: 'Components/GradientAvatar',
  component: GradientAvatar,
} as Meta<typeof GradientAvatar>

type Story = StoryObj<typeof GradientAvatar>

export const Default: Story = {
  args: {
    address: '0x1234567890123456789012345678901234567890',
  },
}

const ROWS = 3
const COLS = 8

// Rows and columns of wallet addresses to test including the initial set of addresses to ensure consistency
const rows: string[][] = [
  [
    '0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9',
    '0x73F8E47dEe63002378E047fA74e6DFb24F88f496',
    '0x9Cb019C2FfcD9E9BB83e269625a170179Ff3ECD0',
    '0x9b436D9599FAc498e1e0Ab4D48cDFC72922a6F1e',
    '0x9aB58Bda3eeCbF391a17592ed7626727b922a18f',
    '0x468E8e29F6cfb0F6b7ff10ec6A1AB516ec849c04',
    '0x450cB9fbB2D44d166AACA1f6cDb1dBd9Ff168e4C',
    '0x88cc3E896C4C178AB98333dCD29C33d2cc2102A8',
  ],
  [
    '0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8Bx',
    '0x73F8E47dEe63002378E047fA74e6DFb24F88f49x',
    '0x9Cb019C2FfcD9E9BB83e269625a170179Ff3ECDx',
    '0x9b436D9599FAc498e1e0Ab4D48cDFC72922a6F1x',
    '0x9aB58Bda3eeCbF391a17592ed7626727b922a18x',
    '0x468E8e29F6cfb0F6b7ff10ec6A1AB516ec849c0x',
    '0x450cB9fbB2D44d166AACA1f6cDb1dBd9Ff168e4x',
    '0x88cc3E896C4C178AB98333dCD29C33d2cc2102Ax',
  ],
]

for (let row = 0; row < ROWS; row++) {
  const cols = []
  for (let col = 0; col < COLS; col++) {
    cols.push(
      ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/${row}'/${col}/0`).address
    )
  }
  rows.push(cols)
}

export const Multiple = () => {
  return (
    <>
      <Text variant="normal" color="text100" fontWeight="bold" asChild>
        <div>SVG</div>
      </Text>

      <div className="flex flex-col gap-4">
        {rows.map((cols, idx) => (
          <div className="flex gap-4" key={idx}>
            {cols.map(address => (
              <GradientAvatar key={address} address={address} size="xl" />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
