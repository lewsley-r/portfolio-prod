<template>
  <div id="contact" class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <form
      class="uk-align-center"
      id="contact-form"
      ref="form"
      @submit.prevent="sendEmail"
    >
      <h1 id="contact-heading">Get in touch!</h1>
      <label>Name</label>
      <input
        class="uk-input"
        type="text"
        name="user_name"
        placeholder="John Doe"
      />
      <label>Email</label>
      <input
        class="uk-input"
        type="email"
        name="user_email"
        placeholder="johndoe@email.example"
      />
      <label>Message</label>
      <textarea
        class="uk-textarea"
        name="message"
        placeholder="I am contacting you regarding..."
      ></textarea>
      <button
        class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        type="submit"
        value="Send"
      >
        Submit
      </button>
    </form>
  </div>
</template>
  
  <script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_SVC_ID,
          process.env.VUE_APP_EMAIL_TEMPLATE_ID,
          this.$refs.form,
          process.env.VUE_APP_EMAIL_PUB_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            var frm = document.getElementsByName('contact-form');
            frm.reset()

          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
<style scoped>
label {
  font-weight: 800;
  margin-bottom: 1vh;
  margin-left: 1vw;
}

.uk-button-primary {
  margin-top: 2vh;
  font-weight: 800;
  background-color: green;
  border-radius: 20px;
}
.uk-card {
  box-shadow: none;
  width: 100%;
  height: 100vh;
}

.uk-input {
  margin-bottom: 2vh;
  border-radius: 20px;
}

.uk-textarea {
  border-radius: 20px;
  margin-bottom: 2vh;
}

#contact {
  background-color: black;
}

#contact-heading{
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  text-align: center;
}

#contact-form {
  background-color: white;
  color: black;
  width: 30%;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 10vh;
  padding: 3vw;
  text-align: left;
}


</style>