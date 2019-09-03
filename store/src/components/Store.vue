<template>
  <div class="content3">
      <h1>Winkelwagen</h1>
      <div class="white-block3">
        <div class="border1">

          <h3><a href="#">Prince and the revolution Purple Rain</a></h3>
          <img src="img/cd.jpg" alt="cd">
          <select class="dropdownlist">
            <option value="0">aantal</option>
            <option value="volvo">2</option>

          </select>
          <p>Artiest: Prince Album: Purple Rain <br>
          Prijs: <span>EUR 120,99</span></p>
        </div>
        <div class="border2">

          <h3><a href="#">Thriller M.Jackson</a></h3>
          <img src="img/cd.jpg" alt="cd">
          <select class="dropdownlist">
            <option value="0">aantal</option>
            <option value="volvo">2</option>

          </select>
          <p>Artiest: M.Jackson Album: Thriller <br>
          Prijs: <span>EUR 95,25</span></p>
        </div>
        <router-link to="/betalen"><button class="knop3 bnt3" name="button">Naar de kassa</button></router-link>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>