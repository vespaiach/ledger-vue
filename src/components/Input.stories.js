import Input from './Input.vue';
import Calendar from './icons/Calendar.vue';

export default {
  title: 'Input',
  component: Input,
};

export const InputNormalState = () => ({
  components: { Input },
  template: '<Input caption="input caption" />',
});

export const InputDisabledState = () => ({
  components: { Input },
  template: '<Input disabled="true" caption="input caption" />',
});

export const InputErrorState = () => ({
  components: { Input },
  template: '<Input error="something went wrong" caption="input caption" />',
});

export const InputWithIcon = () => ({
  components: { Input, Calendar },
  template: `<Input caption="input caption">
    <div class="addsin">
      <Calendar />
    </div>
  </Input>`,
});
