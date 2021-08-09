export const input_num = 'input_num'

export const input = (number) => {
    return {
        type: input_num,
        payload: number
    }
}