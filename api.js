
async function jokes () {
    const res = await fetch ("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    // console.log("res:", res);
    // console.log("data:", data);
    const setup = data.setup;
    console.log(data.setup)
    const punchline = data.punchline;
    document.getElementById('myjokes ').innerHTML = setup + " ";

    document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("mypunchline").innerHTML = punchline;

}
    }
    
    jokes();



