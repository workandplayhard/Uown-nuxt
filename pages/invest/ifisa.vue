<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <TextImgU
      title="Innovative Finance ISA (IFISA)"
      :imgOptions="{
        source: require('@/assets/images/IFISA_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/IFISA_HERO_RENDER.png?webp'),
        lazyLoad: false,
        scale: 0.8
      }"
      btnText="Register today"
      btnLink="https://app.uown.co/register"
      btnOuterLink
      btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
      textLeft
      isHero
      class="sm:-mt-24"
    >
      <bigP
        text="Do you want an exciting new investment opportunity that is tax efficient with returns powered by our projects? Then join UOWN today."
      />
    </TextImgU>
    <LazyHydrate when-visible>
      <LottieSection
        title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <S2
        :icon="require('@/assets/images/IFISA_6.svg')"
        title="The smart way to invest your money."
        class="mt-16 mb-6"
      >
        <p>
          Innovative Finance ISAs allow savvy investors to take advantage of the
          exciting opportunities peer to peer lending brings, whilst keeping
          investments tax efficient.
        </p>
        <p>
          All made possible by the
          <NLink to="#">power of the crowd.</NLink>
        </p>
      </S2>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextImgEllipse
        title="What is an Innovative Finance ISA?"
        btnText="Learn more"
        btnNotLink
        scrollTo="faqs"
        :imgOptions="{
          source: 'IFISA_1_SUB_RENDER_exqzde.png',
          scale: 1.6,
          translateX: 3
        }"
        textLeft
      >
        <p class="text-xl">
          Traditionally, the two most popular forms of ISAs have been cash ISAs
          and stocks & shares ISAs, but now there is a third one.
        </p>
        <p class="text-xl">
          The innovative finance ISA (IFISA) is also known as the peer-to-peer
          ISA, and has the dual benefit of using the normal annual tax-free ISA
          allowance, whilst also taking advantage of the more lucrative
          peer-to-peer lending sector.
        </p>
      </TextImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextImgU
        title="Investing with UOWN"
        :imgOptions="{
          source: 'IFISA_2_SUB_RENDER_uwvwya.png',
          scale: 1.25
        }"
        btnText="The benefits"
        btnNotLink
        scrollTo="benefits"
        class="mt-8 sm:mt-0"
      >
        <p class="text-xl">
          We match property developers wanting to fund a project – with a group of
          investors looking to get a better return on their money.
        </p>
        <p class="text-xl">
          You can pay in up to £20,000 of your tax-free annual ISA allowance. The
          IFISA lends your money to borrowers. In return you receive an amount of
          interest.
        </p>
      </TextImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <S1
        title="Key benefits of IFISAs"
        para="Innovative Finance ISAs come with a range of exciting benefits, allowing those looking to build a financial nest egg do so efficiently without being restricted to traditional ISAs."
        :mainIcon="require('@/assets/images/IFISA_main.svg')"
        :cards="keyBenefitsCards"
        class="mt-10 sm:-mt-12 mb-10 sm:-mb-12 bg-light"
        id="benefits"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextImgW
        title="Why you should choose UOWN"
        btnText="Register today"
        btnLink="https://app.uown.co/register"
        btnOuterLink
        btnUnderText="Capital at risk. Tax treatment depends on the individual circumstances of each client and may be subject to change."
        img="IFISA_3_SUB_RENDER_sd0o86.png"
        textRight
        :imgScale="1.2"
      >
        <p class="text-xl">
          If you open an Innovative Finance ISA you can enjoy the following
          benefits:
        </p>
        <ul class="text-xl list-disc pl-5 space-y-4">
          <li>
            UOWN is an innovative crowdfunding platform and this perfectly fits
            the IFISA model.
          </li>
          <li>
            We offer a quick and simple process to get your ISA up and running.
          </li>
          <li>
            Invest in the same opportunities listed on the UOWN platform, but
            within a more efficient ISA tax wrapper.
          </li>
        </ul>
      </TextImgW>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <faqs title="Innovative Finance ISAs FAQs." :faqs="faqs" id="faqs" />
    </LazyHydrate>
    <!-- <emailPopup3 ver2 /> -->
  </div>
</template>

