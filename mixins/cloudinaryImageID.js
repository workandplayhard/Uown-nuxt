export default {
   methods: {
      cloudinaryImageID(imgURL) {
         let str = imgURL
         str = str.split('/')
         str = str[str.length - 1]
         return `the-hub/${str}`
       }
   }
}