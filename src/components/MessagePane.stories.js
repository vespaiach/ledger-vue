import Message from './Message.vue';
import MessagePane from './MessagePane.vue';

export default {
  title: 'MessagePane',
  component: MessagePane,
  argTypes: { remove: { action: 'remove' } },
};

const messages = [
  { id: `item1`, message: 'I can fly', timeout: 2000, type: 'notification' },
  { id: `item2`, message: 'I can fly', timeout: 2000, type: 'success' },
  { id: `item3`, message: 'I can fly', timeout: 2000, type: 'error' },
];

const Template = (args) => {
  return {
    components: { Message, MessagePane },
    setup() {
      return { args };
    },
    template: `<message-pane v-bind="args" />`,
  };
};

export const FlyIn = Template.bind({});
FlyIn.args = { messages };
