export default {
   computed: {
      fullCanonicalURL() {
         let path = this.$route.path
         if(path.endsWith('/'))
            path = path.slice(0, -1)
         return `${this.$store.state.canonicalURL}${path}`
      }
   }
}