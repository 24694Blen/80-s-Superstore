<template>
  <div class="content">
    <div id="container">
      <div class="container-product">
        <div class="product">
          <router-link to="/product-info">
            <img src="../../public/img/80s.jpg" alt />
            <p class="title">Prince and the Revolution|Purple Rain</p>
          </router-link>
          <div class="price">€19,99</div>
        </div>
        <div class="product">
          <router-link to="./product-info">
            <img src="../../public/img/80s.jpg" alt />
            <p class="title">Michael Jackson | Thriller</p>
          </router-link>
          <div class="price">€19,99</div>
        </div>
        <div class="product">
          <router-link to="/product-info">
            <img src="../../public/img/80s.jpg" alt />
            <p class="title">Talking Heads | Remain in Light</p>
          </router-link>
          <div class="price">€19,99</div>
        </div>
        <div class="product">
          <router-link to="/product-info">
            <img src="../../public/img/80s.jpg" alt />
            <p class="title">Bruce Springsteen | Born in the U.S.A.</p>
          </router-link>
          <div class="price">€19,99</div>
        </div>
        <div class="product">
          <router-link to="/product-info">
            <img src="../../public/img/80s.jpg" alt />
            <p class="title">David Bowie | Scary Monsters</p>
          </router-link>
          <div class="price">€19,99</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList"
};
</script>

<style scoped>
.content {
  grid-template-columns: none;
  grid-template-areas: none;
}
#container {
  width: 100%;
  font-family: "Audiowide", cursive;
}


.product img {
  width: 100%;
}
a {
  color: #8a3972;
  text-decoration: none;
  font-size: 1.2rem;
}
.price {
  text-align: end;
  font-size: 1.1rem;
}
.container-product {
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  background: white;
  border-radius: 10px;
}

.product {
  width: 32%;
  height: auto;
  /* border: 1px solid black; */
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
}
</style>