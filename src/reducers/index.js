import { input_num } from './../actions';

export const initialState = {
    display: 0,
    operation: "",
    firstNum: null,
    waitingForSecondNum: false,
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case(''):
            return num1
        case("+"):
            return `${Number(num1) + Number(num2)}`;
        case("*"):
            return `${Number(num1) * Number(num2)}`;
        case("-"):
            return `${Number(num1) - Number(num2)}`;
        case('/'):
            return `${Number(num1) / Number(num2)}`;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(input_num):
            if (state.display === 0){
                if (action.payload === '.'){
                    return ({
                        ...state,
                        display: '0.'
                    })
                }else{
                    return ({
                        ...state,
                        display: `${action.payload}`
                    })
                }
            }else{
                if (action.payload === '.' && state.display.includes('.')){
                    return state
                }
                    return {
                        ...state,
                        display: (`${state.display}${action.payload}`)
                    }
            }
    }
}

export default reducer;