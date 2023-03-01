<template>
    <main class="w-full flex flex-col">
        <div class="hero grid grid-cols-2 gap-x-4 h-screen w-screen relative z-0 overflow-hidden">
            <div class="flex flex-col gap-y-2 bg-green/90 h-full py-24 z-0 relative pl-28 pr-24">
                <div class="w-full h-full z-10 flex flex-col items-start justify-center gap-y-6 text-background">
                    <div class="">
                        <h2 class="text-6xl font-semibold leading-[1.2]">We can get your Drug Prescriptions to you</h2>
                    </div>
                    <p class="text-xl">
                        Medicines are chemicals or compounds used to cure, halt or prevent disease; ease illnesses.
                    </p>
                    <div class="actions flex flex-col gap-y-6 mt-2">
                        <div class="action-call flex flex-row gap-x-8 items-center w-full">
                            <button
                                class="px-5 py-2 shadow bg-background text-green text-xl rounded border-2 border-background"
                            >
                                Read more
                            </button>
                            <button
                                class="px-5 py-2 shadow bg-green/90 text-background text-xl rounded border-2 border-background"
                            >
                                Watch more
                            </button>
                        </div>
                        <div class="w-full flex fle-row items-center relative">
                            <input
                                type="text"
                                name="search-data"
                                id="search-data"
                                class="bg-background w-full text-green py-3 pl-8 pr-3 text-base rounded-3xl placeholder:text-green/80 outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                                placeholder="Search for medicine in our store"
                            />
                            <label for="search-data" class="absolute left-0 translate-x-3/4 text-green">
                                <div class="w-4 h-4">
                                    <IconsSearch />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="absolute h-[200vh] w-screen bg-background -top-1/2 left-[86%] rounded-full -z-10"></div>
            </div>
            <div class="flex flex-col bg-background h-full items-center justify-center relative z-0 pt-24">
                <div class="absolute left-0 -translate-y-full">
                    <NuxtImg src="/images/hero-chart.webp" class="w-[32%]" />
                </div>
                <div class="absolute left-0 translate-y-8">
                    <NuxtImg src="/images/hero-steps.webp" class="w-[18%]" />
                </div>
                <div class="absolute left-0 right-0 bottom-0 flex items-center justify-center z-10">
                    <NuxtImg src="/images/hero-img.webp" class="w-[74%]" />
                </div>
            </div>
        </div>
    </main>
</template>
