import * as jQuery from 'jquery'
jQuery(($)=>{
    const toggleNav = $(".toggle-nav") as JQuery<HTMLElement>
    const closeNav = $(".close-icon") as JQuery<HTMLElement>
    const nav = $(".nav-content") as JQuery<HTMLElement>
    toggleNav.on("click", (e)=>{
        e.preventDefault()
        nav.addClass("show")
    })
    closeNav.on("click", (e) => {
        e.preventDefault()
        nav.removeClass("show")
    })
})