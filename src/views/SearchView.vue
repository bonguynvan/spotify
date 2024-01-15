<script setup>
import CategorySelect from '../components/CategorySelect.vue'
</script>
<template>
    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover-underline cursor-pointer">
          Recommended Songs
        </button>
        <div class="py-1.5"></div>
        <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <CategorySelect category="Songs" image="https://picsum.photos/id/51/300/300"/>
          <CategorySelect category="Podcast" image="https://picsum.photos/id/60/300/300"/>
          <CategorySelect category="Songs" image="https://picsum.photos/id/70/300/300"/>
          <CategorySelect category="Podcast" image="https://picsum.photos/id/80/300/300"/>
          <CategorySelect category="Made for you" image="https://picsum.photos/id/90/300/300"/>
          <CategorySelect category="New release" image="https://picsum.photos/id/10/300/300"/>
          <CategorySelect category="Audiobooks" image="https://picsum.photos/id/20/300/300"/>
          <CategorySelect category="Podcast" image="https://picsum.photos/id/55/300/300"/>
        </div>
      </div>
</template>

