<template>
    <button @click="increase">{{ count }}</button>
</template>

<script>
    export default{
        name: "Counter",

        props:['startCount', 'increaseValue'],

        data(){
            return {count: this.startCount}
        },
        methods:{
            increase(){
                this.count += this.increaseValue
            }
        }
    }
</script>

<style scoped>
    button{
        font-size: 1.5rem;
        background-color:#42b983;
        color: white;
        font-weight: bold;
        padding: 10px 25px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin: 0 5px;
    }
    button:hover{
        opacity: 0.7;
    }
</style>