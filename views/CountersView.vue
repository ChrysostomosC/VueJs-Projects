<template>
    <h1>Counters</h1>

    <Counter :startCount="0" :increaseValue="5" />
    <Counter :startCount="100" :increaseValue="50"/>
    <Counter :startCount="3" :increaseValue="3"/>
    <Counter :startCount="10" :increaseValue="1"/>

</template>

<script>
import Counter from "@/components/Counter.vue"

    export default{
        components:{
            Counter
        }
    }
</script>