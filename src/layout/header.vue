<template>
    <header id="header">
        <div class="logo">
            <img :src="require('../assets/img/logo.svg')" alt="">
        </div>
        <nav class="header-nav">
            <form class="search-form">
                <button type="button" class="search-button">
                    <span class="material-icons">search</span>
                </button>
                <input type="text" placeholder="Start typing to search..." class="search-value">
            </form>
            <div class="switch-menu">
                <router-link
                    to="/"
                    class="menu-item active"
                >Gamer</router-link>
                <router-link
                    to="/host"
                    class="menu-item"
                >Host</router-link>
            </div>
            <div class="profile-sec">
                <router-link
                    to="/settings"
                    class="profile-item"
                >
                    <span type class="material-icons">settings</span>
                </router-link>
                <router-link
                    to="/notifications"
                    :class="`profile-item ${true ? 'label' : ''}`"
                >
                    <span type class="material-icons">notifications</span>
                </router-link>
                <div class="profile-avatar">
                    <img :src="require('../assets/img/avatar.jpg')" alt="avatar">
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    
    }
  }
}
</script>