<template>
    <h1>Välkommen till min Självbeskrivning</h1>
    <div class="image-container">
        <img src="../assets/makis.jpg" alt="Makis picture" class="small-image">
        <div class="text-content">
            <p>Hej! Jag är Chrysostomos Chrysostomou, en passionerad utvecklare med fokus på att skapa användarvänliga
                och effektiva
                webbapplikationer. Jag har erfarenhet inom både frontend och backend och älskar att arbeta med databaser
                för att optimera användarupplevelsen.</p>
            <p>Jag har fördjupad kunskap inom C#, HTML, JavaScript, .NET Core WebAPI/MVC, Entity Framework, Node.js,
                Vue.js, SQL-databaser och MongoDB.</p>
            <p>Jag ser fram emot att bidra med mina kunskaper och att arbeta i en kreativ miljö där innovation
                uppmuntras.</p>
        </div>
    </div>
</template>

<style scoped>
.image-container {
    display: flex;
    align-items: center;
    font-family: Georgia, Roboto, or Merriweather;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.small-image {
    width: 200px;
    height: auto;
    margin-right: 15px;
    border-radius: 8px;
}

.text-content p {
    margin: 0;
    line-height: 1.5;
}

.topics-list {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
}

.topics-list li {
    background: #e9ecef;
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
}
</style>
