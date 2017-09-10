
(function () {
  var state = {
    activeTab: 0,
    activeNavItem: document.querySelector('.nav-item')
  }

  var activeClassName = 'active'

  var setActiveTab = function setActiveTab (el, n) {
    if (state.activeTab === n) return
    figElements[state.activeTab].classList.remove(activeClassName)
    state.activeNavItem.classList.remove(activeClassName)

    figElements[n].classList.add(activeClassName)
    el.classList.add(activeClassName)
    state.activeTab = n
    state.activeNavItem = el
  }

  var handleNavItemsMouseOver = function handleNavItemsMouseOver (e) {
    var t = e.target
    if (e.currentTarget !== t) {
      if (t.dataset.type === 'nav-item') {
        setActiveTab(t, +t.dataset.position)
      }
    }
  }

  var handleHamburgerClick = function handleHamburgerClick (e) {
    mainNavigationEl.classList.toggle('active')
  }

  var mobileHamburgerEl = document.querySelector('.js-narrow-screen-hamburger')
  var mainNavigationEl = document.querySelector('.js-main-navigation')
  var navItemsContainer = document.querySelector('.nav-item-container')
  var figElements = Array.from(document.querySelector('.main-content').children)
  if (window.innerHeight / window.innerWidth < 1) {
    navItemsContainer.addEventListener('mousemove', handleNavItemsMouseOver, false)
  } else {
    mobileHamburgerEl.addEventListener('click', handleHamburgerClick, false)
  }
}())
