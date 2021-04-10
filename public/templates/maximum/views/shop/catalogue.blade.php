<h1>Каталог товаров</h1>
<div class="row">
    @foreach($categories as $category)
        <div class="col-lg-4 mb-30">
            <a href="{{ $path . '/' . $category->slug }}">
                <div class="cat_cell">
                    <img src="{{ count($category->images) ? $category->images[0]->url : '/images/noimage.jpg' }}" alt="">
                    <h3>{{ $category->name }}</h3>
                    <p class="cat_descr">{!! strip_tags($category->content) !!}</p>
                </div>
            </a>
        </div>
    @endforeach
</div>
