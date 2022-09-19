import Vue from 'vue'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]


Vue.filter('formttedDate', value => {
  if (!value) return ''
  const date = new Date(value)
  const dayOfMonth = date.getDate()
  const year = date.getFullYear()
  const month = months[date.getMonth()]
  return `${month} ${dayOfMonth}, ${year}`
})

Vue.filter('formttedDate2', value => {
  if (!value) return ''
  const date = new Date(value)
  const dayOfMonth = date.getDate()
  const day = days[date.getDay()]
  const year = date.getFullYear()
  const month = months[date.getMonth()]
  return `${day}, ${month} ${dayOfMonth}, ${year}`
})