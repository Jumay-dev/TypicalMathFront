<template>
    <div class="container">
        <h2>Форма вводных данных</h2>
        <p>{{$route.params.task["title"]}}</p>
        <hr>
        <div class="inputer" v-if="!inputFinished">
            <form class="container" v-if="!isLoading" @submit.prevent="submitForm">
                <div class="row">
                    <InputField 
                        v-for="field in this.fields"
                        :key="field.id"
                        :field="field"
                        @updateForm="updateForm"
                    />
                </div>
                <div class="row btnrow">
                    <button type="button submit" class="btn btn-warning">Рассчитать</button>
                </div>
            </form>
            <Loader v-else />
        </div>
        <div class="resulter" v-else>
            <div class="graph" v-if="!isCalculate">
                    <div class="chart">
                        <line-chart
                        :chartdata="chartdata"
                        
                        />
                    </div>
                <!-- <input type="text" :value="this.results['r_j2000_x']"> -->
            </div>
            <div class="loader" v-else>
                <Loader />
            </div>
        </div>
    </div>
</template>

<script>
import InputField from "../components/InputField"
import Loader from "../components/Loader"
import LineChart from "../components/Chart"


export default {
    components: {
        InputField,
        Loader,
        LineChart
    },
    data() {
        return {
            isLoading: false,
            isCalculate: false,
            inputFinished: false,
            form: {},
            fields: [],
            results: {},
            chartdata: null
        }
    },
    async mounted() {
        this.isLoading = true
        let serverData = await request("http://localhost:3000/api/fields")
        this.fields = serverData
        this.isLoading = false

        this.fillData()
        this.fields.forEach(field => this.form[field.varb] = field.val)
    },
    props: [ "task" ],
    methods: {
        async submitForm() {
            this.inputFinished = true
            this.isCalculate = true
            let serverData = await request('http://localhost:3000/api/contacts', 'POST', this.form)
            this.results = JSON.parse(serverData)
            this.isCalculate = false
            this.renderChart(this.chartData)
        },
        updateForm(data) {
            this.form[data.sendVarb] = data.sendVal
        },
        fillData () {
            this.chartdata = {
            labels: [40, 44, 56, 68, 71],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [20, 10, 34, 22, 89]
                }
            ]
            }
        },
        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }       
    }
}

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    })
    return await response.json()
  } catch (e) {
    console.warn('Error:', e.message)
  }
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

.chart {
    width: 600px;
    height: 400px;
}
</style>