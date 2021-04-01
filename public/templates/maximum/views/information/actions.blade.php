<div class="row">
    @foreach($actions as $action)
        <div class="col-lg-12">
            <div class="white_cell actions">
                <img class="client_img" src="{{ count($action->images) ? $action->images[0]->url : '/images/noimage.jpg' }}" alt="">
            </div>
        </div>
    @endforeach
</div>
