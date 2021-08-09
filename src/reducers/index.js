import { input_num, clear_display, input_operator } from './../actions';

export const initialState = {
    display: '0',
    operation: null,
    firstNum: null,
    waitingForSecondNum: false
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {  
        case("+"):
            return `${Number(num1) + Number(num2)}`;
        case("*"):
            return `${Number(num1) * Number(num2)}`;
        case("-"):
            return `${Number(num1) - Number(num2)}`;
        case('/'):
            return `${Number(num1) / Number(num2)}`;

        default:
            return num1
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(input_num):
            if (state.display == 0 || state.waitingForSecondNum){
                if (action.payload === '.'){
                    return ({
                        ...state,
                        display: '0.',
                        waitingForSecondNum: false
                    })
                }else{
                    return ({
                        ...state,
                        display: `${action.payload}`,
                        waitingForSecondNum: false,
                    })
                }
            }else{
                if (action.payload === '.' && state.display.includes('.')){
                    return state
                }else{
                    return {
                        ...state,
                        display: (`${state.display}${action.payload}`)
                    }
                }
            }
        
        case(clear_display):
            return (initialState)

        case(input_operator):
            if (!state.firstNum){
                return {
                    ...state,
                    firstNum: Number(state.display),
                    waitingForSecondNum: true,
                    operation: action.payload
                }
            }else{
                return {
                    ...state,
                    display: calculateResult(state.firstNum, Number(state.display), state.operation),
                    firstNum: calculateResult(state.firstNum, Number(state.display), state.operation),
                    operation: action.payload,
                    waitingForSecondNum: true
                }
            }

        default:
            return state
    }
}

export default reducer;