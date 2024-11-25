import { createSlice } from '@reduxjs/toolkit'
import { Prato } from '../../models/Prato'
import { PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  isOpen: boolean,
  items: Prato[]
}

const initialState: CartState = {
  isOpen: false,
  items: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((i) => i.id === action.payload.id)
      if (!prato) state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { openCart, closeCart, add, remove, clear } = CartSlice.actions
export default CartSlice.reducer
