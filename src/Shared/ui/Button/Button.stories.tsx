import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import '../../../../node_modules/index.css'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'danger', 'ghost'],
			description: 'Button variant style',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Button size',
		},
		isLoading: {
			control: 'boolean',
			description: 'Loading state',
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width button',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
	},
}

export default meta
type Story = StoryObj<typeof Button>

// Default story
export const Primary: Story = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
	},
}

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
	},
}

export const Danger: Story = {
	args: {
		children: 'Danger Button',
		variant: 'danger',
	},
}

export const Ghost: Story = {
	args: {
		children: 'Ghost Button',
		variant: 'ghost',
	},
}

// Sizes
export const Small: Story = {
	args: {
		children: 'Small Button',
		size: 'sm',
	},
}

export const Medium: Story = {
	args: {
		children: 'Medium Button',
		size: 'md',
	},
}

export const Large: Story = {
	args: {
		children: 'Large Button',
		size: 'lg',
	},
}

// States
export const Loading: Story = {
	args: {
		children: 'Loading Button',
		isLoading: true,
	},
}

export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
}

export const FullWidth: Story = {
	args: {
		children: 'Full Width Button',
		fullWidth: true,
	},
}

// With onClick
export const WithClick: Story = {
	args: {
		children: 'Click Me',
		onClick: () => alert('Button clicked!'),
	},
}

// Combinations
export const LargeDanger: Story = {
	args: {
		children: 'Delete Account',
		variant: 'danger',
		size: 'lg',
	},
}

export const SmallSecondary: Story = {
	args: {
		children: 'Cancel',
		variant: 'secondary',
		size: 'sm',
	},
}
