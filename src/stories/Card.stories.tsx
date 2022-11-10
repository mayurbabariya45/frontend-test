import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Card from "../components/Card"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imageUrl: {
      defaultValue: "/static/CardMedia.png"
    },
    label: {
      defaultValue: "Flood zone 3"
    },
    checked: {
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Unchecked = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
  imageUrl: "/static/CardMedia.png",
  label: "Flood zone 3",
  checked: false,
  onClick: () => {}
}

export const Checked = Template.bind({})
Checked.args = {
  imageUrl: "/static/CardMedia.png",
  label: "Flood zone 3",
  checked: true
}
