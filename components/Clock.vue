<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  timezone: {
    type: String,
    required: true,
  },
})

const hourHand = ref(null)
const minuteHand = ref(null)
const secondHand = ref(null)
const isAM = ref(false)

let intervalId

function getTimePartsInZone(timezone) {
  const now = new Date()
  const options = {
    timeZone: timezone,
    hour12: true, // Changed to true to get AM/PM
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  const timeString = now.toLocaleTimeString('en-US', options)
  const [time, period] = timeString.split(' ')
  const [hourStr, minuteStr, secondStr] = time.split(':')
  
  return {
    hour: parseInt(hourStr, 10),
    minute: parseInt(minuteStr, 10),
    second: parseInt(secondStr, 10),
    isAM: period === 'AM'
  }
}

function updateClock() {
  const { hour, minute, second, isAM: newIsAM } = getTimePartsInZone(props.timezone)
  
  // Update AM/PM state
  isAM.value = newIsAM

  const hourAngle = (hour % 12 + minute / 60) * 30
  const minuteAngle = (minute + second / 60) * 6
  const secondAngle = second * 6

  hourHand.value.setAttribute('transform', `rotate(${hourAngle}, 50, 50)`)
  minuteHand.value.setAttribute('transform', `rotate(${minuteAngle}, 50, 50)`)
  secondHand.value.setAttribute('transform', `rotate(${secondAngle}, 50, 50)`)
}

// Computed class based on AM/PM
const clockClass = computed(() => ({
  'clock': true,
  'clock--am': isAM.value,
  'clock--pm': !isAM.value
}))

onMounted(() => {
  updateClock()
  intervalId = setInterval(updateClock, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <svg
    ref="svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    class="clock"
    :class="clockClass"
  >
    <!-- Clock border -->
    <circle cx="50" cy="50" r="49" stroke="white" stroke-width="0.5" fill="none" style="display: none;" />

    <!-- Hour ticks -->
    <g v-for="i in 12" :key="i" :transform="`rotate(${i * 30}, 50, 50)`">
      <line x1="50" y1="5" x2="50" y2="15" stroke="white" stroke-width="0.5" />
    </g>

    <!-- Hour hand -->
    <line ref="hourHand" x1="50" y1="50" x2="50" y2="30" stroke="white" stroke-width="0.5" />
    <!-- Minute hand -->
    <line ref="minuteHand" x1="50" y1="50" x2="50" y2="20" stroke="white" stroke-width="0.5" />
    <!-- Second hand -->
    <line ref="secondHand" x1="50" y1="50" x2="50" y2="15" stroke="white" stroke-width="0.5" style="display: none;"/>
  </svg>
</template>

<style scoped>
.clock {
  width: 100px;
  height: 100px;
}
</style>
