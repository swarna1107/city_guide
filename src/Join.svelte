<script>
  import { useNavigate } from "svelte-navigator";

  let data = {};
  const navigate = useNavigate();
  function submitForm() {
    console.log(data);
    fetch("http://swarnajha.pythonanywhere.com/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://swarnajha.pythonanywhere.com",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        if (res.status == true) {
          navigate("/");
        } else {
          window.alert(res.message);
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  }
</script>

<div class="vh-50 vw-100">
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          name="name"
          bind:value={data["name"]}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail"
          name="email"
          bind:value={data["email"]}
        />
      </div>
      <div class="mb-3">
        <label for="exampleCityName" class="form-label">City</label>
        <input
          type="text"
          class="form-control"
          id="exampleCityName"
          name="city"
          bind:value={data["city"]}
        />
      </div>
    </form>
    <button on:click={submitForm} class="btn btn-primary">Submit</button>
  </div>
</div>
