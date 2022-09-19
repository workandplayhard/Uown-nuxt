<template>
  <div>
    <Breadcrumbs  :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <TextImgW2
      title="Property Crowdfunding"
      para="Need an easy way to access property investments where you can choose how ambitious you want to be? Invest with UOWN to open up bigger opportunities through property crowdfunding."
      btnText="What is property crowdfunding?"
      btnNotLink
      scrollTo="what-is-property-crowdfunding"
      :scrollOffset="getScrollOffset"
      :imgOptions="{
        source: require('@/assets/images/PROP_CROWD_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/PROP_CROWD_HERO_RENDER.png?webp'),
        lazyLoad: false,
        scale: 1.05,
      }"
      isHero
    />
    <div class="mt-10">
      <s2
        title="Property crowdfunding is a flexible way to invest in property"
        :icon="require('@/assets/images/PROPERTY_CROWDFUNDING_1.svg')"
      >
        <p>Property crowdfunding allows you to invest in property without the hassle of becoming a landlord.</p>
        <p>
          All made possible by the
          <NLink to="#">power of the crowd</NLink>.
        </p>
      </s2>
    </div>
    <TextImgW
      title="What is property crowdfunding?"
      btnText="Get a free account"
      btnLink="https://app.uown.co/register"
      btnOuterLink
      btnUnderText="Capital at risk."
      img="PROP_CROWDFUNDING_1_SUB_RENDER_dtl9ei.png"
      :imgScale="1.4"
      id="what-is-property-crowdfunding"
    >
      <p
        class="text-xl"
      >Property crowdfunding allows investors to earn returns by contributing to a property purchase or investment with any amount of money they choose, in the form of property shares.</p>
      <p
        class="text-xl"
      >Capital is raised by a community of investors all doing the same thing, and this allows the crowd to invest in a property or a development project, and earn returns from it.</p>
    </TextImgW>
    <s2
      title="How do you make money from property crowdfunding?"
      :icon="require('@/assets/images/PROPERTY_CROWDFUNDING_3.svg')"
    >
      <p class="flex flex-col">
        <span>The average annual income earning is 7.25% through UOWN, with the average annual capital appreciation being 5.28%.</span>
        <span>(Correct as of 6/8/2020)</span>
      </p>
      <p>We have equity and debt based crowdfunding available within our property investment platform.</p>
    </s2>
    <TwoLists
      title1="Equity crowdfunding"
      title2="Debt crowdfunding"
      :list1="equityDebt.list1"
      :list2="equityDebt.list2"
      liDisc
    />
    <div class="my-24">
      <s5
        :mainIcon="require('@/assets/images/PROPERTY_CROWDFUNDING_2.svg')"
        title="Make your crowdfunding investments work harder."
        para="As well as the usual cash basis for investing, we offer additional ways for you to invest in property crowdfunding."
        :cards="s5Cards"
      />
    </div>
    <s2
      title="Our property crowdfunding opportunities."
      :icon="require('@/assets/images/PROPERTY_CROWDFUNDING_4.svg')"
    >
      <p>You can choose to invest in whatever type of property or development in the UK that suits you. At UOWN we focus on two main types of investment opportunities.</p>
    </s2>
    <TwoLists
      title1="Property rentals"
      title2="Property developments"
      :list1="rentalDevelopment.list1"
      :list2="rentalDevelopment.list2"
      :btn1Options="{ text: 'View opportunities', link: 'https://app.uown.co/properties', outerLink: true }"
      :btn2Options="{ text: 'View opportunities', link: 'https://app.uown.co/properties', outerLink: true }"
    />
    <div class="-mb-20 sm:-mb-8 mt-12 sm:mt-0">
      <TextImgEllipse
        title="What property crowdfunding can offer you."
        btnText="Get a free account"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk."
        :imgOptions="{
          source: 'PROP_CROWDFUNDING_2_SUB_RENDER_ejje70.png',
          scale: 1.5
        }"
      >
        <p
          class="text-xl"
        >If you invest with UOWN’s property crowdfunding platform you can enjoy the following benefits:</p>
        <ul class="list-disc pl-5 space-y-4 text-xl mb-4">
          <li>You can make an investment from £1 to £100,000+, to perfectly suit your ambitions and attitude to risk.</li>
          <li>We make it simple to diversify your portfolio by investing in multiple vehicles and opportunities.</li>
          <li>The buying power of the crowd opens up more exciting opportunities than if you were investing alone.</li>
          <li>You can earn passive income from the property market and the UOWN platform lets you closely track the performance of your investments</li>
        </ul>
      </TextImgEllipse>
    </div>
    <faqs title="Property Crowdfunding FAQs." :faqs="faqs" />
  </div>
