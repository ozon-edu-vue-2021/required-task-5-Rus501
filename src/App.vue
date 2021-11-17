<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item in menu" :to="item.link" :key="item.name">
        {{ item.name }}
      </router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import "normalize.css";
import routerLinks from "@/router/routes";

export default {
  name: "App",
  computed: {
    menu() {
      return [
        {
          link: routerLinks.home,
          name: "Products",
        },
        {
          link: routerLinks.cart,
          name: "Cart",
        },
        {
          link: routerLinks.favourites,
          name: "Favourites",
        },
      ];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

#nav {
  max-width: 600px;
  margin: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

#nav a {
  width: 150px;
  text-align: center;
  padding: 10px 0;
  border: 1px solid #000;
  color: #000;
  text-decoration: none;
  transition: background-color 300ms;
}

#nav a:hover {
  background-color: rgb(221, 221, 221);
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: hsl(220, 97%, 34%);
  border-color: hsl(220, 97%, 34%);
}

html,
body {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
