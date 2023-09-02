<script setup>
import {useMainPageStore} from '@/stores/cars'
import {onMounted, ref} from "vue";
import Preloader from "@/components/Preloader.vue";

const store = useMainPageStore()
const observerRef = ref(null)

onMounted(() => {
  store.getCars()
  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback = function (entries) {
      if (entries[0].isIntersecting && store.page < 5) {
        store.getMoreCars(store.page)
      }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(observerRef.value)
})
</script>

<template>
  <main>
    <div class="table">
      <div class="table__row table__row--head">
        <div class="table__cell table__cell--head">Название</div>
        <div class="table__cell table__cell--head">Расход топлива мл/г</div>
        <div class="table__cell table__cell--head">Цилиндры</div>
        <div class="table__cell table__cell--head">Рабочий объём</div>
        <div class="table__cell table__cell--head">Л.C</div>
        <div class="table__cell table__cell--head">Вес</div>
        <div class="table__cell table__cell--head">Ускорение м/c2</div>
        <div class="table__cell table__cell--head">Год выпуска</div>
        <div class="table__cell table__cell--head">Производство</div>
      </div>
      <div ref="table" class="table__row" v-for="item in store.cars">
        <div class="table__cell">{{ item.Name }}</div>
        <div class="table__cell">{{ item.Miles_per_Gallon }}</div>
        <div class="table__cell">{{ item.Cylinders }}</div>
        <div class="table__cell">{{ item.Displacement }}</div>
        <div class="table__cell">{{ item.Horsepower }}</div>
        <div class="table__cell">{{ item.Weight_in_lbs }}</div>
        <div class="table__cell">{{ item.Acceleration }}</div>
        <div class="table__cell">{{ item.Year }}</div>
        <div class="table__cell">{{ item.Origin }}</div>
      </div>
    </div>
    <Preloader v-if="!store.isLoading"/>
    <div ref="observerRef" class="observer"></div>
  </main>
</template>

<style scoped>

main {
  margin-bottom: 3rem;
}

button {
  margin: 1rem auto;
  display: block;
}

.observer {
  width: 100%;
  height: 3rem;
  pointer-events: none;
}
</style>
