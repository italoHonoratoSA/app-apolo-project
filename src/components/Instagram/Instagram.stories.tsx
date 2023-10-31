import { Meta, StoryObj } from '@storybook/react'
import Instagram from '.'

const meta: Meta<typeof Instagram> = {
  title: 'components/Instagram',
  component: Instagram
}
export default meta

type Story = StoryObj<typeof Instagram>

export const Normal: Story = {
  args: {}
}