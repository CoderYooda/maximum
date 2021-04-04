<h1>{{ $new->name }}</h1>
<div class="row">
    <div class="col-lg-3">
        <div class="aside_menu">
            <ul>
                <li>
                    <a href="/information">Информация</a>
                </li>
                <li>
                    <a href="/actions">Акции</a>
                </li>
                <li>
                    <a href="/news">Новости</a>
                </li>
                <li>
                    <a href="/deliver">Доставка и оплата</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-lg-9 all_img_width">
        <div class="row">
            <div class="col-lg-12">
                <div class="date">
                    Дата публикации: {{ $new->created_at->diffForHumans() }}
                </div>
                <div class="new-description">
                    {!! $new->content !!}
                </div>
                <div class="new-image">
                    <img src="{{ count($new->images) ? $new->images[0]->url : '/images/noimage.jpg' }}" alt="">
                </div>
            </div>
            <div class="col-lg-9">

            </div>
        </div>
    </div>
</div>


