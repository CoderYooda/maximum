<h1>{{ $product->name }}</h1>
<div class="row">
    <div class="col-lg-3">
        <div class="product-image">
            <img src="{{ count($product->images) ? $product->images[0]->url : '/images/noimage.jpg' }}" alt="">
        </div>
        <div class="price">
            от {{ (int)$product->price }} ₽
        </div>
    </div>
    <div class="col-lg-9">
        <div class="product-description">
            {!! $product->content !!}
        </div>
    </div>
</div>
