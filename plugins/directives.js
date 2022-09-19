import Vue from 'vue'

Vue.directive('swipe', {
	bind(el, binding, vnode) {
		var hammertime = new Hammer(el);
		hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
		if (binding.arg == 'up') {
			hammertime.on("swipeup", ev => {
				if (typeof binding.value == 'function')
					binding.value.bind(vnode.context)
			})
		}
		else if (binding.arg == 'down') {
			hammertime.on("swipedown", ev => {
				if (typeof binding.value == 'function')
					binding.value.bind(vnode.context)
			})
		}
		else if (binding.arg == 'left') {
			hammertime.on("swipeleft", ev => {
				if (typeof binding.value == 'function')
					binding.value.bind(vnode.context)
			})
		}
		else if (binding.arg == 'right') {
			hammertime.on("swiperight", ev => {
				if (typeof binding.value == 'function')
					binding.value.bind(vnode.context)
			})
		}
	}
})