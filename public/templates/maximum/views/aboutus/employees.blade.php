<div class="row">
    <div class="col-lg-12 mb-30">
        <div class="row employees_co">
            @foreach($employees as $employee)
            <div class="col-lg-4 employees_it">
                <div class="сlient_cell">
                    <img class="client_img" src="{{ count($employee->images) ? $employee->images[0]->url : '/images/noimage.jpg' }}" alt="">
                    <div class="name">{{ $employee->name }}</div>
                    <div class="name_thin">{{ $employee->post }}</div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
