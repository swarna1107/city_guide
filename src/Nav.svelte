<script>
  import { Link } from "svelte-navigator";
  import { listen_dev } from "svelte/internal";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/city_guide">Navbar</Link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/city_guide"
          >Home</Link
        >
        <Link class="nav-link" to="/city_guide/join">Join</Link>
      </div>
    </div>
  </div>
</nav>
