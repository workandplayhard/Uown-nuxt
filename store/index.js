export const state = () => ({
	canonicalURL: 'https://www.uown.co',
	menuVisible: false,
	aboutRiskBtnVisible: true,
	aboutRiskVisible: false,
	mobileWidth: '',
	currentSection: 0,
	// currentCarouselOneSlide: 0,
	sectionPhoneCurrentSlide: 0,
	totalSections: 5,
	pageLoaded: false,
	// pageTitle is taken from the last breadcrumb
	pageTitle: '',
	sectionPhoneSlides: [
		{
			title: 'Register your account',
			para: 'Registering with UOWN is simple and straightforward. We will need to do a few quick checks and then you are good to go.',
			btnOptions: {
				text: 'Register',
				outerLink: true,
				link: 'https://app.uown.co/register',
				underText: 'Capital at risk.',
			}
		},
		{
			title: 'Pick your opportunities',
			para: 'UOWN allows you to have complete flexibility and control over your investing. Simply choose an opportunity and decide how much you want to invest. With a range of opportunities across the UK, you can build a portfolio that suits you.',
			btnOptions: {
				text: 'View opportunities',
				link: 'https://app.uown.co/properties',
				outerLink: true,
			}
		},
		{
			title: 'Kick back',
			para: "Our investments are managed end-to-end, from sourcing right through to the money going back into your UOWN account. To date we have never understated a return. <p class='opacity-60 mt-1' style='font-size: .8em'>Correct as of June 2020.</p>",
			btnOptions: {
				text: 'Register',
				link: 'https://app.uown.co/register',
				outerLink: true,
				underText: 'Capital at risk.',
			}
		},
		{
			title: 'Track investments',
			para: 'Use the the dashboard to keep an eye on how your investments are performing, and review the success of each property in your portfolio.',
			btnOptions: {
				text: 'Find out more',
				link: 'invest/property-crowdfunding',
			}
		},
		{
			title: 'Reap your rewards',
			para: 'You can take out your earnings as soon as they are in your UOWN account. This could be after a rent payment, once a development completes or when you sell some shares.',
			btnOptions: {
				text: 'Find out more',
				link: '/help-centre/how-do-i-get-my-money-out',
			}
		},
	],
	// carouselOneSlides: [
	// 	{
	// 		id: 0,
	// 		heading: "The flexible way to secure property finance",
	// 		text:
	// 			"We have created a platform where you can find the finance you need quickly and securely via a range of different investment vehicles."
	// 	},
	// 	{
	// 		id: 1,
	// 		heading: "P2P lending",
	// 		text:
	// 			"Financing powered by p2p investments from our crowdfunding platform. "
	// 	},
	// 	{
	// 		id: 2,
	// 		heading: "Bridging loans",
	// 		text:
	// 			"Fast access to property finance to overcome short term funding gaps. "
	// 	},
	// 	{
	// 		id: 3,
	// 		heading: "Mezzanine finance",
	// 		text: "Property development finance with flexible repayment options."
	// 	}
	// ],

	tagIds: [],
	selectInputClasses: 'p-3 outline-none border focus:border-blue-400 text-gray-800'
})

export const mutations = {
	next(state) {
		if (state.currentSection == 1 && !state.mobileWidth && state.sectionPhoneCurrentSlide < state.sectionPhoneSlides.length - 1) {
			state.sectionPhoneCurrentSlide++
		}
		else if (state.currentSection < state.totalSections) state.currentSection++
	},

	prev(state) {
		if (state.currentSection == 1 && !state.mobileWidth && state.sectionPhoneCurrentSlide > 0) {
			state.sectionPhoneCurrentSlide--
		}
		else if (state.currentSection > 0) state.currentSection--
	},

	goToSlide(state, payload) {
		if (payload.carouselName == 'sectionPhoneSlides')
			state.sectionPhoneCurrentSlide = payload.index
	},

	nextSlide(state, payload) {
		if (payload.carouselNumber == 1) {
			if (state.sectionPhoneCurrentSlide < state.sectionPhoneSlides.length - 1)
				state.sectionPhoneCurrentSlide++
			else state.sectionPhoneCurrentSlide = 0
		}
	},

	prevSlide(state, payload) {
		if (payload.carouselNumber == 1) {
			if (state.sectionPhoneCurrentSlide > 0)
				state.sectionPhoneCurrentSlide--
			else state.sectionPhoneCurrentSlide = state.sectionPhoneSlides.length - 1
		}
	},

	toggleMenu(state) {
		state.menuVisible = !state.menuVisible
	},

	hideMenu(state) {
		state.menuVisible = false
	},

	showAboutRisk(state) {
		state.aboutRiskVisible = true
	},

	hideAboutRisk(state) {
		state.aboutRiskVisible = false
		state.aboutRiskBtnVisible = false
	},

	setMobileWidthBoolean(state, payload) {
		if (payload == false) {
			state.mobileWidth = false
		}
		else state.mobileWidth = true
	},

	setPageLoaded: state => state.pageLoaded = true,

	setPageTitle: (state, payload) => state.pageTitle = payload
}

export const getters = {
	wrapperStyle: state => ({ transform: `translateY(${state.currentSection * (-1)}00%)` }),
}