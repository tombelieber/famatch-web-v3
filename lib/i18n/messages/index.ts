import { defineMessages } from "react-intl";

const messages = defineMessages({
  "authentication.form.title": {
    defaultMessage: "Welcome to Famatch.io, {type} with",
  },
  "authentication.form.or_span": { defaultMessage: "Or continue with email" },
  "authentication.form.login": { defaultMessage: "login" },
  "authentication.form.register": { defaultMessage: "register" },
  "authentication.form.name": { defaultMessage: "name" },
  "authentication.form.name_placeholder": { defaultMessage: "Your name" },
  "authentication.form.email": { defaultMessage: "email" },
  "authentication.form.password": { defaultMessage: "password" },
  "authentication.form.password_placeholder": {
    defaultMessage: "Your password",
  },
  "authentication.form.invalid_email": { defaultMessage: "Invalid email" },
  "authentication.form.password_too_less": {
    defaultMessage: "Password should include at least 6 characters",
  },
  "authentication.form.accept_tos": {
    defaultMessage: "I accept terms and conditions",
  },
  "authentication.form.already_have_account": {
    defaultMessage: "Already have an account? Login",
  },
  "authentication.form.dont_have_account": {
    defaultMessage: "Don't have an account? Register",
  }, // header.links
  "header.links.home": { defaultMessage: "Home" },
  "header.links.rooms": { defaultMessage: "Rooms" },
  "header.links.history": { defaultMessage: "History" },
  "header.links.settings": { defaultMessage: "Settings" },
});

export default messages;
