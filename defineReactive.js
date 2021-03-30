import observe from './observe.js'

export default function defineReactive(data,key,val) {
    if(arguments.length == 2) {
        val = data[key]
    }
    observe(val)
    Object.defineProperty(data,key,{
        get() {
            console.log(`你正在获取${key}的值为${val}`)
            return val
        },
        set(newVal) {
            if(val != newVal) {
                val = newVal
                observe(newVal)
                console.log(`你改变获取${key}的值为${val}`)
            }
        }
    })
}