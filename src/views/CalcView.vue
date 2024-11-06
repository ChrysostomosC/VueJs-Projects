<template>
    <h1>Calc</h1>

    <input type="number" v-model="number1">

    <select v-model="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="number" v-model="number2">

    <p><b>Result:</b> {{ result }} </p>
</template>

<script>
export default{
    data(){
        return{
            number1: 0,
            number2: 0,
            operator: ""
        }
    },
    computed: {
        result(){
            switch (this.operator) {
                case "+":
            return this.number1 + this.number2

            case "-":
            return this.number1 - this.number2

            case "*":
            return this.number1 * this.number2

            case "/":
            return this.number1 / this.number2
            }
        }
    }
}
</script>