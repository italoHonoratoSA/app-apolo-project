import { Meta, StoryObj } from '@storybook/react'
import Telegram from '.'

const meta: Meta<typeof Telegram> = {
  title: 'components/Telegram',
  component: Telegram
}
export default meta

type Story = StoryObj<typeof Telegram>

export const Normal: Story = {
  args: {}
}