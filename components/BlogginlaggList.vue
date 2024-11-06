<template>
    <h1>Bloggs</h1>

    <p v-for="blogg in bloggs" :key="blogg.id">
        <router-link :to="'/bloggs/' + blogg.id" >{{ blogg.title }}</router-link>
    </p>
</template>

<script>
    export default{
        name: 'blogginlaggList',

        data(){
            return{
                bloggs: []
            }
        },

        created(){
            fetch('http://localhost:23348/api/Blogg')
            .then(data => data.json())
            .then(bloggs =>{
                this.bloggs = bloggs
            })
        }
    }
</script>