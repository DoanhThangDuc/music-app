import Song from "./Song";

export default {
  title: "Song",
  component: Song,
};

const Template = (args) => <Song {...args} />;

export const Default = Template.bind({});
export const MultySongs = Template.bind({});
MultySongs.args = {
  songs: [
    {
      id: 0,
      name: "See you here",
      singer: "Allan",
    },
    {
      id: 1,
      name: "Nothing",
      singer: "Meo",
    },
  ],
};
