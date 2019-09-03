<template>
  <div id="app">
    <div id="nav">
     <header>
      <img class="logo" src="../public/img/3s.png" alt="imglogo" />
      <nav class="nav">
        <ul>
          <li><router-link to="/"><i class="fas fa-home"></i><span>Home</span></router-link></li>
          <!-- <li><router-link to="/product"><i class=""></i><span>Products</span></router-link></li> -->
          <li><router-link to="/video"><i class="fas fa-play-circle"></i><span>Video</span></router-link></li>
          <li><router-link to="/info"><i class="fas fa-search"></i><span>Info</span></router-link></li>
          <li><router-link to="/winkelmand"><i class="fas fa-info-circle"></i><span>Winkelmand</span></router-link></li>
        </ul>

      </nav>
    </header>
    </div>
    <router-view/>
  
  <footer>
  <div class="footer-bottem">
        <div class="footer-icons">
          <ul>
            <li><a href="#" target="blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <p>Design by: <a href="#">Blen & Chris</a></p>
      </div>
    </footer>
    </div>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "header header header"
  "content content content"
  "content content content"
  "footer footer footer";
  font-size: 1.06rem !important
}

header{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "logo nav nav";
    grid-area: header;
  background-color: #EC1C4B;
  width: 100%;
  height: 100px;
}
.nav{
  grid-area: nav;
float: right;
text-decoration: none;
}
.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.nav li{

  display: inline-block;
  margin: 40px;
  padding-top: 2px;
  font-family: 'Rock Salt', cursive;
}
.nav a {
    color: black;
    text-decoration: none;
}

.logo{
  float: left;
  grid-area: logo;
  text-align: center;
  align-items: center;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 20px;
  left: 20px;
 }
.content{
grid-area: content;
background-image: url(../public/img/2s.jpg);
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

.knop {
  position: relative;
  top: 56px;
  border: none;
  margin: 20px auto;
  padding: 24px;
  width: 240px;
  height: 80px;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-size: 200%;
  transition: 0.6s;
  background-image: linear-gradient(to left,#A6206A,#EC1C4B,#F16A43,#f7D969);
  grid-area: middel;
}
.knop:hover{
  background-position: right;
}

footer {
  grid-area: footer;
  background-color: #EC1C4B;
}
.footer-icons{
  width: 100%;
  height: auto;
  margin:auto;
}
.footer-icons ul {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.footer-icons ul li{
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  border-radius: 100%;
  background: #EC1C4B;
}
.footer-icons ul li a{
  color: #272727;
  font-size: 25px;
  display: block;
}
.footer-icons ul li a i{
 line-height: 50px;
}

.footer-bottem {
  width: 100%;
  height: 90%;
  margin: auto;
  background: #EC1C4B;
  padding: 10px;
  box-sizing: border-box;

}
.footer-bottem p{
  font-family: arial;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-family: 'Rock Salt', cursive;
}
.footer-bottem p a{
  color: #fff;
}
/* einde Home page Start betaal css page /////////////////////////////////////////////// */
.content2{
grid-area: content;
background-image: url(../public/img/2s.jpg);
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
  color: white;
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
  grid-template-columns: 300px 300px;
  grid-template-areas:
  "img1 img2"

  ;
  justify-items: center;
}

.hover01 figure img {
  grid-area: img1;
  width: 150px;
  height: 150px;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover01 figure:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
.hover02 figure img {
  grid-area: img2;
  width: 150px;
  height: 150px;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover02 figure:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
/* einde betaal page Start infopage /////////////////////////////////////////////// */
.content3{
grid-area: content;
background-image: url(../public/img/2s.jpg);
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
.content3 h1{
  grid-area: middel;
  text-align: center;
  position: relative;
  color: white;
  margin-top:0;
}
.white-block2{
  position: relative;
  height: 750px;
  width: 600px;
  background-color: white;
  grid-area: middel;
  top: 50px;
  text-align: center;
  align-items: center;
  justify-items: center;
}
.white-block2 h2 {
  position: relative;
  top: 40px;
}
.white-block2 p {
  position: relative;
  top: 80px;
}
.white-block2 iframe{
  position: relative;
  top: 100px;
}
/* einde info page Start winkelmandjepage /////////////////////////////////////////////// */
.white-block3{
  position: relative;
  height: 750px;
  width: 600px;
  background-color: #d9dadb;
  grid-area: middel;
  top: 50px;
  text-align: center;
  align-items: center;
  justify-items: center;
}
.white-block3 img{
  float: left;
  width: auto;
  height: 250px;
}
.border1 a:hover{
  color: red;
}
.border2 a:hover{
  color: red;
}
.dropdownlist{
  cursor: pointer;
}
.border2 img{
  position: relative;
  top: 30px;
}
.border2 p{
  position: relative;
  top: 270px;
}
.border2 select{
  position: relative;
  top: 270px;
}
.border2 h3{
  position: relative;
  top: 270px;
}
.border2 span{
  color: red;
}
.border1 span{
  color: red;
}
.knop3 {

  position: relative;
  top: 350px;
  border: none;
  margin: 20px auto;
  padding: 24px;
  width: 240px;
  height: 80px;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-size: 200%;
  transition: 0.6s;
  background-image: linear-gradient(to left,#fac42d,#fcba03,#F16A43,#f7D969);
  grid-area: middel;
}
.knop3:hover{
  background-position: right;
}




</style>
