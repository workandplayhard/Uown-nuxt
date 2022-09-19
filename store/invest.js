export const state = () => ({
  currentSection: 0,
  totalSections: 7,
  currentCarouselTwoSlide: 0,
  sectionCirclesOneCurrentSlide: -1,
  sectionCirclesTwoCurrentSlide: -1,
  sectionFiveCurrentSlide: 0,
  mobileWidth: '',
  // scrollPosition: 'top',
  // sectionTwoOverflow: true,

  circlesSection1: [
    { value: "£5.1m", bg: "#d0d0d0", li: "Projects with a total GDV of £5.1m", valueScale: .75, scale: 1.125, },
    {
      value: "15%",
      bg: "#5a6ecc",
      valueScale: .75,
      scale: 1.125,
      li: "15.29% average project return AFTER all fees.",
      has1: true,
    },
    {
      value: "10",
      bg: "#70e4bc",
      valueScale: .75,
      scale: 1.125,
      li: "10 month average project length."
    }
  ],

  circlesSection2: [
    { value: "£217k", bg: "#d0d0d0", li: "£217,000 of rent paid to investors.", valueScale: .75, scale: 1.125, },
    {
      value: "5.2%",
      bg: "#fc4c4c",
      scale: 1.125,
      li: "5.25% average rental return AFTER all fees.",
      has1: true,
      valueScale: .75
    },
    {
      value: "5%",
      bg: "#5a6ecc",
      scale: 1.125,
      valueScale: .75,
      li: "5.2% average annual capital appreciation.",
      has1: true
    }
  ],

  carouselTwoSlides: [
    {
      id: 0,
      heading: "What makes UOWN special?",
      text:
        "Our goal is to break down the unnecessarily complex property market into something that’s simple and works for all of us.",
    },
    {
      id: 1,
      heading: "Quick and easy.",
      text:
        "Our whole process is built around simplicity. We aim to be frictionless for both investors and developers.",
    },
    {
      id: 2,
      heading: "Sit back and relax.",
      text:
        "Our background is in property. We have all the skills, knowledge and expertise to take care of the details.",
    },
    {
      id: 3,
      heading: "The choice is yours.",
      text:
        "We have a range of opportunities to suit your circumstances. From buy-to-let right through to developments.",
    },
    {
      id: 4,
      heading: "Discover the best projects.",
      text:
        "The UOWN platform enables you to easily and quickly build a portfolio that minimises your risk through diversification.",
    },
    {
      id: 5,
      heading: "We're tried and tested.",
      text:
        "UOWN has a 100% track record of meeting and exceeding our targeted returns. <span class='block opacity-60 mt-3' style='font-size: .85em'>Correct as of June 2020.</span>",
    },
    {
      id: 6,
      heading: "All the info you need.",
      text:
        "We understand that investing money is a big commitment, so we offer transparent information on the status of all investments.",
    }
  ],

  sectionFiveSlides: [
    {
      title: 'Type of investments',
      para: "It's all about choice, your choice. We have investment opportunities to suit a number of financial goals.",
      img: 'property-investments.png',
      imgTranslateX: 25,
      imgScale: .65,
      btnOptions: {
        text: 'Find out more',
        link: 'invest/property-crowdfunding',
      }
    },
    {
      title: 'Property crowdfunding',
      para: 'Join together with 1000s of other property investors to pool resources and collectively invest in the property market.',
      img: 'PROP_CROWDFUNDING_2_SUB_RENDER.png',
      imgTranslateX: 10,
      imgScale: 1.2,
      btnOptions: {
        text: 'See Property Crowdfunding',
        link: '/invest/property-crowdfunding'
      }
    },
    {
      title: 'Peer to Peer',
      para: 'Lend directly to property developers through peer to peer loans, which allows development projects to gain momentum.',
      img: 'FORM_2_SUB_RENDER.png',
      imgTranslateX: 10,
      imgScale: 1.1,
      btnOptions: {
        text: 'See P2P Lending',
        link: '/invest/p2p'
      }
    },
    {
      title: 'Innovative finance ISA',
      para: 'A tax-efficient way to invest in property loans, which keeps any returns within an ISA tax wrapper, perfect for long term investors.',
      img: 'IFISA_3_SUB_RENDER.png',
      imgTranslateX: 10,
      imgScale: 1.2,
      btnOptions: {
        text: 'See IFISA',
        link: '/invest/ifisa'
      }
    },
    {
      title: 'Retirement Investments',
      para: 'Save for your retirement with commercial property investments housed within a <a href="/invest/retirement/sipp" class="link-underlined">Self Invested Pension Plan (SIPP)</a> or a <a href="/invest/retirement/ssas" class="link-underlined">Small Self Administered Scheme (SSAS)</a>.',
      img: 'property-investments-2.png',
      imgTranslateX: 10,
      imgScale: .6,
      btnOptions: {
        text: 'See Retirement Investments',
        link: '/invest/retirement'
      }
    },
  ]
})

