<h1>{{ $product->name }}</h1>
<div class="row">
    <div class="col-lg-3">
        <div class="product-image">
            <img src="{{ count($product->images) ? $product->images[0]->url : '/images/noimage.jpg' }}" alt="">
        </div>
        <div class="price">
            от {{ (int)$product->price }} ₽
        </div>
        @if($product->inStock)
            <div style="    color: #6f8f08;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;">Товар в наличии</div>
        @else
            <div style="    color: #333333;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;">нет в наличии</div>
        @endif
    </div>
    <div class="col-lg-9">
        <div class="product-description">
            {!! $product->content !!}
        </div>
    </div>
</div>
