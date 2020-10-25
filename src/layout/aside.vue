<template>
    <aside id="aside">
        <p class="aside-text">AGAFOS</p>
        <nav class="aside-navigation">
            <ul class="aside-list">
                <li class="aside-item active">
                    <router-link to="/extension">
                        <span type class="material-icons">extension</span>
                    </router-link>
                </li>
                <li class="aside-item">
                    <router-link to="/extension">
                        <span type class="material-icons">monetization_on</span>
                    </router-link>
                </li>
                <li class="aside-item">
                    <router-link to="/extension">
                        <span type class="material-icons">person_add</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
    
    }
  }
}
</script>