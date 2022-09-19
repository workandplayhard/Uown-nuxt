<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <textImgU
      title="Alternative Finance"
      btnText="Apply now"
      :imgOptions="{
        source: require('@/assets/images/ALTERNATIVE_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/ALTERNATIVE_HERO_RENDER.png?webp'),
        scale: 0.9,
        translateX: 8,
        lazyLoad: false
      }"
      isHero
      btnNotLink
      scrollTo="scroll"
    >
      <bigP
        text="Do you need finance to continue with your property development plans, but you are struggling to convince the mainstream banks to invest in you? Our alternative finance service can help."
      />
    </textImgU>
    <LazyHydrate when-visible>
      <lottie
        title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s2
        :icon="require('@/assets/images/ALTERNATIVE_1.svg')"
        title="Alternative finance to kick-start your property development."
        class="mt-16 mb-10"
      >
        <p>
          Alternative finance is an innovative and fresh-thinking way for property
          developers to gain access to the vital funding sources that make
          development projects possible.
        </p>
        <p>
          All made possible by the
          <NLink to="#">power of the crowd</NLink>.
        </p>
      </s2>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgEllipse
        title="What is alternative finance?"
        btnText="Apply now"
        :imgOptions="{
          source: 'ALT_1_SUB_RENDER_ba4wmt.png',
          scale: 1.6,
          translateX: 3
        }"
        textLeft
        btnNotLink
        scrollTo="scroll"
      >
        <p class="text-xl">
          Alternative finance is a range of products that reside outside the
          domain of conventional banking.
        </p>
        <p class="text-xl">
          These products provide new avenues through which businesses and
          individuals can get access to funding, free from the restrictive
          criteria and inhibitive costs of the high street banks.
        </p>
      </textImgEllipse>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        title="Why is alternative finance helpful?"
        btnText="Apply now"
        :imgOptions="{
          source: 'ALT_2_SUB_RENDER_id13ow.png'
        }"
        class="mt-4 sm:mt-0"
        btnNotLink
        scrollTo="scroll"
      >
        <p class="text-xl">
          In property development you can be faced with a number of scenarios
          where you need finance quickly, but your circumstances may mean that you
          don’t qualify as a credible investment vehicle for a traditional bank.
        </p>
        <p class="text-xl">
          Alternative finance is ideal for those who need cash quickly but don’t
          want to have to jump through hoops or pay extortionate fees and interest
          rates to get it.
        </p>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SectionCenterBorderExtended
        :icon="require('@/assets/images/ALTERNATIVE_2.svg')"
        title="UOWN’s alternative finance methods."
        :blocks="financeMethods"
        class="-mt-20"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <heading
        text="What makes our alternative finance different."
        class="container max-w-4xl text-center my-16"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <SectionCenterBorder :content="whatMakesDifferent" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <lottie
        title="The facts and figures of our typical deals"
        :cardsContent="lottieCardsContent2"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <titleParas
        title="Apply for alternative finance."
        para="Funding is available for your property development projects where you need extra finance quickly. <br><br> In scenarios where a developer has land, it is strongly preferred that all planning permission and the necessary legal obstacles have already been taken care of. <br><br> So if you want to see what we can do for you, complete the form, we can start talking straight away, and you can let the power of the crowd take you where you want to go."
        id="scroll"
        class="mt-10"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <appForm />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <faqs title="Alternative finance FAQs." :faqs="faqs" />
    </LazyHydrate>
    <!-- <emailPopup2 /> -->
  </div>
</template>

<script>
const textImgU = () => import("@/components/TextImgU");
const bigP = () => import("@/components/BigP");
const lottie = () => import("@/components/LottieCardsSection");
const s2 = () => import("@/components/SectionTwo");
const textImgEllipse = () => import("@/components/TextImgEllipse");
const SectionCenterBorderExtended = () =>
  import("@/components/SectionCenterBorderExtended");
