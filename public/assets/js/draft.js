document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  //Player Search
  const searchBtn = document.getElementById("submit_search");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const searchedPlayer = document
        .getElementById("search_value")
        .value.trim();

      fetch(`/api/search`, {
        method: "POST",
        data: {
          name: searchedPlayer,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Searched Player Data", data);
        });
      //   const searchPlayer = () => {
      //     console.log(searchedPlayer);
      //     Model.findAll({
      //       where: {
      //         player_name: player,
      //       },
      //     });
      // connection.query(
      //   "SELECT * FROM players WHERE ?",
      //   { player_name: player },
      //   (err, res) => {
      //     if (res[0]) {
      //       console.log(`Found Player: ${res[0].player_name}`);
      //     } else {
      //       console.error(`No results for ${answer.player}`);
      //     }
      //   }
      // );
      //   };
      //   searchPlayer();
    });
  }
});
