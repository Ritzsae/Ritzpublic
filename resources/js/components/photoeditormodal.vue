<template>

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


                    <div class="col-sm-12 no-gutters p-5 test-toast">
                        <div id="tui-image-editor-container" class="shadow-lg rounded"></div>
                        <!--                           <button onclick="tt()">ff</button>-->
                        <button class="btn btn-success" onclick="savedatatosaver()">Save</button>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "photoeditormodal.vue"
    }

</script>

<style scoped>

</style>