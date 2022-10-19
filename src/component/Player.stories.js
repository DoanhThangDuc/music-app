import Player from "./Player";
export default {
  title: "Player",
  component: Player,
};

const Template = (args) => <Player {...args} />;

export const Default = Template.bind({});
