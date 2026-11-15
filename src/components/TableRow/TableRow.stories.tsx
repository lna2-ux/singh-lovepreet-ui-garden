import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableRow } from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/Table/TableRow",
  component: TableRow,
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: "Row Data Cells",
  },
};
