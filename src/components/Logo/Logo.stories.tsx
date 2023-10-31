import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

const meta: Meta<typeof Logo> = {
  title: 'components/Logo',
  component: Logo
}
export default meta

type Story = StoryObj<typeof Logo>

export const Normal: Story = {
  args: {
    medium: true
  }
}