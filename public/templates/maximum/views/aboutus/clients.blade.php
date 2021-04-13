<div class="row">
        <div class="col-lg-12 mb-30">
            <div class="row">
                @foreach($clients as $client)
                <div class="col-lg-4">
                    <div class="white_cell client">
                        <img class="client_img" src="{{ count($client->images) ? $client->images[0]->url : '/images/noimage.jpg' }}" alt="">
                        <div class="name_thin">{{ $client->name }}</div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
</div>
