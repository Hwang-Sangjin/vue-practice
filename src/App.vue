<template>
  <h1>{{ count }}</h1>
  <button @click="increase">Plus</button>
  <button @click="decrease">Minus</button>
  <div v-if="count > 4">
      4보다 큽니다!
  </div>
  <ul>
      <Fruit 
      v-for="fruit in fruits" 
      :key="fruit"
      :name="fruit">
          {{fruit}}
      </Fruit>
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit'
export default {
    components:{
        Fruit
    },
    data() {
        return {
        count : 0,
        fruits: ['Apple', 'Banna', 'Cherry']
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

<style lang ="scss">
    h1{
        font-size: 50px;
        color: royalblue;
    }
    ul {
        li {
            font-size: 40px;
        }
    }
</style>