</template>

<script>
const TextImgW2 = () => import("@/components/TextImgW2");
const S2 = () => import("@/components/SectionTwo");
const TextImgW = () => import("@/components/TextImgW");
const TwoLists = () => import("@/components/TwoLists");
const S5 = () => import("@/components/SectionFive");
const TextImgEllipse = () => import("@/components/TextImgEllipse");
const faqs = () => import("@/components/Faqs");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    TextImgW2,
    S2: hydrateWhenVisible(S2),
    TextImgW: hydrateWhenVisible(TextImgW),
    TwoLists: hydrateWhenVisible(TwoLists),
    S5: hydrateWhenVisible(S5),
    faqs: hydrateWhenVisible(faqs),
    TextImgEllipse: hydrateWhenVisible(TextImgEllipse),
    Breadcrumbs: () => import('@/components/Breadcrumbs')
  },

  head() {
    return {
      title: "Property Crowdfunding | Invest from £1",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Put your money to work with property crowdfunding from UOWN. Invest in property from as little as £1 and grow your savings. Register and get started now.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        { href: require("@/assets/images/W.svg"), rel: "preload", as: "image" },
        {
          href: require("@/assets/images/PROP_CROWD_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      equityDebt: {
        list1: [
          {
            li:
              "You invest in property shares via a Special Purpose Vehicle (SPV).",
          },
          {
            li:
              "You receive regular income from rent if it’s a property rental, in proportion to the amount you have invested.",
          },
          {
            li:
              "You receive a proportional share of profit gained in capital appreciation when the property is sold or the development is finished.",
          },
        ],

        list2: [
          {
            li:
              "Secured lending where you invest money with the crowd and lend it to a property developer.",
          },
          { li: "You earn interest from loan repayments." },
          { li: "All loans are asset-backed for additional security." },
        ],
      },

      rentalDevelopment: {
        list1: [
          {
            li:
              "You choose which properties to invest in and earn money from your share of rent payments and capital appreciation if the property is sold.",
          },
          {
            li:
              "Our portfolio emphasises student properties and Leeds properties due to their historically good, stable returns.",
          },
        ],

        list2: [
          {
            li:
              "You choose the type of property development that suits your ambitions and invest in a crowdfunded property finance loan or by taking an equity stake in the development.",
          },
          {
            li:
              "You make money from the interest on the loan or from profits once the development is sold.",
          },
        ],
      },

      s5Cards: [
        {
          title: "Property Investment Opportunities",
          text:
            "Short or medium term investments to raise capital that can be used by property development companies.",
          link: "/invest",
        },
        {
          title: "Innovative Finance ISA",
          text:
            "The Innovative Finance ISA is a tax efficient way to earn interest from your investments.",
          link: "/invest/ifisa",
        },
        {
          title: "Retirement investments",
          text:
            "SSIPs and SSAS are two increasingly popular ways you can make retirement investments that are tax efficient.",
          link: "/invest/retirement",
        },
      ],

      faqs: [
        {
          question: "How long have UOWN been operating?",
          answer: "UOWN has been operating since 2016.",
        },
        {
          question: "Can a company invest with UOWN?",
          answer:
            "Company directors or shareholders can invest through their company with UOWN. Simply register your account as a company and enter the required information.",
        },
        {
          question: "Do I have shares (equity) in the projects I loan to?",
          answer:
            "This depends on the project. Our buy-to-let projects are all equity based properties. For developments you will need to check the details of each project to see if it is equity or debt based.",
        },
        {
          question: "When do I get my money back?",
          answer:
            "For buy-to-let properties you will be paid your dividend return monthly on the 5th of the month. To get your capital back you will need to list your shares for sale on our secondary market or if the property is sold following a shareholder vote. <br><br> For developments you will get your capital and return back at the end of the project, when the borrower has completed their designated exit. If the borrower repays early, you will receive either your original capital and interest, or your capital and a calculated partial repayment of your interest depending on the contractual arrangement of the project.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Property Crowdfunding', link: this.$route.path },
      ]
    };
  },

  computed: {
    getScrollOffset() {
      if (this.$mq !== "sm") return 200;
    },
  },

  mixins: [fullCanonicalURL, breadcrumbList, faqSchema],

  jsonld() {
    return this.breadcrumbList;
  },

};
</script>

<style>
</style>