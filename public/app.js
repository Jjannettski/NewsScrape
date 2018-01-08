
// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body

function displayResults(articles) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  articles.forEach(function(article) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + article.title + "</td>" +
                         "<td>" + article.link + "</td></tr>");
  });
}

// Bonus function to change "active" header
  // remove and apply 'active' class to distinguish which column we sorted by
function setActive(selector) {
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
  // Call our function to generate a table body
$.getJSON("/all", function(data) {
  displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
  // Set new column as currently-sorted (active)
   // Do an api call to the back end for json with all animals sorted by weight
     // Call our function to generate a table body
$("#title-sort").on("click", function() {
  setActive("#title");
  $.getJSON("/title", function(data) {
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
  // Set new column as currently-sorted (active)
   // Do an api call to the back end for json with all animals sorted by name
      // Call our function to generate a table body
$("#link-sort").on("click", function() {
  setActive("#link");
  $.getJSON("/link", function(data) {
    displayResults(data);
  });
});
