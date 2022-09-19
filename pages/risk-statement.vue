<template>
  <PolicyLayout
    heading="Risk Statement"
    subheading="What are the risks of property crowdfunding?"
  >
    <bigP text="1. Property prices could fall meaning that the value of your shares can decline." />
    <policiesPara
      text="The price of your shares are based upon the price of the property at the time of funding. For example, an investment costing £100,000 will have 100,000 shares available to purchase at £1 per share."
    />
    <policiesPara
      text="We have the property valued every three months by independent surveyors. We then update the value of your shares based upon this valuation. Based on the example above if the investment is re-valued at £90,000, then each of the 100,000 shares will now be worth £0.90."
    />
    <policiesPara
      text="It is good financial practice to diversify your portfolio by investing only a portion of your disposable income in a variety of different investments across different platforms in order to mitigate risk."
    />
    <p class="text-2xl font-family-bold">What do we do to minimise this risk?</p>
    <policiesPara
      text="Whilst we cannot control the movement of the market, we vet properties to minimise the risk of the property price falling and maximise the chance of the price rising. We do this by providing houses that have very strong rental demand and which have a history of being rented out year on year."
    />
    <bigP
      text="2. There may be periods when the property is not rented out and you will not receive any rent."
    />
    <policiesPara
      text="If the property is not rented out or some of the rooms are not rented out then the amount you receive in rental income may be less than we state. If this is the case then you may not receive any monthly rental income or the rental income you receive may be less than expected."
    />
    <p class="text-2xl font-family-bold">What do we do to minimise this risk?</p>
    <policiesPara
      text="We work with the best letting agents we can to minimise this risk and only pick properties that have a strong rental history going back many years. Whilst demand may change, we only pick houses in areas with a strong current or expected demand, aiming to minimise the risk that they will be empty for any extended periods."
    />
    <bigP text="3. There must be a buyer for your shares when you want to sell." />
    <policiesPara
      text="Investments in UOWN are illiquid in nature as they are not listed on a public exchange. This means that you may not be able to easily sell your shares in a given property, or you may not be able to find a buyer at all, before the end of the investment term. When you choose to list your shares for sale on our platform we will market them at the current market value, which is calculated every quarter. There must be someone willing to purchase your shares at the market rate for you to sell them."
    />
    <p class="text-2xl font-family-bold">What do we do to minimise this risk?</p>
    <policiesPara
      text="We will actively market your shares and do our best to facilitate the sale of your shares at the current market value. We aim to find a buyer within 3 weeks. However, we cannot guarantee that a buyer for your shares will be found."
    />
    <policiesPara
      text="<strong>Note:</strong> You shouldn’t invest money you will need access to immediately. UOWN works best if viewed as a long-term investment."
      class="italic"
    />
    <bigP
      text="4. Our forecasts and past performance help with the guesswork but we are only human and can’t predict the future."
    />
    <policiesPara
      text="Past performance of a property is not indicative of future results, and forecasts of future results are not guaranteed."
    />
    <p class="text-2xl font-family-bold">What do we do to minimise this risk?</p>
    <policiesPara
      text="We base our forecasts on long term historical data to ensure that any predictions are resilient to short term changes in prices. We also ensure that all costs, insurance and taxes are accounted for with margins to ensure that a cushion is in place should something untoward happen. (More on this below)"
    />
    <policiesPara
      text="All of these costs are based off the experience of The Parklane Group who have been letting and managing properties in Leeds for 40+ years. The Parklane Group is our primary backer and strategic partner. Despite our best efforts the true returns you receive may be higher or lower than we predict."
    />
    <bigP text="5. No coverage under the Financial Services Compensation Scheme (FSCS)" />
    <policiesPara
      text="Your investment is not covered by the Financial Services Compensation Scheme."
    />
    <bigP text="6. No financial advice" />
    <policiesPara
      text="UOWN do not provide financial advice or recommendations. If you are not sure whether or not investing in UOWN is right for you, you should seek the advice of an independent financial advisor who is authorised under the Financial Services and Markets Act 2000."
    />
    <policiesPara
      text="This list of risk factors does not necessarily outline all possible risks involved. If you are unsure about any aspect of the information provided by the company, you should seek advice from an independent financial adviser."
    />
  </PolicyLayout>
</template>

<script>
const PolicyLayout = () => import("@/components/PolicyLayout");
const policiesPara = () => import("@/components/PoliciesPara");
const bigP = () => import("@/components/BigP");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'

export default {
  components: {
    PolicyLayout,
    policiesPara,
    bigP
  },

  head() {
    return {
      title: "Risk Statement",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Property crowdfunding comes with financial risks. Click to read UOWN&#x27;s risk statement and learn how your capital may be at risk."
        }
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images//rounded-box-aquamarine.svg"),
          rel: "preload",
          as: "image",
        },
      ],
    };
  },

  mixins: [fullCanonicalURL]
};
</script>

<style>
</style>