import { configureStore, createSlice } from "@reduxjs/toolkit";

const Post = createSlice({
    name:'post',
    initialState:[{id:1,title:'Khalil Ghanam',body:'number 1'},
                {id:2,title:'Khalil Ghanam',body:'number 1'}],
    reducers:{
        AddPost:(state,action)=>{
            let id=state.length===0?1:state[state.length-1].id+1
            return [...state,{...action.payload,id:id}]
        },
        SupprimerPost:(state,action)=>{
            let today=new Date()
            let index=state.findIndex(post=>post.id==action.payload.id)
            state[index]={...state[index],DateSupprimer:today.toLocaleDateString()}
            return state;
        },
        ModifierPost:(state,action)=>{
            let index=state.findIndex(post=>post.id==action.payload.id)
            state[index]=action.payload
            return state
        },
        RecupererPost:(state,action)=>{
            let index=state.findIndex(post=>post.id==action.payload.id)
            state[index]={...state[index],DateSupprimer:undefined}
            return state;
        }
    }
})



export const store=configureStore({reducer:{
    Post:Post.reducer
}})