import observe from "./observe.js";

const obj = {
    a: {
        b: {
            c: {
                d: 1
            }
        }
    },
    e: 2
}
observe(obj)
obj.a.b = 44
console.log(obj)