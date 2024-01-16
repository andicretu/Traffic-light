let time = 0;
let intervalID

function changeColorOnClick() {
    $('.btn-danger').on("click", function(){
      $(".btn-danger").removeClass('btn-danger');
      $(this).addClass("btn-warning");
    });

    $('.btn-warning').on("click", function(){
        $(".btn-warning").removeClass('btn-warning');
        $(this).addClass("btn-success");
    });
    $('.btn-success').on("click", function(){
        $(".btn-success").removeClass('btn-success');
        $(this).addClass("btn-danger");
    });
}

function increaseTime() {
    time += 1;
    let seconds = Math.floor(time % 1000 / 10)
}

function runTime() {
   intervalID = setInterval(increaseTime, 100)
}
 
function changeColorByTime() {
    if ($(".btn-danger").hasClass('btn-danger')) {
        $(".btn-danger").removeClass('btn-danger').addClass("btn-warning");
    } else if ($(".btn-warning").hasClass('btn-warning')) {
        $(".btn-warning").removeClass('btn-warning').addClass("btn-success");
    } else if ($(".btn-success").hasClass('btn-success')) {
        $(".btn-success").removeClass('btn-success').addClass("btn-danger");
    }
}

  $(document).ready(function() {
    runTime();
    changeColorOnClick();
    setInterval(changeColorByTime, 10000); // Change color every 10 seconds
});