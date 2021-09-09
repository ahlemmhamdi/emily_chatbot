jQuery(document).ready(function() {
    $("#submit-button").click(function(e) {
      e.preventDefault();


      $.ajax({
          type: "POST",
          url: "/chatbot",
          data: {
              question: $("#question").val()
          },
          success: function(result) {
            $("#response").append("<br>Me: "+$("#question").val()+ "<br> Emily: "+result.response);
            $("#question").val("")
          },
          error: function(result) {
              alert('error');
          }
      });



    });

  });
