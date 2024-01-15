<script setup>
import HomeCard from '../components/HomeCard.vue';
</script>
<template>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover-underline cursor-pointer">
      Podcast to make you smarter
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard image="https://picsum.photos/id/31/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/32/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="md:block hidden" image="https://picsum.photos/id/33/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="lg:block hidden" image="https://picsum.photos/id/34/300/300" title="Title is here" subTitle="Subtitle here"/>
    </div>
  </div>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover-underline cursor-pointer">
      Recommended Radios
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/40/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard image="https://picsum.photos/id/41/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/42/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="md:block hidden" image="https://picsum.photos/id/43/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="lg:block hidden" image="https://picsum.photos/id/44/300/300" title="Title is here" subTitle="Subtitle here"/>
    </div>
  </div>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover-underline cursor-pointer">
      Recommended Songs
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <HomeCard image="https://picsum.photos/id/50/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard image="https://picsum.photos/id/51/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="xl:block hidden" image="https://picsum.photos/id/52/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="md:block hidden" image="https://picsum.photos/id/53/300/300" title="Title is here" subTitle="Subtitle here"/>
      <HomeCard class="lg:block hidden" image="https://picsum.photos/id/54/300/300" title="Title is here" subTitle="Subtitle here"/>
    </div>
  </div>
</template>
