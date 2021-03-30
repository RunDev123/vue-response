import {def} from './utils.js'
import defineReactive from './defineReactive.js'

export default class Observer {
    constructor(value) {
        def(value,'__ob__',this,false)
        this.walk(value)
    }
    walk(value) {
        for(let attr in value) defineReactive(value,attr)
    }
}