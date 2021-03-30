import Observer from './Observer.js'

export default function observe(value) {
    if(typeof value != 'object') return
    if(typeof value.__ob__ != 'undefined') {

    }else {
        new Observer(value)
    }
}