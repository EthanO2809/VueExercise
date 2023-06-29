<template>

  <nav class="lft">
    <div>
      <h2 class="head">Cool Krepts</h2>
    </div>
    <div>
      <router-link to="/">Home</router-link> ||
      <router-link to="/products">Products</router-link> ||
      <router-link to="/contact">Contact</router-link> ||
      <router-link to="/about">About</router-link> ||
      <router-link to="/admin">Admin</router-link>
    </div>
  </nav>
  <router-view />
  <footer class="shad">
        <div class="flex">
            <div><a href="#"><img src="https://i.postimg.cc/d0KMNnqt/pngwing-com-13.png" alt="" class="logo"></a></div>
            <div><a href="#"><img src="https://i.postimg.cc/htYYNsc7/pngwing-com-15.png" alt="" class="logo"></a></div>
            <div><a href="#"><img src="https://i.postimg.cc/7YbMHgNn/pngwing-com-10.png" alt="" class="logo"></a></div>
            <div><a href="#"><img src="https://i.postimg.cc/MGby1ZPK/pngwing-com-16.png" alt="" class="logo"></a></div>
            <p class="mt-4"><b>CopyRights, Ethan Oliver ©️ 2023</b></p>
        </div>
  </footer>

</template>

<style>
@import url("https://fonts.cdnfonts.com/css/isidora");
#app {
  font-family: "Isidora", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

nav {
  padding: 30px;
  box-shadow: inset black 6px 10px 18px;
  width: 95%;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #000000;
}
  .logo {
    width: 4rem;
  }

  .shad {
    box-shadow: inset black 4px 4px 4px 4px;
  }
  .flex {
  display: flex;
}
/* .lft {
  display: row;
  columns: 2;
  float: left;
}
.head {
  margin-top: 1px;
  margin-right: 562px;
}
.col-2 {
  font-size: 20px;
  margin-left: 8rem;
} */
</style>
