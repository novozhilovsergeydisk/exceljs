import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        $.create()
        const $root = document.createElement('div')
        $root.classList.add('excel')

        // $root.textContent = 'test'
        // $root.style.fontSize = '5rem'

        this.components.forEach(Component => {
            const $el = document.createElement('div')

            console.log('$el', $el, Component.className)

            $el.classList.add(Component.className)
            const component = new Component($el)
            $el.innerHTML = component.toHTML()
            $root.append($el)

            // $root.insertAdjacentHTML('beforeend', component.toHTML())
            // console.log(component.toHTML())
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())

        // console.log(this.$el)
        // afterbegin, afterend, beforebegin, beforeend
        // this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
        // const node = document.createElement('h1')
        // node.textContent = 'TEST'
        // this.$el.append(node)
    }
}