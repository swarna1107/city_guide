<script>
  import { Router, Route } from "svelte-navigator";
  import Nav from "./Nav.svelte";
  import Home from "./Home.svelte";
  import Join from "./Join.svelte";
</script>

<Router>
  <Nav />
  <Route path="/city_guide/">
    <Home />
  </Route>
  <Route path="/city_guide/join">
    <Join />
  </Route>
</Router>
