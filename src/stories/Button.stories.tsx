import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "../components/Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: "select",
      defaultValue: "primary",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"]
    },
    variant: {
      control: "select",
      defaultValue: "contained",
      options: ["contained", "outlined", "text"]
    },
    size: {
      control: "select",
      defaultValue: "medium",
      options: ["small", "medium", "large"]
    }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  variant: "contained",
  label: "Button"
}

export const Large = Template.bind({})
Large.args = {
  color: "primary",
  variant: "contained",
  size: "large",
  label: "Button"
}

export const Medium = Template.bind({})
Medium.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
  label: "Button"
}
export const Small = Template.bind({})
Small.args = {
  color: "primary",
  variant: "contained",
  size: "small",
  label: "Button"
}
