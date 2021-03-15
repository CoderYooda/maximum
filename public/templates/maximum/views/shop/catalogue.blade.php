<div class="row">
    @foreach($categories as $category)
        <div class="col-lg-4 mb-30">
            <div class="cat_cell">
                <a href="{{ $path . '/' . $category->slug }}">
                    <img src="{{ count($category->images) ? $category->images[0]->url : '/images/noimage.jpg' }}" alt="">
                    <h3>{{ $category->name }}</h3>
                    <p>{{ $category->description }}</p>
                </a>
            </div>
        </div>
    @endforeach
</div>
