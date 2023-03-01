<template>
    <nav
        class="w-full py-6 px-28 flex flex-row items-center justify-between bg-inherit fixed top-0 left-0 right-0 z-50"
    >
        <div class="left flex flex-row items-center gap-x-2">
            <button class="px-6 py-2.5 border border-background text-background text-lg tracking-wide">Pharma</button>
        </div>
        <div id="nav-links" class="flex flex-row items-center gap-x-8">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/">Services</NuxtLink>
            <NuxtLink to="/">About us</NuxtLink>
            <NuxtLink to="/">Blogs</NuxtLink>
            <NuxtLink to="/">Contact us</NuxtLink>
            <div class="auths-links flex flex-row items-center ml-4 gap-x-5">
                <button class="text-lg hover:text-green">Log In</button>
                <button class="bg-green/90 text-gray-100 text-lg px-8 py-2.5 rounded">Sign Up</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
#nav-links a {
    @apply text-lg hover:text-green first:text-green font-medium;
}
</style>
