let initialState = {
    count:0,
    id: '',
    password: '',
}


function reducer(state = initialState, action){ //reducer는 항상 return을 해줘야됨. (store는 단순히 적용 역할이기 때문.)
    console.log('action은 뭘까?',action)

    //if(action.type === "INCREMENT") {
    //    return { ...state, count: state.count + 1 } //...state는 state가 여러개 일 때 다른state값은 유지하게 함. , count만 바꾼다는 뜻.
    //}
    switch(action.type){ //if(위 예시)로 쓸수도 있고, switch로 쓸수 있음.
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num }
        case "LOGIN":
            return {...state, 
                id:action.payload.id, 
                password:action.payload.password,
            };
        case "DECREMENT":
            return {...state, count: state.count - 1 }
        default:
            return { ...state}
    }

    //store는 return이 무조건 필요하기 때문에 reducer에서 무조건 기본리턴 필요.
}


export default reducer;