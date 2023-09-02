import {defineStore} from "pinia";
import {ref} from "vue";
import cars1 from "@/../data/clientbase-frontend-test/data/cars-1.json"
import cars2 from "@/../data/clientbase-frontend-test/data/cars-2.json"
import cars3 from "@/../data/clientbase-frontend-test/data/cars-3.json"
import cars4 from "@/../data/clientbase-frontend-test/data/cars-4.json"
import cars5 from "@/../data/clientbase-frontend-test/data/cars-5.json"

export const useMainPageStore = defineStore
('mainPage', () => {
    const cars = ref([])
    const page = ref(0)
    const isLoading = ref(false)

    function getData(fetchingData) {
        return new Promise(resolve => {
            setTimeout(() => {
                isLoading.value = true
                resolve(fetchingData)
                page.value++
            }, 200)
            isLoading.value = false
        }).then(result => {
            result ? cars.value = [...cars.value, ...result] : cars.value = result
        })
    }

    function getCars() {
        getData(cars1)
    }

    function getMoreCars(page) {
        switch (page) {
            case 1:
                console.log('page #2')
                getData(cars2)
                break
            case 2:
                console.log('page #3')
                getData(cars3)
                break
            case 3:
                console.log('page #4')
                getData(cars4)
                break
            case 4:
                console.log('page #5')
                getData(cars5)
                break
            default:
                break
        }

    }

    return {cars, page, isLoading, getCars, getMoreCars}
})