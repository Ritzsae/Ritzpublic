@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card shadow-lg index-tables border-0 mt-5">
        @include('task._form',['title'=>'Task Create','create'=>true])
    </div>
    <div class="modal fade" id="photoeditor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" id='fafe' role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <div class="col-sm-12 no-gutters p-5 test-toast" id="toappendbutton">
                        <div id="tui-image-editor-container_now" class="shadow-lg rounded"></div>
                        <!--                           <button onclick="tt()">ff</button>-->
                        <button class="btn btn-success" id="foredit" >Save</button>
                    </div>
                    <div class="test"><img src="test"/></div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div></div>
@endsection
@push('scripts')
    <script>


        window.onload = function () {
            $(function () {

                //department dropdown in create.blade.php task
                $.ajax({
                    method: "GET",
                    url: "/getAccessableDepartments",
                }).done(function (data) {
                    console.log("S blade: [task/create] component :[department dropdown] from:app.js Data => Department count" + data.length);
                    if (data.length == 1) {
                        var newOption = new Option(data[0].dept_name, data[0].dept_id, true, true);
                        $('.department').append(newOption).trigger('change');
                    } else {
                        for (var i = 0; i < data.length; i++) {
                            var newOption = new Option(data[i].dept_name, data[i].dept_id, false, false);
                            $('#task_department').append(newOption);
                        }
                    }
                }).fail(function (jqXHR, textStatus) {
                    console.log("F blade: [task/create] component :[department dropdown] from:app.js Fail =>" + textStatus)
                });
                //employee dropdown in create.blade.php task
                $('#task_department').on('change', function () {
                    $('#task_assigned_to').empty();
                    var dept_id = $('#task_department').find(':selected').val();
                    console.log("N blade: [task/create] component :[Department dropdown] from:app.js Selected Department =>"+dept_id);

                    getAssibleEmployee(dept_id);
                });

                // this function is for ckeditor in task create.blade.php
                ClassicEditor
                    .create(document.querySelector('.editor'), {
                        toolbar: [
                            'heading',
                            'bold',
                            'italic',
                            'bulletedList',
                            'numberedList',
                            'blockQuote',
                            'undo',
                            'redo'
                        ],

                    })
                    .then(editor => {
                        taskeditor = editor;
                    })
                    .catch(error => {
                        console.error(error);
                    });



                $('#task-endtime').datetimepicker();
                $('#task-starttime').datetimepicker();
            });
        };


        function getAssibleEmployee(dept_id){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                method: "POST",
                url: "/getAssignablePersons",
                data:{dept_id}
            }).done(function (data) {
                console.log("S blade: [task/create] component :[employee dropdown] from:app.js Data => Employee count" + data.length);
                for (var i = 0; i < data.length; i++) {
                    var newOption = new Option(data[i].emp_name, data[i].emp_id, false, false);
                    $('#task_assigned_to').append(newOption).trigger('change');
                }
            }).fail(function (jqXHR, textStatus) {
                console.log("F blade: [task/create] component :[department dropdown] from:app.js Fail =>" + textStatus)
            });
        }
        function aa(){
            alert('ff')
        }
    </script>
@endpush