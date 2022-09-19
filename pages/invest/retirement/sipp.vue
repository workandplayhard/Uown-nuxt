<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <textImgW2
      textRight
      title="Self Invested Personal Pensions (SIPPs)"
      para="Fancy getting more from your SIPP by investing in the property market? Invest your SIPP pension with UOWN to take advantage of our commercial property investments."
      btnText="Learn more"
      btnNotLink
      scrollTo="What-is-a-Self-Invested-Personal-Pension"
      :scrollOffset="-20"
      :imgOptions="{
        source: require('@/assets/images/SIPPs_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/SIPPs_HERO_RENDER.png?webp'),
        lazyLoad: false,
      }"
      isHero
    />
    <LazyHydrate when-visible>
      <s2
        :icon="require('@/assets/images/SSIPs_1.svg')"
        title="Save for your retirement with an innovative SIPP"
        class="mt-16"
      >
        <p>
          Investing some of your SIPP with UOWN allows you to grow your retirement
          fund by investing in the property market.
        </p>
        <p>
          All made possible by the
          <nuxt-link to="#">power of the crowd</nuxt-link>.
        </p>
      </s2>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgEllipse
        textLeft
        title="What is a Self-Invested Personal Pension?"
        btnText="Learn more"
        btnNotLink
        scrollTo="Key-benefits-of-SIPPs"
        :scrollOffset="30"
        :imgOptions="{
          source: 'SIPPs_1_SUB_RENDER_z8kqwy.png',
          scale: 1.7,
          translateX: 4
        }"
        id="What-is-a-Self-Invested-Personal-Pension"
      >
        <p class="text-xl">
          A self-invested personal pension (SIPP) is a type of DIY pension wrapper
          that offers a number of investments that can be held until you retire
          and start to draw income from them.
        </p>
        <p class="text-xl">
          You have the flexibility to choose what you invest in and then we can
          manage the investment for you and our goal is to make sure it stays on
          track until you retire.
        </p>
      </textImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgEllipse
        title="Build a tax efficient nest-egg with a SIPP"
        btnText="Register today"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
        :imgOptions="{  
          source: 'SIPPs_2_SUB_RENDER_xu3zbm.png',
          scale: 1.6,
          translateX: -4
        }"
        class="-mt-12 sm:mt-0"
      >
        <p class="text-xl">
          Any contributions you make to your SIPP are eligible for tax relief, and
          for basic rate tax-payers this amounts to a 20% tax top up. HMRC will
          add £20 for every £100 you pay into your pension.
        </p>
        <p class="text-xl">
          You can also reclaim additional tax relief through your annual tax
          return if you pay a higher rate of tax
        </p>
      </textImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s1
        :mainIcon="require('@/assets/images/SSIPs_2.svg')"
        title="Key benefits of SIPPs"
        para="SIPP pensions come loaded with benefits for the savvy investor who’s looking to grow their nest egg through smart investments"
        :cards="s1Cards"
        class="sm:-mt-12"
        id="Key-benefits-of-SIPPs"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s1
        :mainIcon="require('@/assets/images/SSIPs_9.svg')"
        title="Investing in a SIPP pension"
        para="SIPP pensions can be a great way to set aside some money for your future, but there are some investing rules that need to be followed to keep things running smoothly"
        :cards="s1Cards2"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        title="Why you should invest your SIPP with UOWN"
        btnText="Get a free account"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
        :imgOptions="{
          source: 'SIPPs_3_SUB_RENDER_blb5r6.png',
          scale: 1.2
        }"
        class="sm:-my-24 -mb-12"
      >
        <p class="text-xl">
          If you invest some of your SIPP pension pot with UOWN you will enjoy the
          following benefits:
        </p>
        <ul class="text-xl space-y-3 list-disc pl-5 mb-5">
          <li>
            You can change your investment portfolio to match your circumstances
            and risk tolerance.
          </li>
          <li>
            Our service is completely transparent and you are kept fully informed
            of progress with your investment.
          </li>
          <li>
            You can diversify your retirement investment portfolio by investing in
            a range of commercial property available on the UOWN platform.
          </li>
        </ul>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <faqs title="SIPP pensions FAQs." :faqs="faqs" />
    </LazyHydrate>
    <!-- <emailPopup3 /> -->
  </div>
</template>

