import { Meta, StoryObj } from "@storybook/react";
import { Player } from "../index";

export default {
  title: "Components/Player",
  component: Player,
} as Meta<typeof Player>;

type Story = StoryObj<typeof Player>;

export const Default: Story = {};
