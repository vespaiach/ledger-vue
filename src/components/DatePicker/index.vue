<script setup>
  import { nextTick, onMounted, onUpdated, reactive, ref, watch } from 'vue';
  import { getFirstDateOfMonth, getMonthData, getMonthList } from './utils';
  import Month from './Month.vue';

  const props = defineProps({
    start: Date,
  });

  const padding = 10;
  const monthBoxWidthRef = ref(385);
  const containerRef = ref(null);
  const lastScrollLeftRef = ref(null);
  let observer;

  const months = ref(getMonthList(getFirstDateOfMonth(props.start), padding));
  months.value.forEach((m, i) => {
    m.left = i * 385;
  });

  const listenToScrollEvent = () => {
    containerRef.value.addEventListener('scroll', handleScroll);
  };

  const scroll = (value) => {
    containerRef.value.removeEventListener('scroll', handleScroll);

    months.value = value;
    containerRef.value.scrollLeft = lastScrollLeftRef.value;

    nextTick(listenToScrollEvent);
  };

  const handleScroll = (evt) => {
    const width = monthBoxWidthRef.value;
    const scrollLeft = evt.currentTarget.scrollLeft;
    const offset = scrollLeft - lastScrollLeftRef.value;
    const delta = Math.abs(offset);

    if (delta <= width) return;

    const numOfMonth = Math.floor(delta / width) + (delta % width === 0 ? 0 : 1);

    if (offset < 0) scrollRight(numOfMonth, delta);
    else scrollLeft(numOfMonth, delta);
  };

  const scrollLeft = (num, delta) => {
    const change = [];

    for (let i = num; i > 0; i--) {
      const copy = new Date(months.value[0].year, months.value[0].month, 1, 0, 0, 0, 0);
      copy.setMonth(copy.getMonth() - i);
      change.push(getMonthData(copy));
    }

    scroll(
      num < padding * 2 + 1 ? change.concat(months.value.slice(0, months.value.length - change.length)) : change,
      numOfMonth
    );
  };

  const scrollRight = (num, delta) => {
    const change = [];
    const firstMonthData = months.value[0];

    for (let i = num; i > 0; i--) {
      const copy = new Date(firstMonthData.year, firstMonthData.month, 1, 0, 0, 0, 0);
      copy.setMonth(copy.getMonth() - i);

      const monthData = getMonthData(copy);
      monthData.left = firstMonthData.left - i * 385 + delta;

      change.push(monthData);
    }

    scroll(
      change.concat(
        months.value.slice(0, months.value.length - num).map((m) => {
          m.left += delta;
          return m;
        })
      )
    );
  };

  const leftMostIndex = ref(Number.MAX_VALUE);

  const callback = (entries) => {
    console.log(entries);
    let left = Number.MAX_VALUE;

    for (let entry of entries) {
      if (entry.isIntersecting && entry.boundingClientRect.left >= 0 && entry.boundingClientRect.left < left) {
        leftMostIndex.value = entry.target.dataset['index'];
        left = entry.boundingClientRect.left;
        console.log(entry.boundingClientRect);
      }
    }
  };

  watch(leftMostIndex, (v) => {
    console.log(v);
  });

  onMounted(() => {
    document.getElementById(`m${props.start.getMonth()}${props.start.getFullYear()}`).scrollIntoView(true);
    lastScrollLeftRef.value = containerRef.value.scrollLeft;

    observer = new IntersectionObserver(callback, {
      root: containerRef.value,
      rootMargin: '0px',
      threshold: 1,
    });

    nextTick(() => {
      months.value.forEach((m) => {
        observer.observe(document.getElementById(`m${m.month}${m.year}`));
      });
    });

    // nextTick(listenToScrollEvent);
  });

  onUpdated(() => {
    // console.log(props.data, months.value);
  });
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="sheet">
      <month v-for="(m, i) in months" :key="`m${m.month}${m.year}`" v-bind="m" :index="i" />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;

    overflow-x: scroll;
  }

  .sheet {
    position: relative;
    width: 8085px;
    min-height: 385px;
  }
</style>
