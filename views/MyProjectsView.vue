<template>
    <div class="projects-container">
        <h1 class="projects-title">My projects</h1>

        <p class="projects-description">Här kommer en lista över olika projekt som jag har arbetat med och slutfört de senaste månaderna. Genom dessa
            projekt har jag utvecklat min kompetens och fördjupat mina kunskaper inom olika tekniker och ramverk. Varje
            projekt har bidragit till min förståelse och har stärkt min erfarenhet som utvecklare.
        </p>

        <h2 class="projects-list-title">List</h2>

        <ul class="projects-list">
            <p>
                <router-link to="/fizzBuzzView" class="project-link">FizzBuzz</router-link>
            </p>
            <p>
                <router-link to="/mvcPortfolioView" class="project-link">MVC Portfolio</router-link>
            </p>
            <p>
                <router-link to="/träningsdagbokView" class="project-link">Träningsdagbok</router-link>
            </p>
            <p>
                <router-link to="/ticTacToeView" class="project-link">TIcTacToe</router-link>
            </p>
            <p>
                <router-link to="/företagssidaView" class="project-link">Företagssida</router-link>
            </p>
            <p>
                <router-link to="/receptsidaView" class="project-link">Receptsida</router-link>
            </p>
            <p>
                <router-link to="/bloggplattformView" class="project-link">Bloggplattform med SQL</router-link>
            </p>
            <p>
                <router-link to="/träningsdagbokSQLView" class="project-link">Träningsdagbok med SQL</router-link>
            </p>
            <p>
                <router-link to="/bloggplattformAPIView" class="project-link">Bloggplattform API</router-link>
            </p>
            <p>
                <router-link to="/cVPortfolioHbsView" class="project-link">CV / Portfolio med Handlebars</router-link>
            </p>
            <p>
                <router-link to="/receptlistaHbsView" class="project-link">Receptlista med Handlebars</router-link>
            </p>
            <p>
                <router-link to="/restaurangsidaVueJSView" class="project-link">Restaurangsida med Vue JS</router-link>
            </p>
            <p>
                <router-link to="/bloggVueJSView" class="project-link">Blogg med Vue JS</router-link>
            </p>
            <p>
                <router-link to="/todoListaVueJSView" class="project-link">Todo-lista med Vue JS</router-link>
            </p>
            <p>
                <router-link to="/webbutikVueJSView" class="project-link">Webbutik med Vue JS</router-link>
            </p>
            <p>
                <router-link to="/cRUDLoansView" class="project-link">CRUD för Loans</router-link>
            </p>
            <p>
                <router-link to="/cRUDBloggView" class="project-link">CRUD för Blogg</router-link>
            </p>
            <p>
                <router-link to="/frontendBloggView" class="project-link">Frontend för Blogg</router-link>
            </p>
            <p>
                <router-link to="/todoListaFrontendBackendView" class="project-link">Todo-lista frontend & backend</router-link>
            </p>
        </ul>
    </div>

</template>

<style>
.code-screenshots {
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    /* Increase size */
    font-weight: bold;
    color: #ffffff;
    /* White text color */
    background-color: #6A7BCE;
    padding: 10px 15px;
    margin: 20px 0;
    border-radius: 5px;
    /* Rounded corners */
    text-align: center;
    /* Center align text */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 1);
    /* Subtle shadow */
}

.small-image {
    width: 400px; /* Set thumbnail width */
    height: auto; /* Maintain aspect ratio */
    transition: transform 0.3s ease; /* Smooth transition for scaling */
    margin: 10px; /* Space around images */
    cursor: pointer; /* Pointer cursor on hover */
}

.small-image:hover {
    transform: scale(2.8); /* Enlarge image on hover */
}

.projects-container {
    max-width: 800px; /* Limit the width for better readability */
    margin: 0 auto; /* Center the container */
    padding: 20px; /* Add padding around the content */
    background-color: #f9f9f9; /* Light background color */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.projects-title {
    font-family: 'Arial', sans-serif; /* Font for the title */
    font-size: 2rem; /* Larger font size for title */
    color: #454444; /* Dark gray color for text */
    margin-bottom: 15px; /* Space below the title */
}

.projects-description {
    font-family: 'Georgia', serif; /* Serif font for a professional look */
    font-size: 1rem; /* Regular font size for description */
    line-height: 1.6; /* Increase line height for readability */
    color: #666; /* Medium gray color for text */
    margin-bottom: 20px; /* Space below the paragraph */
}

.projects-list-title {
    font-family: 'Arial', sans-serif; /* Font for the list title */
    font-size: 1.5rem; /* Font size for the list title */
    color: #444; /* Darker gray color */
    margin-bottom: 10px; /* Space below the list title */
}

.projects-list {
    list-style-type: none; /* Remove default list style */
    padding: 0; /* Remove padding */
}

.projects-list p {
    margin-bottom: 10px; /* Space between list items */
}

.project-link {
    text-decoration: none; /* Remove underline */
    color: #007bff; /* Blue color for links */
    transition: color 0.3s; /* Smooth transition for color change */
}

.project-link:hover {
    color: #0056b3; /* Darker blue on hover */
}
</style>