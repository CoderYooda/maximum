<div class="row">
    @foreach($feedbacks as $feedback)
        <div class="col-lg-12 mb-30">
            <div class="white_cell">
                <div class="row">
                    <div class="col-lg-4">
                        <img class="round-73 img_wh" src="{{ count($feedback->images) ? $feedback->images[0]->url : '/images/noimage.jpg' }}" alt="">
                        <div class="name">{{ $feedback->name }}</div>
                        <div class="city">{{ $feedback->city }}</div>
                    </div>
                    <div class="col-lg-8">
                        <p class="cat_descr">{{ $feedback->comment }}</p>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
</div>
