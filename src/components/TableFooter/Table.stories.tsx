import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
  title: "Components/Table/TableFooter",
  component: TableFooter,
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: "Footer Content",
  },
};
