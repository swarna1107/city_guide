<script>
  let results = [];
  let value = "";
  function changeValue(event) {
    value = event.target.value;
  }
  function searchCity() {
    console.log(value);
    fetch("http://127.0.0.1:5001/search", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "127.0.0.1",
      },
      body: JSON.stringify({ city: value }),
    })
      .then((response) => response.json())
      .then((result) => {
        results = result;
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
</script>

<div class="container d-flex vh-50 vw-100">
  <div class="row m-auto">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        {value}
        on:change={changeValue}
      />
    </form>
    <button class="col-6 p-3 m-5 btn btn-outline-success" on:click={searchCity}
      >Search</button
    >
  </div>
</div>
<div class="container">
  <div class="row">
    {#each results as r}
      <div class="col-3 card">
        <div class="card-body">
          <h5 class="card-title">{r.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{r.city}</h6>
          <a class="card-link" href={"mailto:" + r.email}>
            {r.email}
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
