export default {
  props: {
    stackedOnMobile: {
      type: Boolean,
      default: false,
    },
  },
  
  data() {
    return {
      email: "",
      success: false,
      loading: false,
      error: false
    }
  },

  methods: {
    emitSuccessStatus() {
      this.$emit('form-submitted', [this.success, this.error])
    }
  }
}