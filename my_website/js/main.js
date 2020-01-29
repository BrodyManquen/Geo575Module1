// Main.js by Brody W. Manquen, 2020 /
//initialize function called when the script loads
//Example 2.3 line 6...function to create a table with cities and their populations
//initialize function called when the script loads
function initialize(){
    cities();
};
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ]};

    //FOREACH LOOP...Example 2.4 line 25
      cityPop.forEach(function(cityObject){
          var tr = document.createElement("tr");

          var city = document.createElement("td");
          city.innerHTML = cityObject.city; //NOTE DIFFERENT SYNTAX
          tr.appendChild(city);

          var pop = document.createElement("td");
          pop.innerHTML = cityObject.population; //NOTE DIFFERENT SYNTAX
          tr.appendChild(pop);

          table.appendChild(tr);
      });
//call the initialize function when the window has loaded
window.onload = initialize();
