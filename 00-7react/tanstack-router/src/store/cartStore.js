import {create} from "zustand";

export const  useCartStore=create((set)=>({
    cart:[],

    addToCart:(item)=>
    set((state)=>
    ({
        cart:[...state.cart,item]
    })) 
    ,

    removeItem: ((id)=>
    set((state)=>(
        {
            cart:state.cart.filter((item)=> item.id !==id)
        }
    )) 
    )
  ,
    // clearCart:(()=>
    // set((state)=>(
    //     {
    //         cart:state.cart.length==0;
    //     }
    // ))
    // )

      clearCart:(()=>
    set({cart:[]}))
}))