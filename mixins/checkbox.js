export default {
   model: {
      prop: "checked",
      event: "change",
   },

   props: {
      checked: {
         type: [Array, Boolean],
         default: false,
      },
      value: {
         default: null,
      },
      idProp: {
         type: [String, Number],
         required: true,
      },
      label: {
         type: String,
         required: true,
      },
   },

   computed: {
      proxyChecked: {
         get() {
            return this.checked;
         },
         set(val) {
            this.$emit("change", val);
         },
      },
   },
}