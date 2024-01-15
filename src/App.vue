<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

import MenuItem from './components/MenuItem.vue'
import MusicPlayer from './components/MusicPlayer.vue'

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

const openMenu = ref(false)

onMounted(() => {
  
})
</script>
<template>
  <div>
    <div
      class="w-[calc(100%-240px)] fixed h-[60px] right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center ml-6">
        <button class="rouded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#fff" :size="30" />
        </button>
        <button class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight fillColor="#fff" :size="30" />
        </button>
      </div>
      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            src="https://yt3.ggpht.com/ytc/AGIKgqPYRZTMh9Ip_dGM9s0OSz6XWSASl23Tr31MNqFyhK98MV8iSSBsaSa8Ky5J8Na8=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="avatar"
            width="27"
            class="rounded-full"
          />
          <div class="text-white text-[14px] ml-1.5 font-semibold">Van Bo Nguyen</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#fff" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#fff" :size="25" />
        </div>
      </button>
      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Logout</li>
        </ul>
      </span>
    </div>
    <div id="sideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <router-link to="/">
        <img src="/images/icons/spotify-logo.png" alt="" width="125" />
      </router-link>
      <div class="my-8"></div>
      <ul>
        <router-link to="/">
          <menu-item class="ml-[1px]" icon-string="home" :icon-size="23" name="Home" page-url="/" />
        </router-link>
        <router-link to="/search">
          <menu-item
            class="ml-[1px]"
            icon-string="search"
            :icon-size="24"
            name="Search"
            page-url="/search"
          />
        </router-link>
        <router-link to="/library">
          <menu-item
            class="ml-[2px]"
            icon-string="library"
            :icon-size="23"
            name="Library"
            page-url="/library"
          />
        </router-link>
        <div class="py-3.5"></div>
        <menu-item
          icon-string="playlist"
          :icon-size="23"
          name="Create Playlist"
          page-url="/playlist"
        />
        <menu-item icon-string="liked" :icon-size="23" name="Liked Song" page-url="/liked" />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[13px] text-gray-300 mt-3 hover:text-white">
          My Playlist #1
        </li>
        <li class="font-semibold text-[13px] text-gray-300 mt-3 hover:text-white">
          My Playlist #2
        </li>
        <li class="font-semibold text-[13px] text-gray-300 mt-3 hover:text-white">
          My Playlist #3
        </li>
        <li class="font-semibold text-[13px] text-gray-300 mt-3 hover:text-white">
          My Playlist #4
        </li>
        <li class="font-semibold text-[13px] text-gray-300 mt-3 hover:text-white">
          My Playlist #5
        </li>
      </ul>
    </div>
  </div>
  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="mt-[70px]"></div>
    <router-view></router-view>
    <div class="mb-[100px]"></div>
  </div>
  <MusicPlayer v-if="currentTrack"/>
</template>
