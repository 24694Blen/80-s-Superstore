<template>
  <div class="content2">
    <div class="white-block">
      <div class="img">
        <figure>
          <img src="img/mastercard.png" />
        </figure>
        <h2>Betaling Afgrond</h2>
        <p class="p2">
          Uw heeft 2 CD's gekocht op 6 november 2019
          <br />het bedrag was 200 euro.
        </p>
      </div>
      <button class="knop2 bnt2" name="button">
        <router-link to="/">Continue</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  text-decoration: none;
  color:white
}
.content2{
grid-area: content;
/* background-image: url(../img/2s.jpg); */
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 800px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
"left middel right"
;
}
.content2 p {
  grid-area: middel;
  text-align: center;
  position: relative;
  top: 10px;
  color: black;
}
.white-block{
  position: relative;
  height: 750px;
  width: 600px;
  background-color: white;
  grid-area: middel;
  top: 50px;
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "img1 img2 img3"
  "img1 img2 img3"
  "img1 img5 img3";
  justify-items: center;
}


.knop2 {
  position: relative;

  border: none;
  margin: 20px auto;
  padding: 24px;
  width: 240px;
  height: 80px;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-size: 200%;
  transition: 0.6s;
  background-image: linear-gradient(to left,#bcff7c,#ffd265,#c568a5,#9cdaff);
  grid-area: img5;
  bottom: 20px;
}
.knop2:hover{
  background-position: right;
}
.img{
  grid-area: img2;
}
</style>