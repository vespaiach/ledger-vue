<script setup>
  import { getMonthDates, MonthNames, DayNames } from './utils';

  const props = defineProps({
    startDate: Date,
    year: Number,
    month: Number,
    left: Number,
  });

  const dates = getMonthDates(props.startDate);
</script>

<template>
  <div class="month" :id="`m${month}${year}`" :style="{ left: `${left}px` }">
    <div class="header">{{ `${MonthNames[month]} ${year}` }}</div>
    <div class="days" v-for="day in DayNames" :key="day">{{ day }}</div>
    <template v-for="date in dates" :key="`${date.getMonth()}-${date.getFullYear()}`">
      <button v-if="date.getMonth() === month" class="day clickake">{{ date.getDate() }}</button>
      <div v-else class="day">{{ date.getDate() }}</div>
    </template>
  </div>
</template>

<style scoped>
  .month {
    position: absolute;
    top: 0px;
    display: grid;
    box-sizing: border-box;
    grid: auto-flow / repeat(7, 1fr);
    width: 385px;
  }

  .header {
    box-sizing: border-box;
    padding: 8px 12px;
    grid-column: 1 / 8;
  }

  .days {
    padding: 16px 12px;
    font-weight: 700;
  }

  .day {
    box-sizing: border-box;
    text-align: left;
    padding: 12px 0 12px 12px;
    cursor: crosshair;
  }

  .day.clickake {
    cursor: pointer;
  }

  .clickake {
    border: none;
    background: none;
  }
</style>
