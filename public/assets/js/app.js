// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(()=>{
    $(".button").on("click", (event)=>{
      console.log(event);


      const id = $(this).data("id");
      const devoured = $(this).data("devoured");
  
      const eaten = {
        devoured: devoured
      };
  
      // Send the PUT request.
    //   $.ajax("/api/burger/" + id, {
    //     type: "PUT",
    //     data: eaten
    //   }).then(
    //     ()=>{
    //       console.log("changed to", devoured);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    });
  
  $("#create-form").on("submit", (event)=>{
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    const newBurger = {
      burgerName: $("#burgerName").val().trim()
    };
    console.log(newBurger)
  
    // Send the POST request.
    // $.ajax("/api/cats", {
    //   type: "POST",
    //   data: newCat
    // }).then(
    //   function() {
    //     console.log("created new cat");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });
});
  