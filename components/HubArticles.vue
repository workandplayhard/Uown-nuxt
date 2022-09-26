<template>
  <div>
    <div class="hidden md:block ml-10">
      <HubCarousel
        bgColor="#71E5BD"
        category="Property"
        ind="1"
        :mock="PropertyData[0]"
      />
      <HubCarousel
        bgColor="#5A6ECC"
        category="Money"
        ind="2"
        :mock="PropertyData[1]"
      />
      <HubCarousel
        bgColor="#FFD008"
        category="Home & Lifestyle"
        ind="3"
        :mock="PropertyData[2]"
      />
      <HubCarousel
        bgColor="#FE8075"
        category="Causes"
        ind="4"
        :mock="PropertyData[0]"
      />
    </div>
    <div class="grid md:hidden grid-cols-1">
      <HubArticleCard bgColor="#71E5BD" category="Property" ind="1" />
      <HubArticleCard bgColor="#5A6ECC" category="Money" ind="2" />
      <HubArticleCard bgColor="#FFD008" category="Home & Lifestyle" ind="3" />
      <HubArticleCard bgColor="#FE8075" category="Causes" ind="4" />
    </div>
  </div>
</template>
<script>
import HubCarousel from "./HubCarousel.vue";
import HubArticleCard from "./HubArticleCard.vue";
export default {
  data() {
    return {
      PropertyData: [
        [
          {
            title: "Good contacts a landlord needs to have",
            link: "/the-hub/good-contacts-a-landlord-needs-to-have"
          },
          {
            title: "Buying a Property At Auction",
            link: "/the-hub/buying-a-property-at-auction"
          },
          {
            title: "Tips for selling your house",
            link: "/the-hub/tips-for-selling-your-house"
          },
          {
            title: "Is Property Still A Good Investment",
            link: "/the-hub/is-property-still-a-good-investment"
          },
          {
            title: "How To Build A Property Portfolio",
            link: "/the-hub/how-to-build-a-property-portfolio"
          }
        ],
        [
          {
            title: "Are Flats A Good Investment?",
            link: "/the-hub/are-flats-a-good-investment"
          },
          {
            title: "Costs To Consider When Buying A House",
            link: "/the-hub/costs-to-consider-when-buying-a-house"
          },
          {
            title: "What Is A Good Rental Yield?",
            link: "/the-hub/what-is-a-good-rental-yield"
          },
          {
            title: "A Guide To Long Term Investments",
            link: "/the-hub/a-guide-to-long-term-investments"
          },
          {
            title: "How much should I charge for rent",
            link: "/the-hub/how-much-should-i-charge-for-rent"
          }
        ],
        [
          {
            title: "House Viewing Tips",
            link: "/the-hub/house-viewing-tips"
          },
          {
            title: "Are Short Term Lets Worth It?",
            link: "/the-hub/are-short-term-lets-worth-it"
          },
          {
            title: "How To Add Value To A House",
            link: "/the-hub/how-to-add-value-to-a-house"
          },
          {
            title: "Questions To Ask When Buying A House",
            link: "/the-hub/questions-to-ask-when-buying-a-house"
          },
          {
            title: "Should I Buy A House?",
            link: "/the-hub/should-i-buy-a-house"
          }
        ],
        [
          {
            title: "House Viewing Tips",
            link: "/the-hub/house-viewing-tips"
          },
          {
            title: "Are Short Term Lets Worth It?",
            link: "/the-hub/are-short-term-lets-worth-it"
          },
          {
            title: "How To Add Value To A House",
            link: "/the-hub/how-to-add-value-to-a-house"
          },
          {
            title: "Questions To Ask When Buying A House",
            link: "/the-hub/questions-to-ask-when-buying-a-house"
          },
          {
            title: "Should I Buy A House?",
            link: "/the-hub/should-i-buy-a-house"
          }
        ]
      ]
    };
  },
  components: { HubCarousel, HubArticleCard }
};
</script>
