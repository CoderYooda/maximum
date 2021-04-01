$(function() {
    $("#callback").submit(function(e) {
        e.preventDefault();
        let form = $(this);
        let url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function(data)
            {
                alert(data);
            }
        });


    });
});
if(document.querySelector('#map') != null)
    ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [50.572514,36.593134],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([50.572514,36.593134], {
            iconCaption: 'Офис'
        }, {
            preset: 'islands#greenCircleDotIconWithCaption',
            iconCaptionMaxWidth: '100'
        })).add(new ymaps.Placemark([50.572514|36.593134], {
            iconCaption: 'Питомник'
        }, {
            preset: 'islands#greenCircleDotIconWithCaption',
            iconCaptionMaxWidth: '100'
        }));

    let m = document.querySelector('#map');
    let links = document.querySelectorAll('.map_link a');
    links.forEach( (item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            let href = e.target.getAttribute('href');
            myMap.setCenter(href.split('|'), 15);
            m.scrollIntoView({block: "center", behavior: "smooth"});
        })
    })
}

