export default {
   computed: {
      faqSchema() {
         return {
            type: "application/ld+json",
            json: {
               "@context": "https://schema.org",
               "@type": "FAQPage",
               mainEntity: this.faqs.map((e) => ({
                  "@type": "Question",
                  name: e.question,
                  acceptedAnswer: {
                     "@type": "Answer",
                     text: e.answer,
                  },
               })),
            },
         };
      },
   },
}