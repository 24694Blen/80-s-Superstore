<template>
  <div class="content">
    <div class="container">
      <div class="container-product">
        <div id="info">
          <img src="../../public/img/80s.jpg" alt />
          <div class="right">
            <span>€19,99</span>
            <span>(inclusief 21% btw)</span>
            <p>Op voorraad / In stock</p>
            <span>Aantal</span>
            <select name id style="width:150px;">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
                  <p><button class="knop bnt1" name="button"><router-link to="/winkelmand">Zet in winkelmand</router-link></button></p>
          </div>
          <div class="container-info">
            <div class="details">
              <ul>
                <h2>tracks</h2>
                <li>Let's Go Crazy</li>
                <li>Take Me With U</li>
                <li>The Beautiful Ones</li>
                <li>Computer Blue</li>
                <li>Darling Nikki</li>
                <li>When Doves Cry</li>
                <li>I Would Die 4 U</li>
                <li>Baby I'm a Star</li>
                <li>Purple Rain</li>
              </ul>
            </div>
            <div class="details">
              <h3>By</h3>
              <span>Prince and the Revolution</span>
              <h3>Recorded</h3>
              <span>August 1983 – March 1984</span>
               <h3>Studio</h3>
              <span>First Avenue, The Warehouse, Record Plant and Sunset Sound</span>
               <h3>Genre</h3>
              <span>Rock, Pop, R&B, Funk, Psychedelia, Soul and Gospel</span>
               <h3>Label</h3>
              <span>Warner Bros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  display: inline;
  color: black;
  font-size: 20px;
}
.content {
  grid-template-columns: none;
}
.container-product {
  font-family: "Audiowide", cursive;
  padding-top: 20px;
  display: flex;
  max-width: 80%;
  margin: 75px auto;
  flex-wrap: wrap;
  background: white;
  border-radius: 10px;
}
.container-info{
   display: flex;

}
#info img {
  width: 45%;
}
#info h2 {
  margin: 0;
}
#info h3 {
  margin: 0;
}

.right {
  float: right;
  padding: 1.5rem;
  background: lightgray;
}
#info {
  width: 90%;
  margin: 0 auto;
}
.center {
  margin: 0 auto;
}
.details {
  width: 50%;
  height: auto;
  cursor: pointer;
}
</style>