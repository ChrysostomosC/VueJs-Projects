<template>
    <div>
        <h1>Veckan's meny</h1>
    </div>

    <p v-for="m in meny">
        <b>{{ m.title }}</b> <br />
        <i>{{ m.description }}</i>
    </p>

</template>

<script>
    export default{
        data(){
            return{
                meny:[
                    {
                        title: "Mousaká tis giagias: ",
                        description: "Grekiska nationalrätten. Aubergin, squash, potatis, kalvfärs, kefalotiri-ost & mormors béchamelsås. Serveras med grekisk sallad & fårost",
                    },
                    {
                        title: "Bifteki Gemisto: ",
                        description: "Kolgrillad fårostfylld kalvfärsbiff",
                    },
                    {
                        title: "Gyros: ",
                        description: "Gyros gjord på grillat fläsk",
                    },
                    {
                        title: "Hirino Souvlaki: ",
                        description: "Grillade marinerade fläskgrillspett",
                    },
                    {
                        title: "Kotopoulo: ",
                        description: "Marinerade & grillade kycklingspett ",
                    },
                    {
                        title: "Solomós Horiatiki: ",
                        description: "Kolgrillad laxfile med friterad potatis, grekisk sallad & tzatziki",
                    },
                    {
                        title: "Hortofágos Haloúmi: ",
                        description: "Grillad haloumiost * (lacto ovo)",
                    },
                ]
            }
        }
    }
</script>