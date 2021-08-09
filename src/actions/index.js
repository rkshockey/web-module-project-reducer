export const input_num = 'input_num'
export const clear_display = 'clear_display'
export const input_operator = 'input_operator'
export const submit_equals = 'submit_equals'

export const input = (number) => {
    return {
        type: input_num,
        payload: number
    }
}

export const clear = () => {
    return {
        type: clear_display
    }
}

export const operator = (operator) => {
    return {
        type: input_operator,
        payload: operator
    }
}

export const submit = () => {
    return {
        type: submit_equals
    }
}