import Button from './Button.vue';
import Calendar from './icons/Calendar.vue';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  caption: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Normal.args,
  disabled: true,
};


export const Loading = Template.bind({});
Loading.args = {
  ...Normal.args,
  loading: true,
};

export const ButtonWithIcon = () => ({
  components: { Button, Calendar },
  template: `<Button caption="button">
    <Calendar />
  </Button>`,
});

export const BoxlessButton = () => ({
  components: { Button, Calendar },
  template: `<Button box-less>
    <Calendar />
  </Button>`,
});
