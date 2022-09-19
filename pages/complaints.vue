<template>
  <layout title="Complaints">
    <div class="space-y-3 mt-4">
      <para
        text="If you feel dissatisfied with any aspect of our service, then in the first instance please contact UOWN on (020) 3504 5678 or complaints@uown.co. We will immediately carry out an independent investigation of your complaint and will provide a written response."
      />
      <para
        text="If we are unable to resolve your complaint to your satisfaction and you are an eligible complainant as defined by the Financial Conduct Authority (that is to say, an individual consumer, a micro-enterprise [a commercial enterprise which employs fewer than 10 people and has a turnover or annual balance sheet that does not exceed €2 million], a charity with an annual income of under £1 million, a trustee of a trust having a net asset value of under £1 million, or a borrower under a consumer buy-to-let agreement, then you will have recourse to the Financial Ombudsman Service. "
      />
      <para
        text="From 1st April 2019, the following category of complainant will also become eligible to use the Financial Ombudsman Service; small and medium-sized enterprises (SMEs) having an annual turnover of under £6.5m and either fewer than 50 employees or an annual balance sheet total of under £5m. "
      />
      <para text="Details of the Financial Ombudsman Service are:" />
      <para text />
      <para text="The Financial Ombudsman Service" />
      <para text="Exchange Tower, Harbour Exchange" />
      <para text="London E14 9SR‍" />
      <para
        text="<a href='mailto:complaint.info@financial-ombudsman.org.uk'>complaint.info@financial-ombudsman.org.uk</a>"
      />
      <para text="<a href='tel:02079641000'>020 7964 1000 (switchboard)</a>" />
      <para
        text="<a href='tel:+442079641000'>+44 20 7964 1000 (for calls from outside the UK)</a>"
      />
      <para text="<a href='tel:02079641001'>020 7964 1001 (main fax)</a>" />
      <para text="<a href='tel:08000234567'>0800 023 4 567</a>" />
      <para text="Calls to this number are now free on mobile phones and landlines" />
      <para text="<a href='tel:03001239123'>0300 123 9 123</a>" />
      <para text="Calls to this number cost no more than calls to 01 and 02 numbers" />
    </div>
  </layout>
</template>

<script>
const layout = () => import("@/components/ContactComplaintsLayout");
const para = () => import("@/components/PoliciesPara");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'

export default {
  components: {
    layout,
    para
  },

  head() {
    return {
      title: "Complaints",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Have a complaint? Get in touch - we will do our best to help resolve it, we love to help. Click to contact us now."
        }
      ],
      link: [ { href: this.fullCanonicalURL, rel: 'canonical' } ]
    };
  },

  mixins: [fullCanonicalURL]
};
</script>

<style>
</style>