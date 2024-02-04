$(document).ready(function () {
  $(".container")
      .mouseenter(function () {
          $(".card").stop().animate(
              {
                  top: "-90px",
              },
              "slow"
          );
      })
      .mouseleave(function () {
          $(".card").stop().animate(
              {
                  top: 0,
              },
              "slow"
          );
      });

  // Add click event for "Yes" button
  $("#yesBtn").click(function () {
      // Add your custom logic for the "Yes" button here
      alert("Thank you, you made the right choice");
  });

  // Add click event for "No" button
  $("#noBtn").click(function () {
      // Add animation for "No" button
      animateNoButton();
  });

  // Function to animate the "No" button
  function animateNoButton() {
      var button = $("#noBtn");
      button.css("animation", "shake 0.5s ease");
      setTimeout(function () {
          button.css("animation", "");s
      }, 500);
  }
});
