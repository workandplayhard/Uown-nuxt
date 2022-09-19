export default {
   methods: {
      mouseScroll() {
         document.querySelector("#wrapper").addEventListener(
            "wheel",
            _.debounce(
               (event) => {
                  if (event.deltaY > 0) this.next();
                  else this.prev();
               },
               50,
               {
                  leading: true,
                  trailing: false,
               }
            ),
            { passive: true },
         );
      },
   }
}