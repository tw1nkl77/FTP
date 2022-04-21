<template>
  <div class="row">
    <div class="col">
      <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
        <div class="results">
          Showing 1 results
        </div>
        <div class="sorting_container ml-md-auto">
          <div class="sorting">
            <ul class="item_sorting">
              <li>
                <span class="sorting_text">Sort by</span>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                <ul id="sort-items">
                  <li class="product_sorting_btn">
                    <span data-sort="default">Default</span>
                  </li>
                  <li class="product_sorting_btn">
                    <span data-sort="price">Price</span>
                  </li>
                  <li class="product_sorting_btn">
                    <span data-sort="name">Name</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>