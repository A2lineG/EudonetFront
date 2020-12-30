<template>
  <table class="highlight centered responsive-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Firstname</th>
        <th>E-mail</th>
        <th>Birthdate</th>
        <th>Age</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(client, index) in clients"
        v-bind:item="client"
        :index="index"
        :key="client.email"
      >
        <td>{{ client.name }}</td>
        <td>{{ client.firstName }}</td>
        <td>{{ client.email }}</td>
        <td>{{ new Date(client.birthDate) | dateFormat("DD/MM/YYYY") }}</td>
        <td>{{ CalculAge(new Date(client.birthDate)) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ClientService from "../ClientService";
const clientService = new ClientService();

export default {
  name: "ListClient",
  data() {
    return {
      clients: [],
    };
  },
  created() {
    clientService
      .GetClients()
      .then((res) => {
        this.clients = res.data;
        console.log(this.clients);
      })
      .catch((err) => console.error(err));
  },
  methods: {
    CalculAge(birthDate) {
      var ageDifMs = Date.now() - birthDate.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
};
</script>



  