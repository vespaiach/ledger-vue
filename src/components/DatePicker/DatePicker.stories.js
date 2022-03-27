import DatePicker from './index.vue';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

const Template = (args) => ({
  components: { DatePicker },
  setup() {
    return { args };
  },
  template: '<DatePicker v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  paddding: 10,
  start: new Date(),
};
