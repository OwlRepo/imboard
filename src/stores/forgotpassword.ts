import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";

export const useForgotPassword = defineStore("forgot-password", {
  state: () => ({
    email: "",
    successResetPasswordRequest: false,
    requestToken: "",
    errorMessage: null,
  }),
  getters: {},
  actions: {
    async userForgotPassword() {
      let { data, error } = await supabase.auth.resetPasswordForEmail(
        this.email
      );

      if (!error) {
        this.successResetPasswordRequest = true;
        console.log("success_data", JSON.stringify(data, null, 4));
      } else {
        this.errorMessage = error.message;
        console.log("error_data", error);
      }
    },
  },
});
