<div class="row">
    <div class="col-lg-12 mb-30">
        <div class="row">
    @foreach($news as $new)
            <div class="@if($loop->index == 1) col-lg-8 fullsize @else col-lg-4 @endif">
                <a class="n-dec" href="{{ '/new/' . $new->slug }}">
                    <div class="white_cell news">
                        <img class="client_img" src="{{ count($new->images) ? $new->images[0]->url : '/images/noimage.jpg' }}" alt="">
                        <div class="news-cont">
                            <div class="date">{{ $new->created_at->diffForHumans() }}</div>
                            <h3>{{ $new->name }}</h3>
                            <div class="new-descr">
                                {!! $new->content !!}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    @endforeach
        </div>
        {{ $news->links("pagination::bootstrap-4") }}
    </div>
</div>
