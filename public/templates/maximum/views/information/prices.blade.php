<h1>Прайс</h1>
<div class="pr_container">

    @php
        $temp = '';
    @endphp
    <div class="white_block">
        @foreach($formatted as $group => $subgroups)
            <div class="w-100 prices">
                <h2>{{ $group }}</h2>
                <div class="resp_table">
                    <table class="w-100">
                        <tr>
                            <th style="min-width:50px">№</th>
                            <th>Наименование</th>
                            <th>Категория</th>
                            <th>Ед. изменения</th>
                            <th>Стоимость</th>
                        </tr>
                        </thead>
                        @foreach($subgroups as $key => $subgroup)
                            <tr @php if(!isset($subgroups[$key + 1][0]) || isset($subgroups[$key + 1][0]) && $subgroups[$key + 1][0] !== $subgroup[0]){echo "class='b-bot'";}@endphp >
                                <td>{{ $loop->index + 1 }}</td>
                                <td>@php if($temp !== $subgroup[0]){$temp = $subgroup[0];echo $temp;}@endphp</td>
                                <td>{{ $subgroup[1] }}</td>
                                <td>{{ $subgroup[2] }}</td>
                                <td class="font-weight-bold">{{ $subgroup[3] }}</td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        @endforeach
    </div>
</div>
{{--@if($loop->index === 0)  {{ $subgroup[0] }} @endif--}}
