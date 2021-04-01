<h1>{{ $new->name }}</h1>
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
