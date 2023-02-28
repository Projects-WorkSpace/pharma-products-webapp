<script setup lang="ts">
useHead({
    title: 'Pharma',
    meta: [{ name: 'description', content: 'We can get your Drug Prescriptions to you' }],
    link: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swaphttps://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap',
            rel: 'stylesheet',
        },
    ],
})
if (process.client) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
}
</script>
<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

/* Color pickers
2099a1,faf9f9, 9c4b40,d8a63e,352a28,9da8af,c9a899,c6c8cb,d7c4ab
*/
</style>