<script>
const TextImgU = () => import("@/components/TextImgU");
const LottieSection = () => import("@/components/LottieCardsSection");
const S2 = () => import("@/components/SectionTwo");
const TextImgEllipse = () => import("@/components/TextImgEllipse");
const S1 = () => import("@/components/SectionOne");
const TextImgW = () => import("@/components/TextImgW");
const faqs = () => import("@/components/Faqs");
const bigP = () => import("@/components/BigP");
// const emailPopup3 = () => import('@/components/EmailPopup3')
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import LazyHydrate from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    TextImgU,
    LottieSection,
    S2,
    TextImgEllipse,
    S1,
    TextImgW,
    faqs,
    bigP,
    LazyHydrate,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup3
  },

  head() {
    return {
      title: "Innovative Finance ISA | IFISA + P2P ISA",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Invest in property the tax efficient way with an IFISA from UOWN. Simple application and investments starting from £1. Register and save today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/rounded-box-2-gray.svg"),
          rel: "preload",
          as: "image",
        },
        {
          href: require("@/assets/images/IFISA_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      keyBenefitsCards: [
        {
          icon: require("@/assets/images/IFISA_0.svg"),
          title: "Transfer in or start from scratch",
          text:
            "You can transfer your existing Cash or Stocks & Shares ISA into an IFISA, or you can start investing from a blank slate.",
        },
        {
          icon: require("@/assets/images/IFISA_1.svg"),
          title: "Invest up to £20,000 annually",
          text:
            "Everyone has a £20,000 tax-free allowance that can be invested each year into all forms of ISAs. This doesn’t include the transfer of ISA funds, or the interest earned in previous years.",
        },
        {
          icon: require("@/assets/images/IFISA_2.svg"),
          title: "High potential returns from P2P",
          text:
            "The returns with P2P ISAs are higher than with high street savings accounts because you are lending directly to borrowers. Unlike savings, P2P ISAs are not FSCS protected and your capital is at risk.",
        },
        {
          icon: require("@/assets/images/IFISA_3.svg"),
          title: "The new way to invest",
          text:
            "Prior to the introduction of the IFISA, P2P income had to be declared to HMRC via self-assessment, and hence tax was paid on it. This has changed thanks to IFISAs.",
        },
        {
          icon: require("@/assets/images/IFISA_4.svg"),
          title: "Hold multiple ISA types",
          text:
            "While you can only have one IFISA in a single tax year, you can pay into this alongside an existing Cash or Stocks & Shares ISA, up to the £20,000 allowance.",
        },
        {
          icon: require("@/assets/images/IFISA_5.svg"),
          title: "Top up now, invest later",
          text:
            "Just because cash is contained within your IFISA doesn’t mean you have to invest it all at once. You can top up your account, in line with your allowance, and invest later.",
        },
      ],

      faqs: [
        {
          question: "Can I invest tax-free via an ISA (or IFISA)?",
          answer:
            "Yes, you can invest tax-free by setting up a UOWN ISA, subject to annual allowances. You can also transfer in existing ISA pots.",
        },
        {
          question: "Can I transfer money in from another ISA provider?",
          answer:
            "Yes. You will be able to complete our online ‘Transfer in Form’ to transfer existing ISAs into a UOWN IFISA. You can find this function on your account under your ISA portfolio. Please note your provider may charge you a fee for transferring out.",
        },
        {
          question:
            "What is the difference between a cash, stocks and shares and Innovative Finance ISA?",
          answer:
            "Interest paid on a cash ISA is tax free and designed to be suitable for short term savings - less than 5 years. Interest is received on the savings at a fixed or variable rate. A stocks and shares ISA is designed to be a tax-efficient way to invest in shares and securities for five years or more, and when you want to share in the potential growth in stock markets. <br><br> The Innovative Finance ISA enables investors, using lending platforms, to receive tax-free interest over a range of time spans. Direct lending is when individuals lend to borrowers, usually through an online platform. Loan terms and lengths may vary depending on the specific provider.",
        },
        {
          question: "What happens if I go over my annual ISA allowance?",
          answer:
            'It is your individual responsibility as a lender to ensure you track how much of your annual ISA subscription you have utilised, and how many ISAs you have opened per tax year. If you realise you have overpaid, report it to HM Revenue & Customs. You can do this by calling their ISA helpline on 0300 200 3300. If you do not spot the error, HMRC will make contact with you. HMRC will identify the payment that breached the limit. It will then start the process of "repairing" the ISA. <br><br> All investments in the ISA that were made after the limit was breached will no longer be eligible for tax exemption. They will be handed back to the investor. An administration fee will be chargeable if you use more than your annual ISA allowance. If you attempt to make a deposit in your UOWN ISA account, of more than your annual ISA allowance, that entire sum will automatically be transferred to your UOWN standard lender account.',
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Innovative Finance ISA (IFISA)', link: this.$route.path },
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