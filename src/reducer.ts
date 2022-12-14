export interface ICounterState {
    val: number
}

const initialState:ICounterState = {val: 0};

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                val: state.val + 1
            }
        case 'DEC':
            return {
                ...state,
                val: state.val - 1
            }
        case 'RND':
            return {
                ...state,
                val: state.val = action.valueR
            }
        default:
            return state
    }
}

export default reducer;
