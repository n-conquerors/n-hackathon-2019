<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import * as themeData from "../data/themes.js";
  export let selected = new Set();
  function handleClick(e) {
    if (selected.has(e.currentTarget.id)) {
      selected.delete(e.currentTarget.id);
    } else {
      selected.add(e.currentTarget.id);
    }
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 5px;
  }

  .selected {
    background-color: lightgray;
  }

  .card:hover {
    background-color: lightgray;
    cursor: pointer;
  }
</style>

<!-- {@debug selected, temp} -->
<div transition:fade class="container">

  {#each themeData.themes as theme}
    <div
      id={theme.Name}
      class="card"
      class:selected={selected.has(theme.Name)}
      on:click={e => handleClick(e)}>
      <p class="card-header-title">{theme.Name}</p>
      <div class="card-content">{theme.Description}</div>
    </div>
  {/each}
</div>
