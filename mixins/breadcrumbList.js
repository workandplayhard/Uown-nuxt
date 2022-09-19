export default {
   computed: {
      breadcrumbList() {
         const items = this.breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            item: {
               "@id": item.link,
               name: item.text,
            },
         }));

         items.unshift({
            "@type": "ListItem",
            position: 1,
            item: {
               "@id": "/",
               name: "Home",
            },
         });

         return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items,
         };
      }
   }
}