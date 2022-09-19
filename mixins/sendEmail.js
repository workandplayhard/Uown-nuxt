import AWS from "aws-sdk";
import formToGoogleSheetMixin from './formToGoogleSheet'

let formToGoogleSheet = formToGoogleSheetMixin.methods.formToGoogleSheet

export default {
  methods: {
    sendEmail() {
      this.loading = true

      const SESConfig = {
        apiVersion: "2010-12-01",
        accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
        region: process.env.AWS_SES_REGION,
      };

      var params = {
        Destination: {
          ToAddresses: ["anything@uown.co"],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<div style='font-size: 15px; color: #555'>${this.messageToSend}</div>`,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Thanks for registering your interest.",
          },
        },
        Source: "sam@uown.co",
      };

      var sendPromise = new AWS.SES(SESConfig).sendEmail(params).promise();

      sendPromise
        .then((data) => {
          // console.log(data.MessageId);
          this.success = true
          this.error = false
        })
        .catch((err) => {
          console.error(err, err.stack);
          this.success = false
          this.error = true
        })
        .finally(() => {
          this.loading = false
          this.emitSuccessStatus()
        });
      formToGoogleSheet('https://script.google.com/a/macros/uown.co/s/AKfycbzTeylxxDc4BwXSpTigHAPQ2rJuBK9tGGCPilQs6Qc5oHmAmfQpOC5faQ/exec', 'product-not-available')
    },
  },

  computed: {
    messageToSend() {
      return `${this.email} was interested in ${this.$store.state.pageTitle}`
    },
  },
}