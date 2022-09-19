<template>
  <div class="main border">
    <div class="flex divide-x">
      <button
        v-for="(content, i) in contentList"
        :key="content.id"
        class="w-full bg-white sm:text-2xl py-2 px-3 font-family-bold focus:outline-none"
        :class="{ active: currentTab == i }"
        @click="currentTab = content.id"
      >{{content.btnText}}</button>
    </div>
    <div class="p-6">
      <p
        v-for="content in contentList"
        :key="content.id"
        v-show="content.id == currentTab"
        class="text-xl text-gray-900"
      >{{content.para}}</p>
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import( "../components/BtnRounded");
export default {
  name: "TabbedNav",
  components: {
    BtnRounded
  },

  data() {
    return {
      currentTab: 0,
      contentList: [
        {
          id: 0,
          btnText: "Responsibilty",
          para:
            "UOWN was built and designed by those very familiar with the world of property. We are all too aware of extortionate rents, irresponsible landlords, excessive deposits and large letting fees. We don't agree with this mistreatment of renters. That is why we operate differently. We carefully vet our partners not just on how they act now but how they acted in the past. That's why our rental properties have affordable deposits, no letting fees and are designed to be much better for tenants."
        },
        {
          id: 1,
          btnText: "Equality",
          para:
            "We believe that any investor big or small should have access to the same returns. Specialist knowledge and circumstance should be no barrier to great investment opportunities. UOWN stands for equality and putting the power firmly back in the hands of investors."
        },
        {
          id: 2,
          btnText: "Quality",
          para:
            "We look to exemplify this trait in everything we do. From ensuring that our investors have access to high-quality investment opportunities through to working with award-winning architects to designing unique high-quality homes for people to live in."
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.main,
.active {
  background-color: #f4f4f4;
}
</style>