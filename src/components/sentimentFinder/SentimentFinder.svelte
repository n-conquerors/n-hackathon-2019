<script>

</script>

<style>
  .container {
    display: grid;
    grid-template-rows: 1fr 1fr 4fr;
    grid-template-columns: 1fr 1fr;
  }

  .header-item {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
  }

  .info-item {
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .article-item {
    grid-column-start: 2;
    grid-row-start: 2;
  }
</style>

<div class="container">
  <div class="header-item">
    <slot name="slider">header</slot>
  </div>
  <div class="info-item">
    <slot name="info">information</slot>
  </div>
  <div class="article-item">
    <slot name="article">article</slot>
  </div>
</div>
