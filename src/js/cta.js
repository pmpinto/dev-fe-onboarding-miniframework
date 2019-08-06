export default () => {
    // Component configs
    const configs = {
        triggerClassName: "js-floater-trigger",
        targetClassName: "js-floater-target",
        hiddenClassName: "cta__floater--hidden"
    }

    // Get HTML elements
    const elements = {
        trigger: document.querySelector(`.${configs.triggerClassName}`),
        target: document.querySelector(`.${configs.targetClassName}`)
    }

    // #########################################################################
    // Methods
    const toggleTarget = event => {
        event.preventDefault()
        elements.target.classList.toggle(configs.hiddenClassName)
    }

    // #########################################################################
    // Set event listeners
    elements.trigger.addEventListener("click", toggleTarget)
}
