<template>
  <div>
    <button 
      class="btn btn-primary" 
      style="width: 250px"
      @click="modalOpened = !modalOpened"
    >Направить обращение...</button>
    <div v-if="modalOpened" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        modalOpened: false,
    })
};
</script>