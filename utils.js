

export const def = (obj,key,value,enumerable) => {
    Object.defineProperty(obj,key,{
        value,
        enumerable
    })
}