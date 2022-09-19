<template>
  <PolicyLayout heading="Cookie Policy" subheading="Information about our use of cookies.">
    <policiesPara
      text="Our Site uses cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to improve our Site. By continuing to browse the Site, you are agreeing to our use of Cookies."
    />
    <policiesPara
      text="A Cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive."
    />
    <policiesPara text="We use the following Cookies:" />
    <ul class="list-disc pl-5">
      <li>
        <policiesPara
          text="Strictly necessary Cookies <br>
These are Cookies that are required for the operation of our Site. They include, for example, Cookies that enable you to log into secure areas of our Site, use a shopping cart or make use of e-billing services."
        />
      </li>
      <li>
        <policiesPara
          text="Analytical/performance Cookies <br>
They allow us to recognise and count the number of visitors and to see how visitors move around our Site when they are using it. This helps us to improve the way our Site works, for example, by ensuring that users are finding what they are looking for easily."
        />
      </li>
      <li>
        <policiesPara
          text="Functionality Cookies <br>
These are used to recognise you when you return to our Site. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region)."
        />
      </li>
      <li>
        <policiesPara
          text="Targeting Cookies <br>
These cookies record your visit to our Site, the pages you have visited, and the links you have followed. We will use this information to make our Site and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose."
        />
      </li>
      <li>
        <div>
          <policiesPara
            text="You can block Cookies by activating the setting on your browser that allows you to refuse the setting of all or some Cookies. However, if you use your browser settings to block all Cookies (including essential Cookies) you may not be able to access all or parts of our Site. To find out more about Cookies, including how to see what Cookies have been set and how to manage and delete them, visit <a class='link-underlined' href='https://www.allaboutcookies.org/' target='_blank' rel='noreferrer'>allaboutcookies.org</a>"
          />
        </div>
      </li>
    </ul>
    <policiesPara
      text="You can find more information about the individual cookies we use and the purposes for which we use them as follows:"
    />
    <p class="text-2xl">Session Cookies</p>
    <policiesPara
      text="We use a session Cookie to remember your login for you and your Membership status. These we deem strictly necessary to the working of our Site. If these are disabled then various functionalities on our Site will be broken."
    />
    <p class="text-2xl">Google Analytics</p>
    <div>
      <policiesPara
        text="We use this to understand how the website is being used in order to improve the user experience. To opt out of being tracked by Google Analytics across all websites visit <a class='link-underlined' href='http://tools.google.com/dlpage/gaoptout' target='_blank' rel='noreferrer'>http://tools.google.com/dlpage/gaoptout</a>"
      />
    </div>
    <policiesPara
      text="Please note that third parties (including, for example, advertising networks and providers of external services like our payment gateway and payment management services) may also use Cookies, over which we have no control. These Cookies are likely to be analytical/performance Cookies or targeting Cookies."
    />
  </PolicyLayout>
</template>

<script>
const PolicyLayout = () => import("@/components/PolicyLayout");
const policiesPara = () => import("@/components/PoliciesPara");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'

export default {
  components: {
    PolicyLayout,
    policiesPara
  },

  head() {
    return {
      title: "Cookie Policy",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Our site uses cookies. This helps us to provide you with a good experience when you browse and also allows us to improve our site. Click to find out more."
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