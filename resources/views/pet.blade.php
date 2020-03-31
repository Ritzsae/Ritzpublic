@extends('layouts.app')
@section('content')

    <div class="col-sm-12 no-gutters p-5 test-toast">
        <div id="tui-image-editor-container" class="shadow-lg rounded"></div>
        {{--        <button onclick="tt()">ff</button>--}}
        <button class="btn btn-success" onclick="savedatatosaver()">Save</button>
    </div>

@endsection
@push('scripts')
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script>



        //end saving function to saver
    </script>
@endpush
{{--=======--}}

{{--<div class="col-sm-12 no-gutters p-5 test-toast">--}}
{{--    <div id="tui-image-editor-container" class="shadow-lg rounded" ></div>--}}
{{--</div>--}}

{{--@endsection--}}
{{--@push('scripts')--}}
{{--    <script>--}}

{{--     window.onload = function () {--}}
{{--        // Image editor--}}
{{--        var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {--}}
{{--            includeUI: {--}}
{{--                --}}
{{--                loadImage: {--}}
{{--                    path: 'img/sampleImage2.png',--}}
{{--                    name: 'SampleImage',--}}
{{--                },--}}
{{--                --}}
{{--                theme: blackTheme, // or whiteTheme--}}
{{--                initMenu: 'filter',--}}
{{--                uiSize: {--}}
{{--                    height:'580px',--}}
{{--                    width:'50%'--}}
{{--                },--}}
{{--                --}}
{{--                menuBarPosition: 'left',--}}
{{--            },--}}
{{--                cssMaxWidth: 300,--}}
{{--                cssMaxHeight: 300,--}}

{{--        });--}}
{{--        --}}

{{--        --}}

{{--     }--}}
{{--    </script>--}}

{{--@endpush--}}

{{-->>>>>>> f14bff0a2a2fe8d4de8fd409ab58ccf47ded020a--}}
