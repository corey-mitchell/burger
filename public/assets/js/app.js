// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document.on('load', ()=>{
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
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   const newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
}));
  