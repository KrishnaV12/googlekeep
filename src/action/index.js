export const addtodo =(data) =>{
    return{
        type:"ADD_TODO",
        payload: {
            id : new Date().getTime().toString(),
            data:data
        }
    }
}
export const addtodo2 =(data2) =>{
    return{
        type:"ADD_TODO2",
        payload: {
            id2 : new Date().getTime().toString(),
            data:data2
        }
    }
}


export const deletetodo =(id) =>{
    return{
        type:"DETELE_TODO",
        id
  
    }
}

export const removetodo =()=>{
     return{
         type:"REMOVE_TODO"
     }
}