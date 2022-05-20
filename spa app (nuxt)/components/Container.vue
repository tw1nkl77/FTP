<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div class="staff">
          <slot name="header"></slot>
          <hr />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>