const initialData = {
    list: []

};

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return { ...state, list: [...state.list, { id: id, data: data }] }

        case "ADD_TODO2":
            const { id2, data2 } = action.payload;
            return { ...state, list: [...state.list, { id: id2, data2: data2 }] }


        case "DETELE_TODO":
            const newList = state.list.filter((elem) => elem.id != action.id)
            return { ...state, list: newList }


        case "REMOVE_TODO":
            return {
                ...state, list: []
            }




        default: return state;
    }
}
export default todoReducers;
