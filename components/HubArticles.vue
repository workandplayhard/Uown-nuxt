<template>
  <div>
    <div class="hidden md:block ml-10">
      <HubCarousel
        bgColor="#71E5BD"
        category="Property"
        ind="1"
        :mock="PropertyData[0]"
      />

      <HubCarousel
        bgColor="#5A6ECC"
        category="Money"
        ind="2"
        :mock="PropertyData[1]"
      />
      <HubCarousel
        bgColor="#FFD008"
        category="Home & Lifestyle"
        ind="1"
        :mock="PropertyData[2]"
      />
      <HubCarousel
        bgColor="#FE8075"
        category="Causes"
        ind="2"
        :mock="PropertyData[3]"
      />
    </div>
    <div class="grid md:hidden grid-cols-1">
      <HubArticleCard bgColor="#71E5BD" category="Property" ind="1" />
      <HubArticleCard bgColor="#5A6ECC" category="Money" ind="2" />
      <HubArticleCard bgColor="#FFD008" category="Home & Lifestyle" ind="3" />
      <HubArticleCard bgColor="#FE8075" category="Causes" ind="4" />
    </div>
  </div>
</template>
<script>
import HubCarousel from "./HubCarousel.vue";
import HubArticleCard from "./HubArticleCard.vue";
export default {
  data() {
    return {
      PropertyData: [
        [
          {
            title: "Good contacts a landlord needs to have",
            link: "/the-hub/good-contacts-a-landlord-needs-to-have",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/markus-spiske-wFsbpYoGjOI-unsplash_tkuuh1.jpg"
          },
          {
            title: "Buying a Property At Auction",
            link: "/the-hub/buying-a-property-at-auction",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/buy-property_ycnhha.jpg"
          },
          {
            title: "Tips for selling your house",
            link: "/the-hub/tips-for-selling-your-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/homepage_about_graphic_fd1nux.png"
          },
          {
            title: "Is Property Still A Good Investment",
            link: "/the-hub/is-property-still-a-good-investment",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/r-architecture-2gDwlIim3Uw-unsplash_qdzlsw.jpg"
          },
          {
            title: "How To Build A Property Portfolio",
            link: "/the-hub/how-to-build-a-property-portfolio",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/UOWN_chancellors_war_on_buy_to_let_widescreen_pjz9u6.jpg"
          },
          {
            title: "Tips for Renting Out A Property For The First Time",
            link: "/the-hub/tips-for-renting-out-a-property-for-the-first-time",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/04_k1qsse.jpg"
          },
          {
            title: "How To Start A Property Business",
            link: "/the-hub/how-to-start-a-property-business",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/UOWN_chancellors_war_on_buy_to_let_widescreen_pjz9u6.jpg"
          },
          {
            title: "The Fastest-Growing Cities in The UK",
            link: "/the-hub/the-fastest-growing-cities-in-the-uk",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-374710_qyt2em.jpg"
          },
          {
            title: "A Guide To Buying Your Second Property",
            link: "/the-hub/a-guide-to-buying-your-second-property",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/bank-notes-1791583_ytcmef.jpg"
          },
          {
            title: "When is the Best Time to Sell a House?",
            link: "/the-hub/when-is-the-best-time-to-sell-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,w_510/v1/the-hub/icons8-team-dhZtNlvNE8M-unsplash_bcu47f.jpg"
          },
          {
            title: "How Much Money Do I Need To Invest In Property?",
            link: "/the-hub/how-much-money-do-i-need-to-invest-in-property",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/bank-notes-1791583_ytcmef.jpg"
          },
          {
            title: "Everything You Need To Know About HMO Investments",
            link: "/the-hub/everything-you-need-to-know-about-hmo-investments",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/henry-co-3coKbdfnAFg-unsplash_x4gg7e.jpg"
          },
          {
            title: "How To Get Into Property Development With No Money",
            link: "/the-hub/how-to-get-into-property-development-with-no-money",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/artem-labunsky-c9p30E94OUU-unsplash_wcv02d.jpg"
          },
          {
            title: "What Is Property Development",
            link: "/the-hub/what-is-property-development",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/randy-fath-ymf4_9Y9S_A-unsplash_m7jshg.jpg"
          },
          {
            title: "How Long Does It Take To Buy A House",
            link: "/the-hub/how-long-does-it-take-to-buy-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/how_long_to_sell_q6kpqc.jpg"
          },
          {
            title: "Questions To Ask Prospective Tenants",
            link: "/the-hub/questions-to-ask-prospective-tenants",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/questions_cekzt6.jpg"
          },
          {
            title: "How To Make A Rental Inventory",
            link: "/the-hub/how-to-make-a-rental-inventory",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/inventory_gdfbyj.jpg"
          },
          {
            title: "What is a sitting tenant?",
            link: "/the-hub/what-is-a-sitting-tenant",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/sitting_jqezdq.jpg"
          },
          {
            title: "Why the North is the new South for property investors?",
            link:
              "/the-hub/why-the-north-is-the-new-south-for-property-investors",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/house_1_dofdsa.jpg"
          },
          {
            title: "Why millennials love property crowdfunding",
            link: "/the-hub/why-millennials-love-property-crowdfunding",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-1011329_scjvjh.jpg"
          },
          {
            title: "Saving-for-your-first-deposit",
            link: "/the-hub/saving-for-your-first-deposit",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-3_n8letc.jpg"
          }
        ],
        [
          {
            title: "Are Flats A Good Investment?",
            link: "/the-hub/are-flats-a-good-investment",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-life-of-pix-2459_mdyud0.jpg"
          },
          {
            title: "Costs To Consider When Buying A House",
            link: "/the-hub/costs-to-consider-when-buying-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-burak-kebapci-187041_hsyvu6.jpg"
          },
          {
            title: "What Is A Good Rental Yield?",
            link: "/the-hub/what-is-a-good-rental-yield",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/mufid-majnun-LVcjYwuHQlg-unsplash_oqwugz.jpg"
          },
          {
            title: "A Guide To Long Term Investments",
            link: "/the-hub/a-guide-to-long-term-investments",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/morgan-housel-X_fbh4Utwk4-unsplash_axgnbe.jpg"
          },
          {
            title: "How much should I charge for rent",
            link: "/the-hub/how-much-should-i-charge-for-rent",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/rent_xqlm7q.jpg"
          },
          {
            title: "What Are Asset Classes And Why Are They Important?",
            link: "/the-hub/what-are-asset-classes-and-why-are-they-important",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-1011329_scjvjh.jpg"
          },
          {
            title: "Understanding The Different Types Of Mortgages",
            link: "/the-hub/understanding-the-different-types-of-mortgages",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/bank-notes-1791583_ytcmef.jpg"
          },
          {
            title: "Why You Should Invest In Student Property",
            link: "/the-hub/why-you-should-invest-in-student-property",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/people-woman-coffee-meeting_eu7wp5.jpg"
          },
          {
            title: "Why crowdfunding is a great idea!",
            link: "/the-hub/why-crowdfunding-is-a-great-idea",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-919436_u6quhe.jpg"
          },
          {
            title: "The Top 20 Side Hustles To Earn Some Extra Money",
            link: "/the-hub/the-top-20-side-hustles-to-earn-some-extra-money",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/homepage_about_graphic_fd1nux.png"
          },
          {
            title: "Seth: The First-Time Investor",
            link: "/the-hub/testimonial-seth-the-first-time-investor",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/seth_woirmq.jpg"
          },
          {
            title: "Joe: The Young Saver",
            link: "/the-hub/testimonial-joe-the-young-saver",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/joe_ee4xmb.jpg"
          },
          {
            title: "Leeds Investment Case",
            link: "/the-hub/leeds-investment-case",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/people-woman-coffee-meeting_eu7wp5.jpg"
          }
        ],
        [
          {
            title: "House Viewing Tips",
            link: "/the-hub/house-viewing-tips",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/house-interior_rzaysl.jpg"
          },
          {
            title: "Are Short Term Lets Worth It?",
            link: "/the-hub/are-short-term-lets-worth-it",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/rent_xqlm7q.jpg"
          },
          {
            title: "How To Add Value To A House",
            link: "/the-hub/how-to-add-value-to-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/henry-co-3coKbdfnAFg-unsplash_x4gg7e.jpg"
          },
          {
            title: "Questions To Ask When Buying A House",
            link: "/the-hub/questions-to-ask-when-buying-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-3_n8letc.jpg"
          },
          {
            title: "Should I Buy A House?",
            link: "/the-hub/should-i-buy-a-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/business_man_yidrop.jpg"
          },
          {
            title: "Can I Rent Out My House?",
            link: "/the-hub/can-i-rent-out-my-house",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/rent_xqlm7q.jpg"
          },
          {
            title: "The World's Best Student Accomodation",
            link: "/the-hub/the-worlds-best-student-accomodation",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/2_lvac94.jpg"
          },
          {
            title: "The Student Rental Market",
            link: "/the-hub/the-student-rental-market",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-2_z0huqx.jpg"
          },
          {
            title: "How To Help Prepare Your Child For University",
            link: "/the-hub/how-to-help-prepare-your-child-for-university",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-356086_ajkhbq.jpg"
          },
          {
            title: "Homes of the Rich and Famous",
            link: "/the-hub/home-of-the-rich-and-famous",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-87378_zabdjc.jpg"
          },
          {
            title: "Five ways monopoly is nothing like property investing",
            link:
              "/the-hub/five-ways-monopoly-is-nothing-like-property-investing",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-5_lagxxm.jpg"
          },
          {
            title: "Buy-to-Let Changes",
            link: "/the-hub/buy-to-let-changes",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-6_l2uekv.jpg"
          }
        ],
        [
          {
            title: "Why We Should Contribute To Housing In Malawi",
            link: "/the-hub/why-we-should-contribute-to-housing-in-malawi",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/BP1_Hero_ifgbbr.jpg"
          },
          {
            title: "Our Charity Partner on the Ground in Malawi",
            link: "/the-hub/our-charity-partner-on-the-ground-in-malawi",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/BP2_Hero_ca4lun.jpg"
          },
          {
            title: "Homes of the Rich and Famous",
            link: "/the-hub/homes-of-the-rich-and-famous",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/pexels-photo-87378_zabdjc.jpg"
          },
          {
            title: "Five ways monopoly is nothing like property investing",
            link:
              "/the-hub/five-ways-monopoly-is-nothing-like-property-investing",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-5_lagxxm.jpg"
          },
          {
            title: "Buy-to-Let Changes",
            link: "/the-hub/buy-to-let-changes",
            img_url:
              "https://res.cloudinary.com/uown-sd/image/upload/c_fill,f_auto,h_720,q_40/v1/the-hub/Foto-6_l2uekv.jpg"
          }
        ]
      ]
    };
  },
  components: { HubCarousel, HubArticleCard }
};
</script>
