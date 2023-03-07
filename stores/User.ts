import { defineStore, acceptHMRUpdate } from "pinia";

export const useUser = defineStore("User", {
  state: () => {
    return {
      username: "",
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
