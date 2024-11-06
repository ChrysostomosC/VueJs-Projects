<template>
    <h1>FAQ</h1>

    <p v-for="q in qna" @click="q.show = !q.show"> 
        <b> {{ q.question }} </b> <br />
        <i v-if="q.show"> {{ q.answer }} </i>
    </p>

</template>

<script>
export default {
    data() {
        return{
         qna: [
            {
                question: "Favourite color?",
                answer: "Blue",
                show:false
            },
            {
                question: "Favourite number?",
                answer: "Ten",
                show:false
            },
            {
                question: "Age of the universe?",
                answer: "13.8 billion",
                show:false
            }
         ]   
        }
    }
}
</script>