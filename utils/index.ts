
export async function fetchCars() {
    const headers: HeadersInit = {
            'X-RapidAPI-Key': '1b9087c978msh468cfa7c53638c6p175e7bjsnf5dc0c39e4e7',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {headers: headers}) ;
    const result = await response.json();

    return result;

    
}