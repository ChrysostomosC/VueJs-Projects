<template>
    <h1>Dice</h1>

    <button @click="rollDice">Roll dice</button> <!-- Edw leme sto koumpi ti na kanei(@click=rollDice)-->

    <p><b>Dice roll:</b>{{ diceRoll }}</p> <!--Edw kaloume to function diceRoll to opoio me th seira kalei to ap to methods to rollDice-->

    <p v-if="diceRoll == 1 || diceRoll == 2">That was low</p>
    <p v-else-if="diceRoll == 3 || diceRoll == 4">That was medium</p>
    <p v-else-if="diceRoll == 5 || diceRoll == 6">That was high</p>

</template>

<script>
export default{
    data() {
        return{
            diceRoll: 0
        }
    },
    methods:{
        rollDice() {
            this.diceRoll = getRndInteger(1, 6) // Edw dinoume sto parakatw function to ebros pou 8a treksei 1, 6
        }
    }
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min; // Etoimo function pou phrame ap to internet
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
    }
    button:hover{
        opacity: 0.7;
    }
</style>