<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="input-field">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        v-model.trim="$v.name.$model"
        :class="{
          'is-invalid': $v.name.$error,
        }"
      />
      <div class="invalid-feedback">
        <span v-if="!$v.name.required && $v.name.touched">Name is required</span>
      </div>
    </div>

    <div class="input-field">
      <label for="firstName">FirstName</label>
      <input
        type="text"
        name="firstName"
        v-model.trim="$v.firstName.$model"
        :class="{
          'is-invalid': $v.firstName.$error,
        }"
      />
      <div class="invalid-feedback">
        <span v-if="!$v.firstName.required && $v.firstName.touched">Firstname is required</span>
      </div>
    </div>

    <div class="input-field">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        v-model.trim="$v.email.$model"
        :class="{
          'is-invalid': $v.email.$error,
        }"
      />
      <div class="invalid-feedback">
        <span v-if="!$v.email.required && $v.birthDate.touched">Email is required</span>
      </div>
    </div>

      <datepicker 
        v-model.trim="$v.birthDate.$model"
        :class="{
          'is-invalid': $v.birthDate.$error
        }"
        placeholder="BirthDate"
        >
      </datepicker>
      <div class="invalid-feedback">
        <span v-if="!$v.birthDate.required">Birthdate is required</span>
      </div>

    <button type="submit" class="waves-effect waves-light btn" >Add</button>

    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script>
import ClientService from "../ClientService";
import { required, email } from "vuelidate/lib/validators";
import Datepicker from 'vuejs-datepicker';

const clientService = new ClientService();

export default {
  name: "FormClient",  
  components: {
    Datepicker
  },
  data() {
    return {
      name: "",
      firstName: "",
      email: "",
      birthDate: new Date(),
      errorMessage: null
    };
  },
  validations: {
    name: {
      required,
    },
    firstName: {
      required,
    },
    email: {
      required,
      email,
    },
    birthDate: {
      required,
    },
  },
  methods: {
    onSubmit() {
      const client = {
        name: this.name,
        firstName: this.firstName,
        email: this.email,
        birthDate: this.birthDate,
      };
      
      this.$v.$touch();
      
      clientService
        .AddClient(client)
        .then((res) => {
          this.name = "";
          this.firstName = "";
          this.email = "";
          this.birthDate = new Date();
          this.errorMessage = null;
          console.log(res.data);
          location.reload(); // 
        })
        .catch((err) => {
          console.error({err});
          console.log(err.response.status);
          console.log(err.response.data.errors);

          this.errorMessage = err.response.data.errors;
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>