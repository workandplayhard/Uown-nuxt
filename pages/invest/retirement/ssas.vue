<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16" />
    <textImgEllipse
      title="SSAS pensions"
      btnText="Learn more"
      btnNotLink
      scrollTo="What-is-a-Small-Self-Administered-Scheme"
      :scrollOffset="$mq !== 'sm' ? 20 : -30"
      :imgOptions="{
        source: require('@/assets/images/SSAS_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/SSAS_HERO_RENDER.png?webp'),
        lazyLoad: false
      }"
      textLeft
    >
      <bigP
        text="Fancy getting more from your SSAS by investing in the property market? Invest your SSAS pension with UOWN to take advantage of our commercial property investments."
      />
    </textImgEllipse>
    <LazyHydrate when-visible>
      <s2
        :icon="require('@/assets/images/SSAS_1.svg')"
        title="Smart pensions for small businesses"
      >
        <p>
          SSAS pensions allow savvy small businesses to invest their pension pot
          in order to grow returns for employees.
        </p>
        <p>
          All made possible by the
          <nuxt-link to="#">power of the crowd</nuxt-link>.
        </p>
      </s2>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgEllipse
        title="What is a Small Self Administered Scheme?"
        textLeft
        btnText="Register today"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
        :imgOptions="{
          source: 'HOME_S2_STEP_1_vcvl6r.png',
          scale: 1.5
        }"
        id="What-is-a-Small-Self-Administered-Scheme"
      >
        <p class="text-xl">
          A Small Self Administered Scheme (SSAS) is a type of workplace pension
          scheme known as a defined contribution scheme.
        </p>
        <p class="text-xl">
          It is usually set up by directors of a company in order to gain more
          control and offer more flexibility over where contributions are
          invested.
        </p>
      </textImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        title="Self managed, more freedom"
        btnText="Set up an account"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
        :imgOptions="{
          source: 'SSAS_2_SUB_RENDER_ylrxmz.png',
          scale: 1.4,
          translateX: 4
        }"
        class="sm:-mt-20 sm:-mb-48"
      >
        <p class="text-xl">
          A SSAS pension scheme can be set up and managed by the employees of a
          business, as there is no interaction required with financial
          institutions, hence the name small self-administered scheme.
        </p>
        <p class="text-xl">
          Members of the scheme can choose how their money is invested, which
          offers investment opportunities that aren’t available with other types
          of pension.
        </p>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        title="Invest for your business, and your loved ones."
        textLeft
        btnText="Learn more"
        btnNotLink
        scrollTo="Why-invest-with-UOWN-as-part-of-your-SSAS"
        :scrollOffset="getScrollOffset"
        :imgOptions="{
          source: 'SSAS_3_SUB_RENDER_kv28ye.png',
          scale: 1.4,
          translateX: -4
        }"
        class="sm:-mb-20"
      >
        <p class="text-xl">
          One major benefit of a SSAS pension fund, particularly to a small,
          family-run business, is that members can include people who don’t
          actually work for the company, such as family relations.
        </p>
        <p class="text-xl">
          SSAS pensions help your employees and their families invest for their
          retirement, together.
        </p>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgEllipse
        title="SSAS pensions are a tax efficient way to invest"
        btnText="Learn more"
        btnNotLink
        scrollTo="Why-invest-with-UOWN-as-part-of-your-SSAS"
        :scrollOffset="getScrollOffset"
        :imgOptions="{
          source: 'SSAS_4_SUB_RENDER_mtai3l.png',
          scale: 1.6,
          translateX: -3
        }"
      >
        <p class="text-xl">
          The contributions you make are eligible for tax relief, and for basic
          rate tax-payers this amounts to a 25% tax top up. In other words, HMRC
          will add £25 for every £100 you pay into your pension.
        </p>
        <p class="text-xl">
          You can also reclaim additional tax relief through your annual tax
          return if you pay a higher rate of tax.
        </p>
      </textImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s1
        :mainIcon="require('@/assets/images/SSAS_2.svg')"
        title="Investing in a SSAS pension"
        para="SSAS pensions can be a powerful, tax efficient way for your company to contribute to pensions, but there are some investment rules and terms to follow."
        :cards="s1Cards"
        class="bg-light"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        title="Why invest with UOWN as part of your SSAS?"
        textRight
        btnText="Learn more"
        btnNotLink
        scrollTo="SASS-pensions-FAQs"
        :imgOptions="{
          source: 'SSAS_5_SUB_RENDER_lvxju7.png',
          scale: 1.5
        }"
        downward
        class="sm:-mb-12 mt-10 sm:mt-0"
        id="Why-invest-with-UOWN-as-part-of-your-SSAS"
      >
        <p class="text-xl">
          By holding investments with UOWN as part of your SSAS you can enjoy the
          following benefits:
        </p>
        <ul class="text-xl space-y-3 list-disc pl-5 mb-5">
          <li>Access to investments sourced by experts.</li>
          <li>Tax efficient property investments.</li>
          <li>
            Our service is completely transparent and you are kept informed of
            progress with your investment.
          </li>
          <li>
            Diversify your retirement investment portfolio by investing in
            commercial property.
          </li>
        </ul>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <faqs title="SASS pensions FAQs." :faqs="faqs" id="SASS-pensions-FAQs" />
    </LazyHydrate>
    <!-- <emailPopup3 /> -->
  </div>
