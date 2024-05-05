let amenity_id = [];

$('document').ready(
    () => {
        $("div.popover ul li input").on(
            "click", function () {

                let $checkbox = $(this)

                if ($(this).is(":checked")){
                    amenity_id.push($(this).attr('data-name'));
                } else {
                    $.each(amenity_id, function (index, item){
                            console.log(item)
                            
                        if (item == $checkbox.attr('data-name') && index != -1){
                            amenity_id.splice(index, 1)
                        }
                    })
                }
                $('div.amenities h4').empty()
                for (a_id of amenity_id){
                    if (amenity_id) {
                        if (a_id != amenity_id[0]) {
                            $('div.amenities h4').append(", ")
                        }
                    }
                    $('div.amenities h4').append(a_id.replace(/:/g, ""))

                    if ($('div.amenities h4').text().length > 31) {
                        console.log('greater than 34')
                        $('div.amenities h4').text($('div.amenities h4').text().substring(0, 31))
                        $('div.amenities h4').append("...")
                    }
                }
                
            }
        )
    }
);
