import Image from 'next/image'
import banner_1 from '../app/ass/blog_img_1.jpg'
import leftArrow from '../app/ass/arrow-left-solid.svg'
import rightArrow from '../app/ass/arrow-right-solid.svg'
export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto p-5 text-sm">
      {/* banner blog  */}
        <section className="text-center py-10">
          <h6 >The blog</h6>
          <h1 className="text-lg font-bold py-2">Writhings from our team</h1>
          <p className="">The latest industry news, interviews, technologies and resources</p>
        </section>
        {/* banner-section */}
        <section className="my bg-[url(./ass/banner.jpg)] h-[80vh] w-full bg-cover my-10">
            <div className="flex flex-col gap-3 justify-end h-full text-white p-12">
                <p>ulivia Rhye.<span>27 jan 2023</span></p>
                <h1 className="text-lg font-bold">UX review persentations</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?</p>
                <div className="flex gap-5">
                  {
                    [...Array(3)].map( (number, i) =><div key={i}>
                      <button className="border px-4 rounded-xl hover:bg-blue-700 hover:border-blue-700">Design</button>
                    </div>
                  )
                  }
                </div>
            </div>
        </section>
        {/* servicess-button  */}
        <section>
          <div className="flex gap-5 py-10 justify-center flex-wrap">
                  {
                    [...Array(10)].map( (number, i) =><div key={i}>
                      <button className="border px-7 py-3 rounded-xl hover:bg-blue-700 hover:border-blue-700 hover:text-white">Design</button>
                    </div>
                  )
                  }
            </div>
        </section>
        {/* blog-card  */}
        <section>
          <div className="flex gap-10 py-10 justify-center items-center flex-wrap">
                  {
                    [...Array(9)].map( (number, i) =><div className='flex flex-col gap-3 lg:w-96 w-80' key={i}>
                      <Image src={banner_1} alt="" />
                      <p className='font-bold'>ulivia Rhye.<span>27 jan 2023</span></p>
                      <h1 className="text-lg font-bold">UX review persentations</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?</p>
                      <div className="flex gap-5">
                        {
                          [...Array(3)].map( (number, i) =><div key={i}>
                            <button className="border px-4 rounded-xl hover:bg-blue-700 hover:border-blue-700 hover:text-white">Design</button>
                          </div>
                        )
                        }
                      </div>
                    </div>)
                    }
            </div>     
        </section>
        {/* pagination  */}
        <section className='flex sm:justify-between justify-center gap-10 sm:gap-0 sm:px-20 font-bold py-10'>
              <a href="#" className='flex gap-3 items-center'><Image src={leftArrow} className='w-4' alt="" />Preious</a>
              <div className="hidden sm:flex">
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">1</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">2</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">3</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">...</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">8</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">9</a>
                    <a className='px-4 py-2 hover:bg-black hover:text-white rounded-lg' href="#">10</a>
              </div>
              <a className='flex gap-3 items-center' href="#">Next<Image src={rightArrow} className='w-4' alt="" /></a>
        </section>
    </main>
  )
}
