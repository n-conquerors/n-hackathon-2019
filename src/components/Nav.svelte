<script>
  export let segment;
</script>

<style>
  .panel-padded {
    padding: 1em;
  }
</style>

<!-- <nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'setup'} href="setup">Setup</a>
    </li>
 
    <li>
      <a rel="prefetch" class:selected={segment === 'results'} href="blog">
        Sentiment Results
      </a>
    </li>
  </ul>
</nav> -->
<div class="panel panel-padded">
  <ul class="steps has-content-centered has-gaps">
    <li class="steps-segment">
      <a class="has-text-dark" href="config">
        <span class="steps-marker" class:is-hollow={segment === 'config'}>
          <span class="icon">
            <i class="fas fa-info" />
          </span>
        </span>
        <div class="steps-content ">
          <p class="heading">Basic Information</p>
        </div>
      </a>
    </li>
    <li class="steps-segment">
      <a class="has-text-dark" href="themes">
        <span class="steps-marker" class:is-hollow={segment === 'themes'}>
          <span class="icon">
            <i class="fas fa-info" />
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Themes</p>
        </div>
      </a>
    </li>
    <li class="steps-segment">
      <a href="analyze" class="has-text-dark">
        <span class="steps-marker" class:is-hollow={segment === 'analyze'}>
          <span class="icon">
            <i class="fas fa-info" />
          </span>
        </span>

        <div class="steps-content">
          <p class="heading">Analyze</p>

        </div>
      </a>

    </li>
  </ul>
</div>