export const mutations = {
  next(state) {
    // if (state.currentSection == 1) {
    //   if (state.scrollPosition == 'bottom') {
    //     // alert('bottom reached')
    //     state.currentSection++
    //   }
    // }
    if (state.currentSection == 2 && !state.mobileWidth && state.currentCarouselTwoSlide < state.carouselTwoSlides.length - 1) {
      state.currentCarouselTwoSlide++
    }
    else if (state.currentSection == 4 && state.sectionCirclesOneCurrentSlide < state.circlesSection1.length) {
      state.sectionCirclesOneCurrentSlide++
    }
    else if (state.currentSection == 5 && state.sectionCirclesTwoCurrentSlide < state.circlesSection2.length) {
      state.sectionCirclesTwoCurrentSlide++
    }
    else if (state.currentSection == 6 && !state.mobileWidth && state.sectionFiveCurrentSlide < state.sectionFiveSlides.length - 1) {
      state.sectionFiveCurrentSlide++
    }
    else if (state.currentSection < state.totalSections) state.currentSection++

  },

  prev(state) {
    // if (state.currentSection == 1) {
    //   if (state.scrollPosition == 'top') {
    //     // alert('top reached')
    //     state.currentSection--
    //   }
    // }
    if (state.currentSection == 2 && !state.mobileWidth && state.currentCarouselTwoSlide > 0) {
      state.currentCarouselTwoSlide--
    }
    else if (state.currentSection == 4 && state.sectionCirclesOneCurrentSlide > -1) {
      state.sectionCirclesOneCurrentSlide--
    }
    else if (state.currentSection == 5 && state.sectionCirclesTwoCurrentSlide > -1) {
      state.sectionCirclesTwoCurrentSlide--
    }
    else if (state.currentSection == 6 && !state.mobileWidth && state.sectionFiveCurrentSlide > 0) {
      state.sectionFiveCurrentSlide--
    }
    else if (state.currentSection > 0) state.currentSection--

  },

  // setScrollPosition(state, payload) {
  //   state.scrollPosition = payload
  // },

  nextSlide(state, payload) {
    if (payload.carouselNumber == 1) {
      if (state.currentCarouselTwoSlide < state.carouselTwoSlides.length - 1)
        state.currentCarouselTwoSlide++
      else state.currentCarouselTwoSlide = 0
    }

    if (payload.carouselNumber == 2) {
      if (state.sectionFiveCurrentSlide < state.sectionFiveSlides.length - 1)
        state.sectionFiveCurrentSlide++
      else state.sectionFiveCurrentSlide = 0
    }
  },

  prevSlide(state, payload) {
    if (payload.carouselNumber == 1) {
      if (state.currentCarouselTwoSlide > 0)
        state.currentCarouselTwoSlide--
      else state.currentCarouselTwoSlide = state.carouselTwoSlides.length - 1
    }

    if (payload.carouselNumber == 2) {
      if (state.sectionFiveCurrentSlide > 0)
        state.sectionFiveCurrentSlide--
      else state.sectionFiveCurrentSlide = state.sectionFiveSlides.length - 1
    }
  },

  goToSlide(state, payload) {
    if (payload.carouselName == 'sectionFiveSlides')
      state.sectionFiveCurrentSlide = payload.index
    if (payload.carouselName == 'CarouselTwo')
      state.currentCarouselTwoSlide = payload.index
  },

  setMobileWidthBoolean(state, payload) {
    if (payload == false) {
      state.mobileWidth = false
    }
    else state.mobileWidth = true
  },
}

export const getters = {
  wrapperStyle: state => ({ transform: `translateY(${state.currentSection * (-1)}00%)` }),

  // lottieSectionClass(state) {
  //   return {
  //     'overflow-y-auto': state.sectionTwoOverflow,
  //     'overflow-hidden': !state.sectionTwoOverflow
  //   }
  // }
}