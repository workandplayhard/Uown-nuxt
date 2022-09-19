export default {
   model: {
      prop: "checked",
      event: "change",
   },

   props: {
      checked: {
         type: [Boolean, String],
         required: true,
      },
      value: {
         type: String,
      },
   },

   computed: {
      checked1: {
         get() {
            return this.checked
         },
         set(checked) {
            this.$emit('change', checked)
         }
      }
   }
}