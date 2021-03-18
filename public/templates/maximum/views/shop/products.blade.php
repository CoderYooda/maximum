<h1>{{ $target_category->name }}</h1>
<div class="row">
    <div class="col-lg-3">
        <div class="cats_box">
            <div class="cat_item">
                <a href="{{ $target_category->parent()->count() ? '/catalogue/' . $target_category->parent()->first()->getPath() : '/catalogue' }}">
                    <p>Назад</p>
                </a>
            </div>
            @foreach($categories as $category)
                <div class="cat_item">
                    <a href="{{ '/catalogue/' . $path . '/' . $category->slug }}">
                        <p>{{ $category->name }}</p>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
    <div class="col-lg-9">
        <div class="products_box">
            <div class="row">
                @foreach($products as $product)
                    <div class="col-lg-4">
                        <a href="{{ '/product/' . $product->slug }}">
                            <div class="product_cell">
                                <img src="{{ count($product->images) ? $product->images[0]->url : '/images/noimage.jpg' }}" alt="">
                                <h3>{{ $product->name }}</h3>
                                <p class="cat_descr">{{ $product->description }}</p>
                            </div>
                        </a>
                    </div>
                @endforeach
                @if(!$products->count())
                    <div class="col-lg-12">
                        <div class="no-items">Товаров нет</div>
                    </div>
                @endif
            </div>
        </div>
        @if($target_category->content)
            <div class="cat_description">
                {!! $target_category->content !!}
            </div>
        @endif
    </div>
</div>
