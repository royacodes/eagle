import { CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'
export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Game Catalogue</h1>
          <p>Explore the games you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title = 'type'/>
            <CustomFilter title= 'player' />
          </div>
        </div>

        {
          !isDataEmpty ? (
            <section>
              We Have Cars
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className=''>
                Oops, no results
              </h2>
              <p>
               {allCars?.message}
              </p>
            </div>
          )
        }
      </div>
    </main>
  )
}
