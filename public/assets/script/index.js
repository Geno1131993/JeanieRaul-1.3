
$(".tablink").on("click", function(event) {
    console.log("User clicked a button.");
    let contentID = this.id + "-content";
    let activeID = document.getElementsByClassName("active")[0].id;
    if(contentID != activeID){
        let active = document.getElementById(activeID);

        $(active).removeClass("active").addClass("inactive").hide();    


        let target = document.getElementById(contentID);
        $(target).fadeIn(500).addClass("active").removeClass("inactive");
    }
});
