@extends('layouts.app')

@section('content')
<div class="col-sm-12 no-gutters">
    <div id="tui-image-editor-container" ></div>
</div>





    <script>
        // Image editor
        var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {
            includeUI: {
                loadImage: {
                    path: 'img/sampleImage2.png',
                    name: 'SampleImage'
                },
                theme: whiteTheme, // or whiteTheme
                initMenu: 'filter',
                uiSize: {
                    height: '700px'
                },
                menuBarPosition: 'top',
                cssMaxWidth: 200,
            },


        });
        window.onresize = function() {
            imageEditor.ui.resizeEditor();
        }
    </script>
@endsection