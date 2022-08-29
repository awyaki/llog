import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu } from "~/components";

export default {
  title: "Menu",
  component: Menu,
  decorators: [(story) => <div>{story()}</div>],
} as ComponentMeta<typeof Menu>;

export const Primary: ComponentStory<typeof Menu> = () => <Menu />;
