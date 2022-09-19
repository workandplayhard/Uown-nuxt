<template>
  <div class="footer">
    <div class="upper container grid gap-y-20 sm:gap-x-12 py-16">
      <div>
        <NLink to="/">
          <img src="@/assets/images/logo-light.svg" alt class="w-32 mb-5" aria-label="logo light" width="1" height="1" />
        </NLink>
        <p
          class="text-white opacity-50 leading-7"
        >UOWN is a platform offering anyone the ability to invest and potentially earn money from property at the click of a button. Giving the ownership of UK property back to the people.</p>
        <div class="icons flex space-x-3 mt-8">
          <footerIcon
            :imgWebp="require('@/assets/images/fb.png?webp')"
            :img="require('@/assets/images/fb.png')"
            link="https://web.facebook.com/uownco?_rdc=1&_rdr"
          />
          <footerIcon
            :imgWebp="require('@/assets/images/instagram.png?webp')"
            :img="require('@/assets/images/instagram.png')"
            link="https://www.instagram.com/uownco"
          />
          <footerIcon
            :imgWebp="require('@/assets/images/linkedin.png?webp')"
            :img="require('@/assets/images/linkedin.png')"
            link="https://www.linkedin.com/company/uown.co"
          />
          <footerIcon
            :imgWebp="require('@/assets/images/fb-messenger.png?webp')"
            :img="require('@/assets/images/fb-messenger.png')"
            link="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F1625349364441897%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink"
          />
        </div>
      </div>
      <div class="links lg:flex items-start justify-between space-y-10 lg:space-y-0 lg:space-x-6">
        <div class="space-y-10">
          <footerLinks title="Invest" titleLink="/invest" :links="links" />
          <footerLinks title="property crowdfunding" titleLink="/invest/property-crowdfunding" :links="links2" />
          <footerLinks title="retirement investments" titleLink="/invest/retirement" :links="links3" />
        </div>
        <footerLinks title="borrow" titleLink="/borrow" :links="links4" />
        <footerLinks title="Help and Resources" :links="links5" />
        <div class="space-y-10">
          <footerLinks title="account" :links="links6" />
          <footerLinks title="legal info" :links="links7" />
        </div>
      </div>
    </div>
    <div class="lower text-white py-16">
      <div class="container space-y-5">
        <p
          class="opacity-50"
        >UOWN is a trading name of U Own Exchange Limited. UOWN, 3rd Floor, Northgate, 118 North Street, Leeds, LS2 7PN</p>
        <p
          class="opacity-50"
        >House prices can fall as well as rise and you may not get back all of the money you invest. Rates of return quoted on our website are estimates only and are not guaranteed. Investments are not protected under the Financial Services Compensation Scheme.</p>
        <nuxt-link
          to="/risk-statement"
          class="opacity-50 hover:opacity-100 transition-opacity duration-300 inline-block"
        >For more details please see our in depth risk statement.</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import footerIcon from "@/components/FooterIcon";
import footerLinks from "@/components/FooterLinks";

export default {
  components: {
    footerIcon,
    footerLinks,
  },

  data() {
    return {
      links: [
        {
          text: "Retirement Investments",
          link: "/invest/retirement",
        },
        {
          text: "P2P Investments",
          link: "/invest/p2p",
        },
        {
          text: 'Innovative Finance ISA (IFISA)',
          link: '/invest/ifisa'
        }
      ],
      links2: [
        {
          text: "Crowdfunded Property Developments",
          link: "/invest/property-crowdfunding/property-development",
        },
        {
          text: "Leeds Properties",
          link: "/invest/property-crowdfunding/leeds-properties",
        },
        {
          text: "Student Properties",
          link: "/invest/property-crowdfunding/student-properties",
        },
      ],
      links3: [
        {
          text: "SIPP",
          link: "/invest/retirement/sipp",
        },
        {
          text: "SSAS",
          link: "/invest/retirement/ssas",
        },
      ],
      links4: [
        {
          text: "Mezzanine Finance",
          link: "/borrow/mezzanine-finance",
        },
        {
          text: "Bridging Loans",
          link: "/borrow/bridging-loan",
        },
        {
          text: "Alternative Finance",
          link: "/borrow/alternative-finance",
        },
        {
          text: "New Build Developer Loans",
          link: "/borrow/new-developments",
        },
      ],
      links5: [
        {
          text: "Contact Us",
          link: "/contact",
        },
        {
          text: "Help Centre",
          link: "/help-centre",
        },
        {
          text: "The Hub",
          link: "/the-hub/1",
        },
      ],
      links6: [
        {
          text: "Login",
          link: "https://app.uown.co/login",
          outerLink: true,
        },
        {
          text: "Register",
          link: "https://app.uown.co/register",
          outerLink: true,
        },
      ],
      links7: [
        {
          text: "Terms & Conditions",
          link: "/terms-and-conditions",
        },
        {
          text: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          text: "Cookie Policy",
          link: "/cookie-policy",
        },
        {
          text: "MangoPay T&Cs",
          link:
            "https://www.mangopay.com/terms/end-user-terms-and-conditions/Mangopay_Terms-EN.pdf",
          outerLink: true,
        },
        {
          text: "Risk Statement",
          link: "/risk-statement",
        },
        {
          text: "Complaints",
          link: "/complaints",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.footer {
  background-color: $black;
}

.lower {
  background-color: #181818;

  &-link {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
}

@media (min-width: $sm) {
  .upper {
    grid-template-columns: 1fr 2.25fr;
  }
}
</style>