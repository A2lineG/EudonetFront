<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col s12">
        <h1>Eudonet</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <ListClient />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <FormClient />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListClient from "./components/ListClient";
import FormClient from "./components/FormClient";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import Vue from "vue";
import VueFilterDateFormat from "vue-filter-date-format";

Vue.use(VueFilterDateFormat);

export default {
  name: "App",
  components: {
    ListClient,
    FormClient
  },
};
</script>

<style scoped>
</style>
