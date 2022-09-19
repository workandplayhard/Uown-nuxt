<template>
  <section class="relative overflow-hidden lg:pb-20">
    <div class="container grid lg:grid-cols-2 gap-12 items-end">
      <div>
        <heading text="Why invest in a property development?" />
        <p
          class="text-xl"
        >Property has long been seen as one of the safer bets when it comes to making a little (or a lot) extra money, and we believe this will continue in the future. Property is an evolving market and money can be made in new and exciting ways from a market where demand is currently outstripping supply.</p>
        <p
          class="text-xl"
        >You could see a larger return on your investment through investing in construction than the returns from buy-to-let investments. Developments are typically over a fixed shorter timespan, compared to longer term buy-to-lets.</p>
        <div class="sm:flex lg:block xl:flex my-10">
          <iconText
            :icon="require('@/assets/images/300k.svg')"
            text="Number of homes the UK needs to build each year to meet supply."
            class="mb-4 md:mr-4 md:mb-0"
          />
          <iconText
            :icon="require('@/assets/images/14.8 percent.svg')"
            text="Amount UK house prices are expected to climb by  between 2019 and 2023."
          />
        </div>
      </div>
      <div>
        <p
          class="text-xl opacity-60 mb-4"
        >And with crowdfunded property development through UOWN you are:</p>
        <div class="breakdown p-8 rounded bg-light grid gap-10 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
          <checkText v-for="(e, i) in checkText" :key="i" :text="e" />
        </div>
      </div>
      <btn
        hollow
        outerLink
        text="SEE ALL PROPERTIES"
        link="https://app.uown.co/properties"
        class="text-center grid-cols-span"
      />
    </div>
    <img src="@/assets/images/ellipse-aquamarine.svg" alt="" class="o absolute top-0 bottom-0 hidden lg:block">
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import iconText from "@/components/PropertyDevelopmentS3IconText";
import checkText from "@/components/CheckText";
import btn from "@/components/BtnRounded";

export default {
  components: {
    heading,
    iconText,
    checkText,
    btn,
  },

  data() {
    return {
      checkText: [
        "Joining a crowd with the same goal.",
        "Investing what you can afford in manageable amounts.",
        "Earning money otherwise destined for large corporations and their executives.",
        "Getting a professionally-managed service with transparent information.",
        "Gaining access to a highly experienced property development team.",
      ],
    };
  },
};
</script>

<style scoped>
.breakdown {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
}

.o {
   right: -25%;
   z-index: -1;
}
</style>