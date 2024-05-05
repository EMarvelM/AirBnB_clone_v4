let amenity_id = [];
let cli

$('document').ready(
    // D O M
    cli = $("div.popover ul li input").is(":checked")
    if (cli){
        console.log("clicked")
    }
    else {
        console.log("unclicked")

    }
);

/*
$('document').ready(
    // D O M
    $("div.popover ul li input").on(
        "click", function (this) {
            if ($(this).is(":checked")){
                console.log("user has clicked now")
                amenity_id.append($('input').attr('data-id'));
            } else {
                console.log("user has unclicked now")
                amenity_id.remove($('input').attr('data-id'));
            }
            for (a_id of amenity_id){
                $('div.amenities h4').text(a_id);
            }
            
        }
    )
);
*/