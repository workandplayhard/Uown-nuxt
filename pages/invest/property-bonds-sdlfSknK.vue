<template>
  <div>
    <!-- <textImgEllipse
      title="Property Bonds"
      btnText="Learn more"
      btnLink="#"
      :imgWebp="require('@/assets/images/PROP_BONDS_RENDER.png?webp')"
      :img="require('@/assets/images/PROP_BONDS_RENDER.png')"
      :imgLazyLoad="false"
      :imgScale="1.1"
      class="mt-from-header"
    >
      <bigP
        text="Do you want a secure and passive investment opportunity that avoids some of the volatility and complexity of other investments?"
      />
      <bigP
        text="Get into asset-backed lending and use the UOWN platform to invest in property bonds."
      />
    </textImgEllipse>
    <S2
      :icon="require('@/assets/images/PROPERTY_BONDS_6.svg')"
      title="A low-risk way to make money"
      class="mb-8"
    >
      <p
        class="max-w-2xl"
      >Property bonds are a way for investors to earn returns while taking none of the risks associated with property development, simply by partnering with UOWN.</p>
      <p>
        All made possible by the
        <NLink to="#">power of the crowd.</NLink>
      </p>
    </S2>
    <TextImgEllipse
      title="What is a property bond?"
      btnText="Learn more"
      btnLink="#"
      :imgWebp="require('@/assets/images/PROP_BONDS_1_SUB_RENDER.png?webp')"
      :img="require('@/assets/images/PROP_BONDS_1_SUB_RENDER.png')"
      textLeft
      class="mb-20"
      :imgScale="1.5"
    >
      <p
        class="text-xl"
      >Also known as a property investment bond, this is a way for investors to earn money by offering a loan to a property developer.</p>
      <p
        class="text-xl"
      >We make a fixed agreement with the developer on the interest rate, how the loan is secured and when the loan will be repaid.</p>
    </TextImgEllipse>
    <SectionOne
      title="Key benefits of Property Bonds"
      para="Property investment bonds are simple to understand and come with a range of benefits, including the certainty of knowing you will receive fixed, regular income."
      :mainIcon="require('@/assets/images/PROPERTY_BONDS_main.svg')"
      :cards="$store.state.sectionOne.keyBenefitsCards"
      class="bg-light"
    />
    <textImgW
      title="Why you should invest in property bonds with UOWN"
      :imgWebp="require('@/assets/images/PROP_BONDS_3_SUB_RENDER.png?webp')"
      :img="require('@/assets/images/PROP_BONDS_3_SUB_RENDER.png')"
      btnText="Get a free account"
      btnLink="https://app.uown.co/register"
      btnOuterLink
      btnUnderText="Capital at risk."
      textRight
      :imgScale="2.75"
      class="sm:-mt-32 -mb-20"
    >
      <p
        class="text-xl"
      >Joining the power of the crowd with UOWN can bring some amazing benefits, such as:</p>
      <ul class="list-disc text-xl pl-4 mb-4 space-y-3">
        <li>We have a strong track record of providing credible and profitable investment opportunities.</li>
        <li>We carry out due diligence on all our potential developers.</li>
        <li>With the many other investment opportunities available on the UOWN platform you can quickly and securely build a diverse portfolio.</li>
      </ul>
    </textImgW>
    <Faqs title="Property Bonds FAQs." :faqs="faqs.propertyBonds" class="mb-12" /> -->
  </div>
</template>

<script>
const textImgEllipse = () => import("@/components/TextImgEllipse");
const S2 = () => import("@/components/SectionTwo");
const TextImgEllipse = () => import("@/components/TextImgEllipse");
const SectionOne = () => import("@/components/SectionOne");
const Faqs = () => import("@/components/Faqs");
const bigP = () => import("@/components/BigP");
const textImgW = () => import("@/components/TextImgW");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'

export default {
  components: {
    textImgEllipse,
    S2,
    TextImgEllipse,
    SectionOne,
    Faqs,
    bigP,
    textImgW,
  },

  head() {
    return {
      title: "Property Investment Bonds | Asset Backed Lending",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Invest in property bonds with UOWN today. Get started from as little as £1 through our property crowdfunding platform. Register and pick your investments today.",
        },
      ],
      link: [ { href: this.fullCanonicalURL, rel: 'canonical' } ],
    };
  },

  data() {
    return {
      faqs: [
        {
          question: 'How long have UOWN been operating?',
          answer: 'UOWN has been operating since 2016.'
        },
        {
          question: 'When do I get my capital and interest back?',
          answer: 'You will get your capital and interest back at the end of the project, when the borrower has completed their designated exit. If the borrower repays early, you will receive either your original capital and interest, or your capital and a calculated partial repayment of your interest depending on the contractual arrangement of the project.'
        },
        {
          question: 'What are the minimum and maximum investments?',
          answer: 'You can invest as little as £1 and there’s no maximum amount.'
        },
        {
          question: 'Do you charge a fee for buying or selling shares?',
          answer: 'We only charge a fee for buying shares. There is a 2% fee on every share bought through UOWN, which is added to the cost of buying a share in a property, and is paid by the buyer upon purchasing the share.'
        },
      ]
    }
  },

  mixins: [fullCanonicalURL]
};
</script>

<style>
</style>