<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1"
    />
    <textImgW2
      title="Property Financing"
      para="We have industry experts available to help with property development funding, and we have a range of finance products that can be tailored to suit you and your development project."
      :imgOptions="{
        sourceWebp: require('@/assets/images/FORM_HERO_RENDER.png?webp'),
        source: require('@/assets/images/FORM_HERO_RENDER.png'),
        lazyLoad: false,
        scale: 1.3
      }"
      btnText="Apply now"
      textRight
      btnNotLink
      scrollTo="scroll"
      isHero
      class="mb-16"
    ></textImgW2>
    <lottie
      title="UOWN is a trusted partner,
        <br />experienced developer,
        <br />and a transparent platform."
      :cardsContent="lottieCardsContent1"
    />
    <div class="mt-16">
      <s2
        :icon="require('@/assets/images/PROPERTY_FINANCING_1.svg')"
        title="Development financing made simple"
      >
        <p>
          We know that the UK needs properties and there are people wanting to
          develop them. So let us be the link that brings all this together and
          introduces practical property development funding to property
          developers.
        </p>
        <p>
          All made possible by the
          <nuxt-link to="#">power of the crowd</nuxt-link>.
        </p>
      </s2>
    </div>
    <SectionCenterBorder :content="sectionCenterBorderContent" />
    <div class="my-16">
      <lottie
        title="The facts and figures of our typical deals"
        :cardsContent="lottieCardsContent2"
      />
    </div>
    <div class="sm:-mt-32">
      <TextImgU
        title="How UOWN can fund your property development"
        :imgOptions="{
          source: 'FORM_1_SUB_RENDER_rm1ef4.png',
          scale: 1.2
        }"
        btnText="Learn more"
        textLeft
        btnNotLink
        scrollTo="scroll"
      >
        <p class="text-xl">
          UOWN can replace various traditional means of property development
          financing and we can offer the right package to suit your development.
        </p>
        <ul
          class="list-disc pl-5 text-xl flex flex-col items-start space-y-4 mb-5"
        >
          <li class="opacity-75 link-underlined">
            <NLink to="/borrow/bridging-loan">Bridging loans</NLink>
          </li>
          <li class="opacity-75 link-underlined">
            <NLink to="/invest/p2p">Peer-to-peer lending</NLink>
          </li>
          <li class="opacity-75 link-underlined">
            <NLink to="/borrow/alternative-finance">Alternative finance</NLink>
          </li>
          <li class="opacity-75 link-underlined">
            <NLink to="/borrow/mezzanine-finance">Mezzanine finance</NLink>
          </li>
          <li class="opacity-75 link-underlined">
            <NLink to="/invest/property-crowdfunding">Equity finance</NLink>
          </li>
        </ul>
      </TextImgU>
    </div>
    <div class="-mt-16 sm:-mt-64">
      <TextImgW
        title="Flexible property financing options"
        :imgWebp="require('@/assets/images/FORM_2_SUB_RENDER.png?webp')"
        img="FORM_2_SUB_RENDER_peopxl.png"
        btnText="Apply now"
        textRight
        :imgScale="1.15"
        btnNotLink
        scrollTo="scroll"
      >
        <p class="text-xl">
          We understand that you need additional finance for your project, but
          that everyone’s circumstances are different.
        </p>
        <p class="text-xl">
          If the basics sound right, we can talk to you and work out the best
          way to fund your development. We can be flexible on:
        </p>
        <ul class="list-disc pl-5 text-xl mb-5 space-y-3">
          <li>
            The project type. We can fund refurbishments and new developments.
          </li>
          <li>Property development loan size.</li>
          <li>Property value.</li>
          <li>
            Structure of funding and what percentage the borrower contributes.
          </li>
        </ul>
      </TextImgW>
    </div>
    <titleParas
      title="Let the crowd carry your development forward."
      para="Funding is available for new build projects on land you have to develop or for heavy refurb opportunities where you need extra finance quickly. <br><br> In scenarios where a developer has land, it is strongly preferred that all planning permission and the necessary legal obstacles have already been taken care of. <br><br> So if you complete the form to request your funding, we can start talking straight away, and you can let the power of the crowd take you where you want to go."
      id="scroll"
    />
    <appForm />
    <faqs title="Property finance FAQs." :faqs="faqs" />
  </div>
