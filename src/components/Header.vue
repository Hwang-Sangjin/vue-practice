<template>
    <header class="nav">
        <div
            v-for="nav in navigation"
            :key="nav.name"
            class="nav-item">
            
            <RouterLink
                :to="nav.href"
                class="nav-link">
                {{nav.name}}
            </RouterLink>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            navigation: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie'
                },
                {
                    name: 'About',
                    href: '/about'
                },
            ]
        }
    }
}
</script>