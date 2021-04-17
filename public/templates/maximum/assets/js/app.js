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
                form.trigger('reset');
                document.getElementsByTagName('body')[0].innerHTML += '<div class="form_cont"><div onclick="this.parentNode.remove()" class="form_close">✖</div><div class="form_success">Спасибо за обращение!</div></div>'
            }
        });


    });
    let buts = document.querySelectorAll('.consult_butt');
    let target = document.querySelector('#callback');
    buts.forEach( (item)=>{
        item.addEventListener('click', (e)=>{
            target.scrollIntoView({block: "center", behavior: "smooth"});
        })
    });

    let hlinks = document.querySelectorAll('.menu_f');
    hlinks.forEach( (item)=>{
        item.addEventListener('click', (e)=>{
            item.querySelector('a').click();

        })
    });

    let mobiledrop = document.getElementById('mob_dropdown_butt');
    if(mobiledrop){
        mobiledrop.addEventListener('click', function(){
            document.getElementById('mob_dropdown').classList.toggle('show');
        })
    }

    let close = document.getElementById('close');
    if(close){
        close.addEventListener('click', function(){
            document.getElementById('mob_dropdown').classList.remove('show');
        })
    }
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
    myMap.behaviors.disable('drag');
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

