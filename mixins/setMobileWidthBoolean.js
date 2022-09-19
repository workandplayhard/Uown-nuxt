const setMobileWidthBoolean =  {
   methods: {
      setMobileWidthBooleanMixin() {
         if(process.client) {
            var mql = window.matchMedia("(min-width: 640px)");
   
            var screenTest = (e) => {
               if (e.matches) {
                  this.setMobileWidthBoolean(false);
               } else {
                  this.setMobileWidthBoolean(true);
               }
            };
   
            mql.addEventListener('change', screenTest);
            window.addEventListener("DOMContentLoaded", screenTest(mql));
         }
      }
   }
}

export { setMobileWidthBoolean as setMobileWidthBooleanMixin }