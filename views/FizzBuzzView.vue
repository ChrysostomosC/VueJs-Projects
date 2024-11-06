<template>
    <div>
        <h1>FizzBuzz</h1>
        <h2>Details</h2>
        <p>Skriv ett konsollprogram i C# som skriver ut alla tal från 1 till 100 på varsin rad.
            Om talet är delbart på 3, skriv ut ”Fizz” istället för talet.
            3 och 6 ska exempelvis ersättas med Fizz.
            Om talet är delbart med 5, skriv ut ”Buzz” istället för talet.
            5 och 10 ska exempelvis ersättas med Buzz
            Om talet är delbart på både 3 och 5, skriv ut FizzBuzz istället.
            15 och 30 ska exempelvis ersättas med FizzBuzz.</p>
    </div>

    <div>
        <h3 class="code-screenshots">Code Screenshots</h3>
        <img src="../assets/FizzBuzz/FizzBuzz.png" alt="Fizzbuzz" class="small-image">
    </div>
    <div>
        <h4>Coments</h4>
        <p>
            Vi använder modulusoperatorn (%) eftersom den beräknar resten vid division.
        </p>
    </div>
    <div>
        <h4 class="code-screenshots">Project Outcome</h4>
        <img src="../assets/FizzBuzz/FizzBuzz2.png" alt="Fizzbuzz2" class="small-image"><br>
        <img src="../assets/FizzBuzz/FizzBuzz3.png" alt="Fizzbuzz3" class="small-image">
    </div>
    

</template>

<script>
export default {
    name: 'FizzBuzz'
};
</script>