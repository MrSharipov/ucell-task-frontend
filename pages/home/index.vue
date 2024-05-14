<template>
  <div class="home">
    <h1>Report</h1>
    <table>
      <thead class="header">
      <tr>
        <th>Region</th>
        <th>Subscribes</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in tableData">
        <td>{{ data.region }}</td>
        <td>{{ data.subscribers }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr class="general">
        <td>Total subscribes in Uzbekistan</td>
        <td>{{ dataForUzb }}</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import {useApi} from "~/composable/api";
import type {IAnyObject} from "~/types";

const tableData = ref<IAnyObject>();
const dataForUzb = ref<number>(0)
const api = useApi();

function getData() {
  return new Promise((resolve, reject) => {
    api.$get('reports/group', {}).then(res => {
      tableData.value = res.regionSums;
      dataForUzb.value = res.uzbekistanTotal;
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

onMounted(() => {
  getData()
})
</script>

<style scoped>
/* spacing */
table {
  border-collapse: collapse;
  width: 60%;
  border: 1px solid;
}

td {
  border: 1px solid;
  padding: .5rem;
}
th{
  background-color: blueviolet;
  color: white;
}
.general{
  background-color: seagreen;
  color: white;
}

</style>