import { Meta, StoryObj } from '@storybook/react'
import Twitter from '.'

const meta: Meta<typeof Twitter> = {
  title: 'components/Twitter',
  component: Twitter
}
export default meta

type Story = StoryObj<typeof Twitter>

export const Normal: Story = {
  args: {}
}