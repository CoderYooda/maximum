@foreach($vacancies as $vacancy)
    <div class="vacancy_cell">
        <div class="name">{{ $vacancy->title }}</div>
        <div class="content_thin">{!! $vacancy->content !!}</div>
    </div>
@endforeach
