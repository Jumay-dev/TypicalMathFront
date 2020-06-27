<template>
  <router-view :tasks="tasks" :isLoading="isLoading" />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      isLoading: false
    }
  },
  async mounted() {
    this.isLoading = true
    let serverData = await request("http://localhost:3000/api/tasks")
    this.tasks = serverData
    this.isLoading = false
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
