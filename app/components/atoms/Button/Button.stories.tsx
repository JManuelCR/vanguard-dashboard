import type {Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from './Button'
import { title } from "process"
import { Component } from "react"


const meta = {
    title: "Atoms/Button",
    component: Button,
    args: {
        children:"Click me",
        size: 'md'
    },
    argTypes: {
        children: { control: 'text' },
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg", "full"]
        }
    }
} satisfies Meta<typeof Button>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args:{
        size: "sm",
        children: "Accept"
    }
}