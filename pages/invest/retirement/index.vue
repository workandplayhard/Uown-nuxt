<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <TextImgW2
      title="Retirement Investments"
      para="Have you planned an investment strategy for your retirement? SIPP and SSAS pensions are tax efficient ways to invest your money and grow your retirement nest egg."
      btnText="Learn more"
      btnNotLink
      :imgOptions="{
        source: require('@/assets/images/RETIREMENT_INV_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/RETIREMENT_INV_HERO_RENDER.png?webp'),
        lazyLoad: false,
        scale: 1.2
      }"
      scrollTo="pension-investments"
      :scrollOffset="5"
      isHero
      class="mb-20"
    />
    <LazyHydrate when-visible>
      <LottieSection
        title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s2
        :icon="require('@/assets/images/RETIREMENT_1.svg')"
        title="Investing in your future through UOWN"
        class="mt-16"
      >
        <p>
          With UOWN you can invest your money with full control over where it is
          invested and full transparency on its progress.
        </p>
        <div>
          <p class="mb-0">
            All made possible by the
            <NLink to="#">power of the crowd.</NLink>
          </p>
          <p class="italic opacity-60">
            You may only invest in commercial property for your pension.
          </p>
        </div>
      </s2>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextImgEllipse
        title="Pension investments, accessible to everyone"
        :imgOptions="{
          source: 'RETIRE_INV_1_SUB_RENDER_oszovn.png',
          scale: 1.5
        }"
        textLeft
        btnText="Learn more"
        btnNotLink
        scrollTo="sipp-sass"
        class="mb-20"
        id="pension-investments"
      >
        <p class="text-xl">
          We have two retirement investment options which are known as defined
          contribution pension schemes.
        </p>
        <p class="text-xl">
          This means that the value of your pension pot at retirement is dependent
          upon the amount you pay in and the performance of your investments.
        </p>
      </TextImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TwoLists
        title1="SIPP"
        title2="SSAS"
        :list1="twoLists.list1"
        :list2="twoLists.list2"
        :btn1Options="{ text: 'View SIPP', link: '/invest/retirement/sipp' }"
        :btn2Options="{ text: 'View SSAS', link: '/invest/retirement/ssas' }"
        liDisc
        class="mb-24"
        id="sipp-sass"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextImgU
        title="Invest with UOWN and take control of your retirement savings"
        :imgOptions="{
          source: 'RETIRE_INV_2_SUB_RENDER_dq1lwm.png',
          scale: 1.25
        }"
      >
        <p class="text-xl">
          Whether you want to take an active or passive interest in your pension
          fund investments, investing with UOWN can give you that flexibility and
          freedom.
        </p>
        <p class="text-xl">
          Our investment platform offers complete transparency and the option to
          diversify and build your commercial property investment portfolio. So
          invest with UOWN and your retirement plans can begin today.
        </p>
      </TextImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <faqs title="Retirement investments FAQs." :faqs="faqs" class="mt-4" />
    </LazyHydrate>
    <!-- <emailPopup3 ver2 /> -->
  </div>
</template>

<script>
const TextImgW2 = () => import("@/components/TextImgW2");
const LottieSection = () => import("@/components/LottieCardsSection");
const S2 = () => import("@/components/SectionTwo");
const TextImgEllipse = () => import("@/components/TextImgEllipse");
const TwoLists = () => import("@/components/TwoLists");
const TextImgU = () => import("@/components/TextImgU");
const faqs = () => import("@/components/Faqs");
// const emailPopup3 = () => import('@/components/EmailPopup3')
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import LazyHydrate from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    TextImgW2,
    LottieSection,
    S2,
    TextImgEllipse,
    TwoLists,
    faqs,
    TextImgU,
    LazyHydrate,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup3
  },

  head() {
    return {
      title: "Retirement and Pension Fund Investments",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Save for your future with a retirement and pension investments from UOWN. Invest in property inside a SIPP or SSAS. Invest from as little as £1. Get started now.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        { href: require("@/assets/images/W.svg"), rel: "preload", as: "image" },
        {
          href: require("@/assets/images/RETIREMENT_INV_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      twoLists: {
        list1: [
          { li: "You can choose what your money is invested in." },
          {
            li:
              "You can choose what contributions you make and when you make them, ie. an occasional lump sum or a smaller, regular amount.",
          },
          { li: "You receive a 20% HMRC tax relief on what you pay in." },
        ],

        list2: [
          {
            li:
              "A workplace scheme which is independently managed by the company.",
          },
          { li: "No more than 11 members." },
          {
            li:
              "Members choose how the funds are invested and can invest in a range of assets.",
          },
          { li: "25% tax relief for basic rate taxpayers." },
        ],
      },

      faqs: [
        {
          question: "How long have UOWN been operating?",
          answer: "UOWN has been operating since 2016.",
        },
        {
          question: "What happens to my account and investments if I die?",
          answer:
            "The investments become part of your estate and will be managed in the first instance, by the Executors of your Will and then the beneficiary(ies) to whom you leave your estate. They, like you, will only be able to access and withdraw the funds you have pledged to projects and the interest made once the project has been completed.",
        },
        {
          question: "Can I access my money early if necessary?",
          answer:
            "When you lend money through your UOWN account, you commit to lending that money for the term of said investment. During this time, it is not possible to withdraw the original investment amount early.",
        },
        {
          question: "When do I get my capital and interest back?",
          answer:
            "You will get your capital and interest back at the end of the project, when the borrower has completed their designated exit. If the borrower repays early, you will receive either your original capital and interest, or your capital and a calculated partial repayment of your interest depending on the contractual arrangement of the project.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Retirement Investments', link: this.$route.path },
      ]
    };
  },

  inject: ["lottieCardsContent1"],

  mixins: [fullCanonicalURL, breadcrumbList, faqSchema],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style lang='scss' scoped>
</style>