<template>
    <div class="container">
        <h2>Форма вводных данных</h2>
        <p>{{$route.params.task["title"]}}</p>
        <hr>
        <form class="container" v-if="!isLoading">
            <div class="row">
                <InputField 
                    v-for="val in this.fields"
                    :key="val.id"
                    :val="val"
                />
            </div>
            <div class="row btnrow">
                <button type="button" class="btn btn-warning">Рассчитать</button>
            </div>
        </form>
        <Loader v-else />
    </div>
</template>

<script>
import InputField from "../components/InputField"
import Loader from "../components/Loader"

export default {
    components: {
        InputField,
        Loader
    },
    data() {
        return {
            isLoading: true,
            fields: [{id: 0, val: 123, varb: "x", measure: "km"}, 
                     {id: 1, val: 123, varb: "y", measure: "km"}, 
                     {id: 2, val: 123, varb: "z", measure: "km"},
                     {id: 3, val: 123, varb: "vx", measure: "km/sec"},
                     {id: 4, val: 123, varb: "vy", measure: "km/sec"},
                     {id: 5, val: 123, varb: "vz", measure: "km/sec"},
                     {id: 6, val: 123, varb: "tstart", measure: "sec"},
                     {id: 7, val: 123, varb: "dt", measure: "sec"},
                     {id: 8, val: 123, varb: "tend", measure: "sec"} ]
        }
    },
}
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btnrow {
    justify-content: center;
}
</style>