</template>

<script>
const textImgW2 = () => import("@/components/TextImgW2");
const lottie = () => import("@/components/LottieCardsSection");
const s2 = () => import("@/components/SectionTwo");
const SectionCenterBorder = () => import("@/components/SectionCenterBorder");
const TextImgU = () => import("@/components/TextImgU");
const TextImgW = () => import("@/components/TextImgW");
const titleParas = () => import("@/components/TitleParas");
const faqs = () => import("@/components/Faqs");
const appForm = () => import("@/components/AppForm");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from "vue-lazy-hydration";
import breadcrumbList from "@/mixins/breadcrumbList";
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgW2,
    lottie: hydrateWhenVisible(lottie),
    s2: hydrateWhenVisible(s2),
    SectionCenterBorder: hydrateWhenVisible(SectionCenterBorder),
    TextImgU: hydrateWhenVisible(TextImgU),
    TextImgW: hydrateWhenVisible(TextImgW),
    titleParas: hydrateWhenVisible(titleParas),
    faqs: hydrateWhenVisible(faqs),
    appForm: hydrateWhenVisible(appForm),
    Breadcrumbs: () => import("@/components/Breadcrumbs"),
  },

  head() {
    return {
      title: "Property Development Finance UK",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN make it simple for property developers to secure the finance they need, without jumping through hoops with banks. Easy application. Fast decisions.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/W.svg"),
          rel: "preload",
          as: "image",
        },
        {
          href: require("@/assets/images/FORM_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      sectionCenterBorderContent: [
        {
          icon: require("@/assets/images/PROPERTY_FINANCING_2.svg"),
          title: "Strength in numbers",
          text:
            "Our crowdfunders have bought into this because the power of the crowd makes property investing more accessible and allows for diversification.",
        },
        {
          icon: require("@/assets/images/PROPERTY_FINANCING_3.svg"),
          title: "Flexible financing",
          text:
            "Whether it’s your first development project or part of a wider portfolio, we have flexible and structured options.",
        },
        {
          icon: require("@/assets/images/PROPERTY_FINANCING_4.svg"),
          title: "Engaged Investors",
          text:
            "There is no need to involve and pay for a broker to agree the loan for you, UOWN has all the information and can deal with all the necessary application processes.",
        },
        {
          icon: require("@/assets/images/PROPERTY_FINANCING_5.svg"),
          title: "We do the hard work",
          text:
            "UOWN is always available to answer questions, provide information and offer guidance. We are not a faceless bank and you will be in direct contact with us.",
        },
      ],

      faqs: [
        {
          question: "What sort of projects does UOWN finance?",
          answer:
            "New build, self-build, commercial to residential conversion, HMOs, serviced accommodation conversion, extension and refurbishment, title splits, bridging purchases, auction purchases amongst others.",
        },
        {
          question:
            "Do investors get any equity or share of profits from projects?",
          answer:
            "This depends on how we structure the deal. We offer loans where investors do not get any equity or share directly in the profit from your project and returns will be in the form of interest on the capital loaned. <br><br> Equity deals can be structured so that investors get a proportional share of the profits from the project or a fixed return. This return will most likely be paid in the form of dividends.",
        },
        {
          question:
            "Do I need to be an experienced investor/developer to list a project through UOWN?",
          answer:
            "Experiential knowledge is invaluable in the property market. At UOWN, we focus on the potential of every project. This is why our team of experts appraise projects and those running them to determine the creditworthiness of the company and ability to repay. Thus, we prefer to list projects that have experienced developers undertaking them.",
        },
        {
          question:
            "What factors do you consider when deciding whether or not a development should be listed on the UOWN platform?",
          answer:
            "As a duty of care to protect our borrowers, we ensure that all projects comply with FCA (Financial Conduct Authority) regulations. We also carefully assess every project contextually and against KPIs (Key Performance Indicators). <br><br> We require all our projects to have planning permission. We assess projects based on key performance factors such as the Profit on Cost, Loan to GDV, Loan to Value and Loan to Cost and the returns we can give to our investors.",
        },
      ],

      breadcrumbs: [{ text: "Property Financing", link: this.$route.path }],
    };
  },

  inject: ["lottieCardsContent1", "lottieCardsContent2"],

  mixins: [fullCanonicalURL, breadcrumbList, faqSchema],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>