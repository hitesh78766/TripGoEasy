import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export  const Store = defineStore('cityStore', () => {
    const data = ref([])

    const destinationData =  ref([])
   
    const holidayPackages = ref([]);

    const fetchHeaderCities = async () =>{
        try {
            const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/package_category_with_city_tge");
            // console.log("the response is " ,response)
            data.value = response.data.data
            // console.log("the data value is " , data.value)
        } catch (error) {
            console.log("the error is :" , error)
        } 
    }

    const fetchDestinationCity = async () => {
        const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/package_category_with_city")
        // console.log("the destinaion city is :", response.data.data.data)
        destinationData.value = response.data.data.data
        // console.log("the destinaion data is :", data.value)
    }

    const fetchHolidayPackages = async () => {
        try {
            const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/")
            console.log("the holiday package response is : " , response)
            holidayPackages.value = response.data.data.data
            console.log("the holiday value is :" , holidayPackages.value)
    
        } catch (error) {
            console.log("The error is : ", error)
        }
    }


    return{
        fetchHeaderCities,
        data,
        fetchDestinationCity,
        destinationData,
        fetchHolidayPackages,
        holidayPackages,
    }
})
