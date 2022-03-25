import Input from './Input.vue';
import Calendar from './icons/Calendar.vue';

export default {
  title: 'Textarea',
  component: Input,
};

export const TextareaNormalState = () => ({
  components: { Input },
  template: '<Input type="textarea" caption="input caption" />',
});

export const TextareaDisabledState = () => ({
  components: { Input },
  template: '<Input type="textarea" disabled caption="input caption" />',
});

export const TextareaErrorState = () => ({
  components: { Input },
  template: '<Input type="textarea" error="something went wrong" caption="input caption" />',
});

export const TextareaWithIcon = () => ({
  components: { Input, Calendar },
  template: `<Input type="textarea" caption="input caption">
    <div class="addsin">
      <Calendar />
    </div>
  </Input>`,
});
