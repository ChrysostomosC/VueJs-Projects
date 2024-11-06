<template>
    <div>
        <h1>Träningsdagbok</h1>
        <h2>Details</h2>
        <p>Skapa en träningsdagbok-sida med hjälp av MVC. Användare ska kunna lägga till övningar (t.ex.
            marklyft eller löpning) och övningstillfällen.
            För varje övning ska användaren kunna lägga till övningens namn och beskrivning.
            För varje övningstillfälle ska användaren kunna lägga till ett datum, välja en övning och skriva hur
            mycket de lyfte eller sprang. (t.ex. 2022-08-12, löpning, 5km).</p>
    </div>
    <div>
        <h3 class="code-screenshots">Code Screenshots</h3>
        <img src="../assets/Träningsdagbok/Träningsdagbok1.png" alt="Träningsdagbok1" class="small-image">
        <img src="../assets/Träningsdagbok/Träningsdagbok2.png" alt="Träningsdagbok2" class="small-image"><br>
        <img src="../assets/Träningsdagbok/Träningsdagbok3.png" alt="Träningsdagbok3" class="small-image">
        <img src="../assets/Träningsdagbok/Träningsdagbok4.png" alt="Träningsdagbok4" class="small-image"><br>
        <img src="../assets/Träningsdagbok/Träningsdagbok5.png" alt="Träningsdagbok5" class="small-image">
        <img src="../assets/Träningsdagbok/Träningsdagbok6.png" alt="Träningsdagbok6" class="small-image"><br>
        <img src="../assets/Träningsdagbok/Träningsdagbok7.png" alt="Träningsdagbok7" class="small-image">
        <img src="../assets/Träningsdagbok/Träningsdagbok8.png" alt="Träningsdagbok8" class="small-image"><br>
    </div>
    <div>
        <h4>Coments</h4>
        <p>
            ExerciseSession-Create.cshtml <span class="red-text">select asp-for="ExerciseId" asp-items="@(ViewData["Exercises"] as SelectList)"
            class="form-control">/select></span> skapar en dropdown.
        </p>
    </div>
    <div>
        <h4 class="code-screenshots">Project Outcome</h4>
        <img src="../assets/Träningsdagbok/Index1.png" alt="Index1" class="small-image">
        <img src="../assets/Träningsdagbok/Index2.png" alt="Index2" class="small-image"><br>
        <img src="../assets/Träningsdagbok/Index3.png" alt="Index3" class="small-image">
        <img src="../assets/Träningsdagbok/Index4.png" alt="Index4" class="small-image"><br>
    </div>

</template>

<script>
export default {
    name: 'Träningsdagbok'
};
</script>

<style>
    .red-text {
    color: red;
}
</style>