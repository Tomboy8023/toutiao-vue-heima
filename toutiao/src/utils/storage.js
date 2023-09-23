export const setItem = (key, value) => {  // 存数据
    if(typeof(value) === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}

export const getItem = key => {  // 取数据
    let val = window.localStorage.getItem(key)
    try {
        val = JSON.parse(val)
    } catch(err) {
        ;
    }
    return val
}

export const delItem = key => {  // 删除数据
    window.localStorage.delItem(key)
}