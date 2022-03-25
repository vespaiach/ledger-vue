import Spinner from './Spinner.vue';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const Default = () => ({
  components: { Spinner },
  template: '<Spinner width="30" height="30" />',
});