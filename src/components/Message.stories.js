import Message from './Message.vue';

export default {
  title: 'Message',
  component: Message,
};

const Template = (args) => ({
  components: { Message },
  setup() {
    return { args };
  },
  template: `<Message v-bind="args" />`,
});

export const Success = Template.bind({});
Success.args = {
  message: { message: 'I can fly', timeout: 3000, type: 'success' },
};

export const Error = Template.bind({});
Error.args = {
  message: { message: `I can't fly`, timeout: 3000, type: 'error' },
};

export const Notification = Template.bind({});
Notification.args = {
  message: { message: `I am normal`, timeout: 3000, type: 'notification' },
};
