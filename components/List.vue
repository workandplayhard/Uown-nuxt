<template>
  <div>
      <h1 class="text-4xl md:text-5xl font-family-bold mb-2">{{title}}</h1>
      <ul class="space-y-4 text-xl" :class="ulClasses">
        <li v-for="(e, i) in list" :key="i">{{e.li}}</li>
      </ul>
      <btn v-if="btnOptions" class="mt-6 text-xl" :text="btnOptions.text" :link="btnOptions.link" :outerLink='btnOptions.outerLink' />
    </div>
</template>

<script>
import btn from '../components/BtnRounded'

export default {
  components: {
    btn
  },

  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    btnOptions: {
      type: Object
    },
    liDisc: {
      type: Boolean
    }
  },

  computed: {
    ulClasses() {
      return {
        "list-disc": this.liDisc,
        "pl-5": this.liDisc
      };
    }
  }
}
</script>

<style>

</style>