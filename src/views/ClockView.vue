<template>
    <h1>Clock</h1>

    <p>{{ currentTime }}</p>
</template>

<script>
    export default{
        data(){
            return{
                currentTime: new Date().toLocaleTimeString(),
                interval: null // to swnoume se midenikh variable 
            }
        },

        created(){
            console.log("CREATED")
            this.interval = setInterval(() => { // kai tou kanoume reference edw (this.interval)
                this.currentTime = new Date().toLocaleTimeString()
                console.log("tick")
                console.log("tock")
            }, 1000) // Edw exoume balei posous gyrous 8a kanei kai metriounte se milliseconds
        },

        unmounted(){
            console.log("UNMOUNTED")
            clearInterval(this.interval) // edw einai pou tou leme na mhn trexei sto paraskinio otan den ton deixnoume
        }
    }
</script>