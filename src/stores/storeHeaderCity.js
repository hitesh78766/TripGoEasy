import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export  const headerCityStore = defineStore('cityStore', () => {
    const data = ref([])
   

    const fetchHeaderCities = async () =>{
        try {
            const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/package_category_with_city_tge");
            console.log("the response is " ,response)
            data.value = response.data.data
            console.log("the data value is " , data.value)
        } catch (error) {
            console.log("the error is :" , error)
        } 
    }



    return{
        fetchHeaderCities,
        data,
    }
})