const heading = () => import("@/components/Heading");
const SectionCenterBorder = () => import("@/components/SectionCenterBorder");
const titleParas = () => import("@/components/TitleParas");
const appForm = () => import("@/components/AppForm");
const faqs = () => import("@/components/Faqs");
// const emailPopup2 = () => import("@/components/EmailPopup2");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import LazyHydrate from "vue-lazy-hydration";
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgU,
    bigP,
    lottie,
    s2,
    textImgEllipse,
    SectionCenterBorderExtended,
    heading,
    SectionCenterBorder,
    titleParas,
    appForm,
    faqs,
    LazyHydrate,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup2,
  },

  head() {
    return {
      title: "Alternative Finance for Property Developers",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN offer alternative finance to property developers who need finance but don't want to jump through hoops with banks. Apply now for a fast decision.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        { href: require('@/assets/images/rounded-box-2-gray.svg'), rel: "preload", as: "image" },
        {
          href: require("@/assets/images/ALTERNATIVE_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      financeMethods: [
        {
          title: "Peer-to-peer lending (P2P)",
          text:
            "The UOWN platform connects property developers wanting money with investors who are wanting to invest and earn a return. UOWN is the middle-man who ensures investors are pre-screened and developers execute their project properly.",
          link: "/invest/p2p",
        },
        {
          title: "Property crowdfunding",
          text:
            "UOWN can arrange equity deals, where investors can use their money to buy equity in a development venture, the investors then receive a share of the profits when the development is finished.",
          link: "/invest/property-crowdfunding",
        },
      ],

      whatMakesDifferent: [
        {
          icon: require("@/assets/images/ALTERNATIVE_3.svg"),
          title: "Speedy application",
          text:
            "UOWN uses a fast application process, which is simple, straight-forward and available to anyone.",
        },
        {
          icon: require("@/assets/images/ALTERNATIVE_4.svg"),
          title: "Primed investors",
          text:
            "We have a legion of investors who have a track record of raising funds for property development opportunities of all types and sizes.",
        },
        {
          icon: require("@/assets/images/ALTERNATIVE_5.svg"),
          title: "No need for brokers",
          text:
            "There is no need to involve and pay for a broker to agree the loan for you, UOWN has all the information and can deal with all the necessary application processes.",
        },
        {
          icon: require("@/assets/images/ALTERNATIVE_6.svg"),
          title: "Friendly and approachable",
          text:
            "UOWN is always available to answer questions, provide information and offer guidance. We are not a faceless bank and you will be in direct contact with us.",
        },
      ],

      faqs: [
        {
          question:
            "Is there a limit on how much a developer can borrow through UOWN?",
          answer: "We aim to loan between £25,000 and £5 million per project.",
        },
        {
          question: "What security will I need to offer you?",
          answer:
            "We can organise projects via equity or debt. We take a charge on all our projects to protect both our borrowers and lenders. On equity projects we also have step in rights to be able to try and recoup value from a project and to take over the running of the project to see it through to the best conclusion possible for our investors.",
        },
        {
          question: "What happens if I can't repay?",
          answer:
            "UOWN takes a legal charge over the property and therefore has the right to repossess in debt funded projects. In the case of equity based deals we have step in rights to be able to try and recoup value from a project and to take over the running of the project to see it through to the best conclusion possible for our investors. <br><br> This measure will only be used as a last resort and we will work with you to find acceptable repayment methods or help complete the project. If you show no signs of reasonably being able to repay the loan or deliver the project then your property could be at risk of repossession. Please refer to our risk statement.",
        },
        {
          question:
            "Do investors get any equity or share of profits from projects?",
          answer:
            "This depends on how we structure the deal. We offer loans where investors do not get any equity or share directly in the profit from your project and returns will be in the form of interest on the capital loaned. <br><br> Equity deals can be structured so that investors get a proportional share of the profits from the project or a fixed return. This return will most likely be paid in the form of dividends.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Financing', link: '/borrow' },
        { text: 'Alternative Finance', link: this.$route.path }
      ]
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