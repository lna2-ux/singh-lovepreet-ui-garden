import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/Table/TableCell",
  component: TableCell,
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: "Sample Table Cell Data",
  },
};
