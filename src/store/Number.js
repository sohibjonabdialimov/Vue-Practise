import {defineStore} from "pinia"
export const useNumberStore = defineStore({
  id: "number",
  state: () => ({
    number: 0
  }),
  actions: {
    increment(){
      this.number++;
    },
    decrement(){
      this.number--;
    },
    reset(){
      this.number = 0;
    }
  }
})