</template>

<script>
const textImgEllipse = () => import("@/components/TextImgEllipse");
const bigP = () => import("@/components/BigP");
const s2 = () => import("@/components/SectionTwo");
const textImgU = () => import("@/components/TextImgU");
const s1 = () => import("@/components/SectionOne");
const faqs = () => import("@/components/Faqs");
// const emailPopup3 = () => import('@/components/EmailPopup3')
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import LazyHydrate from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgEllipse,
    bigP,
    s2,
    textImgU,
    s1,
    faqs,
    // emailPopup3
    LazyHydrate,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
  },

  head() {
    return {
      title: "Small Self Administered Scheme | SSAS Investments",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Save for your future with a SSAS from UOWN. Invest in property inside a SIPP. Invest from as little as £1. Get started today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/ellipse-gray.svg"),
          rel: "preload",
          as: "image",
        },
        {
          href: require("@/assets/images/SSAS_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      s1Cards: [
        {
          icon: require("@/assets/images/SSAS_3.svg"),
          title: "One pension per company",
          text:
            "Only one SSAS pension fund is allowed in one company. You cannot open multiple SSAS pensions to accommodate larger groups.",
        },
        {
          icon: require("@/assets/images/SSAS_4.svg"),
          title: "A maximum of 11 investors",
          text:
            "Membership of the scheme is capped at 11 people. This total applies to named beneficiaries inside and outside of the company.",
        },
        {
          icon: require("@/assets/images/SSAS_5.svg"),
          title: "Putting you first",
          text:
            "We factor your interest payments into the balance of the loan, leaving you with a simple and manageable lump sum figure.",
        },
        {
          icon: require("@/assets/images/SSAS_6.svg"),
          title: "A range of assets",
          text:
            "HMRC allows you to invest in a range of assets, including commercial property.",
        },
        {
          icon: require("@/assets/images/SSAS_7.svg"),
          title: "Investing in commercial debt",
          text:
            "Banks may be hesitant to give access to finance for a development that requires a lot of work.",
        },
        {
          icon: require("@/assets/images/SSAS_8.svg"),
          title: "Drawings from 55",
          text:
            "Trustees can start to draw benefits from the scheme from the age of 55, but not sooner.",
        },
        {
          icon: require("@/assets/images/SSAS_9.svg"),
          title: "Tax free benefits",
          text:
            "You can take the first 25% of your fund as a tax-free lump sum, or you can receive 25% of each withdrawal tax-free.",
        },
        {
          icon: require("@/assets/images/SSAS_10.svg"),
          title: "No limit on withdrawals",
          text:
            "Withdrawals are subject to the normal rate of income tax, although there is no cap on the amount you can withdraw.",
        },
        {
          icon: require("@/assets/images/SSAS_11.svg"),
          title: "Assets held for trustees",
          text:
            "All SSAS pension fund assets are held in the name of the trustees. It is recorded that each individual member holds a proportion.",
        },
      ],

      faqs: [
        {
          question: "Can I invest through a SIPP or a SSAS pension?",
          answer:
            "Yes, you can invest with UOWN through a SIPP or SSAS. To learn more, please view the pension page on our website.",
        },
        {
          question: "When do I get my capital and interest back?",
          answer:
            "You will get your capital and interest back at the end of the project, when the borrower has completed their designated exit. If the borrower repays early, you will receive either your original capital and interest, or your capital and a calculated partial repayment of your interest depending on the contractual arrangement of the project.",
        },
        {
          question: "Is interest I earn through pension lending taxable?",
          answer:
            "Interest earned through pension lending is free of tax in most circumstances. For more information please contact your financial advisor.",
        },
        {
          question: "How do I set up a pension lending account with UOWN?",
          answer:
            "For details on how to set up a pension lending account, please refer to our pension lending page.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Retirement Investments', link: '/invest/retirement' },
        { text: 'SSAS pensions', link: this.$route.path }
      ]
    };
  },

  computed: {
    getScrollOffset() {
      if (this.$mq !== "sm") return 190;
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