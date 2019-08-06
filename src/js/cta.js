export default () => {
    // Component configs
    const configs = {
        parentClassName: "js-cta-parent",
        triggerClassName: "js-floater-trigger",
        targetClassName: "js-floater-target",
        hiddenClassName: "cta__floater--hidden"
    }

    // Get HTML elements
    const elements = {
        triggers: document.querySelectorAll(`.${configs.triggerClassName}`),
        targets: document.querySelectorAll(`.${configs.targetClassName}`)
    }

    // #########################################################################
    // Methods
    const toggleTarget = event => {
        const parent = event.target.closest(`.${configs.parentClassName}`)
        const target = parent.querySelector(`.${configs.targetClassName}`)
        const isHidden = target.classList.contains(configs.hiddenClassName)

        event.preventDefault()

        closeAllTargets()

        if (isHidden) {
            target.classList.toggle(configs.hiddenClassName)
        }
    }

    const closeAllTargets = () => {
        for (const target of elements.targets) {
            target.classList.add(configs.hiddenClassName)
        }
    }

    // #########################################################################
    // Set event listeners
    for (const trigger of elements.triggers) {
        trigger.addEventListener("click", toggleTarget)
    }
}
