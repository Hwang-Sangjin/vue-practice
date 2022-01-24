<template>
  <h1>{{ count }}</h1>
  <button @click="increase">Plus</button>
  <button @click="decrease">Minus</button>
</template>

<script>
export default {
  data() {
    return {
      count : 0
    }
  },
  methods: {
      increase() {
          this.count +=1
      },
      decrease(){
          this.count-=1
      }
  }
}

</script>

<style>
    h1{
        font-size: 50px;
        color: royalblue;
    }
</style>
