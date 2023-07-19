/* --------------------------------------
ALL SCRIPTS HERE WILL EXTEND TO ALL PAGES 
-------------------------------------- */

// 1. Character Counter
$(document).ready(function() {
    var start = 0;
    var limit = 1000;

    $('#message').keyup(function() {  
         start = this.value.length
         if (start > limit) { 
            return false;
            } 
            else if (start == 1000) {
                $("#remaining").html("Character remaining: " + (limit - start)).css("color", "red");
                swal("Oops!", "You have reached the maximum character limit!", "info");
            }
            else if (start > 984) {
                $("#remaining").html("Character remaining: " + (limit - start)).css("color", "red");
                
            }
            else if (start < 1000) {
                $("#remaining").html("Character remaining: " + (limit - start)).css("color", "black");
                
            }
            else {
                $("#remaining").html("Character remaining: " + (limit)).css("color", "black");
            }
    })
})

// 2. Input Mask (Phone Number)
$(document).ready(function() {
    $(".phone").inputmask("(+41) 99 999 99 99", {"onincomplete": function() {
            swal("Oops!", "Please enter a valid phone number!", "info");
            $(".phone").val("");
            return false;
    }})
});   

// 3. Script to get the TIME at real time
setInterval(function() {
    var date = new Date();
    $('#clock').html(
        (date.getHours()<10?'0':'') + date.getHours() + ":" +
        (date.getMinutes()<10?'0':'') + date.getMinutes() + ":" +
        (date.getSeconds()<10?'0':'') + date.getSeconds()
        );
    
}, 500);



// 4. Script to update the page always at 00:00
function autoRefreshPage(hours, minutes, seconds) {
  var now = new Date(); then = new Date();
  then.setHours(hours, minutes, seconds, 0);
  if (then.getTime() < now.getTime()) {
    then.setDate(now.getDate() + 1);
  } 
  var timeout = (then.getTime() - now.getTime());
  setTimeout(function() { 
    window.location.reload(true); 
  }, timeout);
}
autoRefreshPage(0, 0, 0);