<script>
const textImgW2 = () => import("@/components/TextImgW2");
const s2 = () => import("@/components/SectionTwo");
const textImgEllipse = () => import("@/components/TextImgEllipse");
const s1 = () => import("@/components/SectionOne");
const textImgU = () => import("@/components/TextImgU");
const faqs = () => import("@/components/Faqs");
// const emailPopup3 = () => import('@/components/EmailPopup3')
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import LazyHydrate from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgW2,
    s2,
    textImgEllipse,
    s1,
    textImgU,
    faqs,
    // emailPopup3
    LazyHydrate,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
  },

  head() {
    return {
      title: "Self Invested Personal Pension | SIPP Investments",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Save for your future with a SIPP from UOWN. Invest in property inside a SIPP. Invest from as little as £1. Get started today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        { href: require("@/assets/images/W.svg"), rel: "preload", as: "image" },
        {
          href: require("@/assets/images/SIPPs_HERO_RENDER.png?webp"),
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
          icon: require("@/assets/images/SSIPs_3.svg"),
          title: "Mix and match investments",
          text:
            "You can select from a range of assets to invest in and switch between them as and when you want to, hence the name ‘self-invested personal pension’.",
        },
        {
          icon: require("@/assets/images/SSIPs_4.svg"),
          title: "No experience, no problem",
          text:
            "A SIPP pension helps inexperienced investors by allowing you to invest in share-based funds rather than individual shares.",
        },
        {
          icon: require("@/assets/images/SSIPs_5.svg"),
          title: "Simple to fund",
          text:
            "We factor your interest payments into the balance of the loan, leaving you with a simple and manageable lump sum figure and a repayment date that is easier to aim for.",
        },
        {
          icon: require("@/assets/images/SSIPs_6.svg"),
          title: "Online and simple to manage",
          text:
            "SIPP investments can be managed completely online, including buying and selling investments and checking performance.",
        },
        {
          icon: require("@/assets/images/SSIPs_7.svg"),
          title: "Easy way to spread risk",
          text:
            "Banks may be hesitant to give access to finance for a development that requires a lot of work. We counteract this by using equity",
        },
        {
          icon: require("@/assets/images/SSIPs_8.svg"),
          title: "Withdrawals before 55",
          text:
            "You can start withdrawing from your pension fund as you near your retirement age.",
        },
      ],

      s1Cards2: [
        {
          icon: require("@/assets/images/SSIPs_10.svg"),
          title: "Access your SIPP at 55",
          text: "You can access and use your pension pot from the age of 55.",
        },
        {
          icon: require("@/assets/images/SSIPs_11.svg"),
          title: "Tax relief on £40,000 annually",
          text:
            "If you earn up to £150,000 you can invest up to £40,000 of your annual earnings before tax, according to 2019/20 tax rules.",
        },
        {
          icon: require("@/assets/images/SSIPs_12.svg"),
          title: "Low-cost SIPP",
          text:
            "A ‘low-cost’ SIPP pension is possible to start with a small sum and you make all the choices on the investment.",
        },
        {
          icon: require("@/assets/images/SSIPs_13.svg"),
          title: "Full SIPP",
          text:
            "A ‘full SIPP’ offers a wider choice of more complex investments, such as commercial property, which is more for the experienced investor.",
        },
        {
          icon: require("@/assets/images/SSIPs_14.svg"),
          title: "A variety of assets",
          text:
            "Unit trusts, shares, exchange traded funds, investment trusts, gilts and corporate bonds, cash, and commercial property can all be held in a SIPP.",
        },
        {
          icon: require("@/assets/images/SSIPs_15.svg"),
          title: "Management charges",
          text:
            "Be aware that there could be charges for managing a SIPP, such as admin charges, charges for funds and shares, buying and selling charges.",
        },
      ],

      faqs: [
        {
          question: "Can I invest through a SIPP or a SSAS pension?",
          answer:
            "Yes, you can invest with UOWN through a SIPP or SSAS. To learn more, please view our pension section below and/or pension page on our website.",
        },
        {
          question: "When do I get my capital and interest back?",
          answer:
            "You will get your capital and interest back at the end of the project, when the borrower has completed their designated exit. If the borrower repays early, you will receive either your original capital and interest, or your capital and a calculated partial repayment of your interest depending on the contractual arrangement of the project.",
        },
        {
          question: "Is interest I earn through pension lending taxable?",
          answer:
            "Interest earned through pension lending is free of tax in most circumstances. Please contact your financial advisor for more information about your personal circumstances.",
        },
        {
          question:
            "What are my options if my pension provider will not approve peer to peer lending?",
          answer:
            "If your pension provider does not authorise peer-to-peer lending, unfortunately you will not be able to lend to UOWN via your pension. If pension lending is not authorised by your provider but you would still like to pursue peer-to-peer lending, we would strongly recommend seeking advice from a qualified independent financial adviser.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Retirement Investments', link: '/invest/retirement' },
        { text: 'Self Invested Personal Pensions (SIPPs)', link: this.$route.path }
      ]
    };
  },

  mixins: [fullCanonicalURL, breadcrumbList, faqSchema],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>