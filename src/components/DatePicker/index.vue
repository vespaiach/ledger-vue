<script setup>
  import { nextTick, onMounted, onUpdated, ref } from 'vue';
  import { getFirstDateOfMonth, getMonthData, getMonthList } from './utils';
  import Month from './Month';

  const props = defineProps({
    start: Date,
  });

  const padding = 10;
  const lastPos = ref(0);
  const containerWidthRef = ref(300);
  const containerRef = ref(null);
  const months = ref(getMonthList(getFirstDateOfMonth(props.start), padding));

  const listenToScrollEvent = () => {
    lastPos.value = containerRef.value.scrollLeft;
    containerRef.value.addEventListener('scroll', handleScroll);
  };

  const scroll = (value, newPos) => {
    containerRef.value.removeEventListener('scroll', handleScroll);

    months.value = value;
    nextTick(() => {
      containerRef.value.scrollTo({ left: newPos });
      nextTick(listenToScrollEvent);
    });
  };

  const handleScroll = (evt) => {
    const width = containerWidthRef.value;
    const currenPos = evt.currentTarget.scrollLeft;
    const offset = currenPos - lastPos.value;
    const delta = Math.abs(offset);

    if (delta <= width) return;

    const numOfMonth = Math.floor(delta / width) + (delta % width === 0 ? 0 : 1);

    if (offset < 0) scrollLeft(numOfMonth, currenPos + numOfMonth * width);
    else scrollRight(numOfMonth, currenPos - numOfMonth * width);
  };

  const scrollLeft = (num, newPos) => {
    const change = [];

    for (let i = num; i > 0; i--) {
      const copy = new Date(months.value[0].year, months.value[0].month, 1, 0, 0, 0, 0);
      copy.setMonth(copy.getMonth() - i);
      change.push(getMonthData(copy));
    }

    scroll(
      num < padding * 2 + 1 ? change.concat(months.value.slice(0, months.value.length - change.length)) : change,
      newPos
    );
  };

  const scrollRight = (num, newPos) => {
    const change = [];
    const lastMonthData = months.value[months.value.length - 1];

    for (let i = 1; i <= num; i++) {
      const copy = new Date(lastMonthData.year, lastMonthData.month, 1, 0, 0, 0, 0);
      copy.setMonth(copy.getMonth() + i);
      change.push(getMonthData(copy));
    }

    scroll(num < padding * 2 + 1 ? months.value.slice(num, months.value.length).concat(change) : change, newPos);
  };

  onMounted(() => {
    const el = containerRef.value.querySelector('div.month');
    const rect = el.getBoundingClientRect();

    containerWidthRef.value = rect.width;
    document.getElementById(`m${props.start.getMonth()}${props.start.getFullYear()}`).scrollIntoView(true);

    nextTick(listenToScrollEvent);
  });

  onUpdated(() => {
    // console.log(props.data, months.value);
  });
</script>

<template>
  <div class="container" ref="containerRef">
    <month v-for="m in months" :key="`m${m.month}${m.year}`" v-bind="m" />
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;

    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  .container::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
</style>
