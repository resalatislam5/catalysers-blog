"use client"
import Image from 'next/image'
import banner_1 from '../app/ass/blog_img_1.jpg'
import leftArrow from '../app/ass/arrow-left-solid.svg'
import rightArrow from '../app/ass/arrow-right-solid.svg'
import rightTopArrow from '../app/ass/rrow-up-right.png'
import dotw from '../app/ass/dot-svgrepo-com.svg'
import dotb from '../app/ass/dotb.svg'

import ReactPaginate from 'react-paginate';

export default function Home() {

  return (
    <main className="max-w-[1440px] mx-auto p-5 text-sm">
      {/* banner blog  */}
        <section className="text-center py-10">
          <h6 >The blog</h6>
          <h1 className="text-5xl font-bold py-4">Writhings from our team</h1>
          <p className="">The latest industry news, interviews, technologies and resources</p>
        </section>
        {/* banner-section */}
        <section className="my bg-[url(./ass/banner.jpg)] h-[80vh] bg-cover bg-no-repeat my-10 sm:mx-9">
            <div className="flex flex-col gap-3 justify-end h-full text-white p-12">
                <div className='flex gap-1 items-center'>
                  <p>ulivia Rhye</p>
                    <Image className='w-1' src={dotw} alt="" />
                  <p>27 jan 2023</p>
                </div>
                <h1 className="text-lg font-bold">UX review persentations</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?</p>
                <div className="flex gap-5">
                  {
                    [...Array(3)].map( (number, i) =><div key={i}>
                      <button className="border px-4 rounded-xl">Design</button>
                    </div>
                  )
                  }
                </div>
            </div>
        </section>
        {/* servicess-button  */}
        <section>
          <div className="flex gap-5 my-8 py-2 justify-center flex-wrap bg-[#EAEAEA] xl:mx-20 rounded-lg font-semibold text-lg">
                  {
                    [...Array(9)].map( (number, i) =><div key={i}>
                      <button className="px-7 py-3 rounded-xl hover:bg-white">Design</button>
                    </div>
                  )
                  }
            </div>
        </section>
        {/* blog-card  */}
        <section>
          <div className="flex gap-10 py-10 justify-center items-center flex-wrap">
                  {
                    [...Array(6)].map( (number, i) =><div className='flex flex-col gap-3 lg:w-96 w-80' key={i}>
                      <Image className='rounded-lg' src={banner_1} alt="" />
                      <div className='flex gap-1 items-center font-bold'>
                          <p>ulivia Rhye</p>
                            <Image className='w-1' src={dotb} alt="" />
                          <p>27 jan 2023</p>
                        </div>
                      <div className="flex justify-between">
                        <h1 className="text-lg font-bold ">UX review persentations</h1>
                        <Image src={rightTopArrow} className='w-10' alt="" />
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?</p>
                      <div className="flex gap-5">
                        {
                          [...Array(3)].map( (number, i) =><div key={i}>
                            <button className="border px-4 rounded-xl ">Design</button>
                          </div>
                        )
                        }
                      </div>
                    </div>)
                    }
            </div>     
        </section>
        {/* pagination  */}
              <ReactPaginate
              className='flex justify-center gap-5 sm:px-20 font-bold py-10'
              breakLabel="..."
              nextLabel="next  -->"
              // onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              // pageCount={pageCount}
              previousLabel="<-- previous"
              renderOnZeroPageCount={null}
              pageCount='100'
            />
    </main>
  )
}
