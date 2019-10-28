<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <h3>Are you sure you want to delete this item?</h3>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-positive" style="margin-right: 10px" @click="$emit('yes')">Yes</button>
              <button class="btn btn-negative" @click="$emit('close')">No</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./confirmation-dialog.js"></script>
<style scoped src="./confirmation-dialog.css"></style>