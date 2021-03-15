<div class="row">
    @foreach($categories as $category)
        <div class="col-lg-4">
            <a href="{{ $path . '/' . $category->slug }}">
                <h3>{{ $category->name }}</h3>
                <p>{{ $category->description }}</p>
            </a>
        </div>
    @endforeach
    @foreach($products as $product)
        <div class="col-lg-4">
            <a href="{{ '/prodicts/' . $product->slug }}">
                <h3>{{ $product->name }}</h3>
                <p>{{ $product->description }}</p>
            </a>
        </div>
    @endforeach
</div>
