
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->

    <meta name="csrf-token" content="{{ csrf_token() }}">
 <script type="text/javascript" src="{{ asset('js/jquery.min.js') }}"></script>
<!-- <script type="text/javascript" src="http://cdn.datatables.net/1.10.20/js/jquery.dataTables.js"></script>
<script type="text/javascript" src="http://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.js"></script> -->

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
 

    <script src="{{ asset('js/app.js') }}" defer></script>

<link rel="stylesheet" href="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css">
    
   <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">

    {{--//for photo editor--}}

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.0/fabric.js"></script>
    <script type="text/javascript" src="https://uicdn.toast.com/tui.code-snippet/v1.5.0/tui-code-snippet.min.js"></script>
    <script type="text/javascript" src="https://uicdn.toast.com/tui-color-picker/v2.2.3/tui-color-picker.js"></script>

<!-- for history -->






    
{{--    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>--}}
    <script src="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.js"></script>
    <script type="text/javascript" src="{{ asset('js/theme/white-theme.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/theme/black-theme.js') }}"></script>

    {{--//for photo editor--}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href='https://mmwebfonts.comquas.com/fonts/?font=zawgyi'/>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>

    </style>
    @stack('scripts')
    @stack('css')
</head>
<body class="bg-white">
    <div id="app" class="uniandzawgyi uni">

    <div>
    </div>
        @auth
            @include('components.nav')
        @endauth
        <main>
            @include('sweetalert::alert')
            @yield('content')
        </main>
        @include('components.footer')
    </div>
    <script>





    </script>

</body>


</html>
