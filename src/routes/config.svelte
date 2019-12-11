<script>
  import { fade } from "svelte/transition";
</script>

<style>

</style>

<div transition:fade class="columns">
  <div class="column">
    <div class="field">
      <label class="label">Organization to Compare</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Start Date</label>
          <div class="control">
            <input class="input" type="date" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">End Date</label>
          <div class="control">
            <input class="input" type="date" />
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="control">
        <input
          class="button is-link is-pulled-right"
          type="submit"
          value="Submit" />
      </div>
    </div>
  </div>
</div>
