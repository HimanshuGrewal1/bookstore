// import React, { useState,useEffect } from 'react'
// import Bookscard from '../books/Bookscard';
// // Import Swiper React components
// import { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';

// const categories=["choose a genre","Business","Fiction","Horror","Shonen","Manga"]

// const TopSeller = () => {
//     const [books, setbooks] = useState([]);
//     const [selectedc, setslectedc] = useState("choose a genre");
//     useEffect(() => {
//         fetch("books.json").then(res =>  res.json()).then((data) => setbooks(data));

        
//     }, [])

//     const filteredbooks=selectedc==="choose a genre"?books:books.filter(book=>
//         book.category === selectedc.toLowerCase()
//     )
   
//     return (
//         <div className='py-7 md:ml-[1%]'>
//             <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
//             <div className='mb-8 flex items-center'>
//                 <select onChange={(category)=>setslectedc(category.target.value)} name="category" id="category " className='border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none'>
//                     { 
//                         categories.map((category)=>(
//                             <option  value={category}>{category} </option>

//                         ))
//                     }
//                 </select>
//             </div>
//             <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1180:{
//             slidesPerView: 3,
//             spaceBetween: 50,
//           }
//         }}
//         modules={[Pagination,Navigation]}
//         className="mySwiper"


//       >
//         {
//                 filteredbooks.length>0 && filteredbooks.map((book,index)=>{
//                   return <SwiperSlide key={index}><Bookscard  book={book}/></SwiperSlide> 
//              })
//             }
//       </Swiper>            
//         </div>

//     )
// }

// export default TopSeller

// import React, { useState, useEffect } from 'react';
// import Bookscard from '../books/Bookscard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Import required Swiper modules
// import { Pagination, Navigation } from 'swiper/modules';

// const categories = ["choose a genre", "Business", "Fiction", "Horror", "Shonen", "Manga"];

// const TopSeller = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("choose a genre");

//   useEffect(() => {
//     fetch("books.json")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);

//   const filteredBooks = selectedCategory === "choose a genre"
//     ? books
//     : books.filter(book => book.category === selectedCategory.toLowerCase());

//   return (
//     <div className='py-7 md:ml-[1%]'>
//       <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
//       <div className='mb-8 flex items-center'>
//         <select
//           onChange={(event) => setSelectedCategory(event.target.value)}
//           name="category"
//           id="category"
//           className='border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none'
//         >
//           {categories.map((category, index) => (
//             <option key={index} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true} // Enable navigation
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1180: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination, Navigation]} // Include both Pagination and Navigation modules
//         className="mySwiper"
//       >
//         {
//           filteredBooks.length > 0 && filteredBooks.map((book, index) => (
//             <SwiperSlide key={index}>
//               <Bookscard book={book} />
//             </SwiperSlide>
//           ))
//         }
//       </Swiper>
//     </div>
//   );
// };

// export default TopSeller;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // Import required Swiper modules
// import { Navigation, Pagination } from 'swiper/modules';

// const App = () => {
//   return (
//     <div style={{ width: '80%', margin: '0 auto', padding: '2rem 0' }}>
//       <h2>React Swiper Example</h2>
//       <Swiper
//         modules={[Navigation, Pagination]} // Include the required modules
//         navigation={true} // Enable navigation buttons
//         pagination={{ clickable: true }} // Enable pagination dots
//         spaceBetween={30} // Space between slides
//         slidesPerView={1} // Number of slides visible at a time
//         breakpoints={{
//           // Responsive breakpoints
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//         }}
//         className="mySwiper" // Custom class for styling
//       >
//         {/* Add SwiperSlide components */}
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 1
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 2
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 3
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 4
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 4
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 4
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 4
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div style={{ padding: '20px', border: '1px solid #ccc', textAlign: 'center' }}>
//             Slide 4
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Bookscard from "../books/Bookscard";
import "./styles.css";
import "./Slider.css"; 

const lan = ["eng", "jap", "french", "german"];
const categories = ["choose a genre", "Business", "Fiction", "Horror", "Shonen", "Manga"];

const TopSeller = ({ setSharedData }) => {
 
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectlan,setselectlan]=useState("eng");
  setSharedData(selectlan)

const gg = async()=>{

   try {
    const res = await fetch(`/books${selectlan}.json`)
     const data = await res.json()
     setBooks(data)
  
   ;
   } catch (error) {
  
   }
}

  useEffect(() => {
        gg();
  }, [selectlan]);
 
  const filteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCategory.toLowerCase());

  const totalSlides = filteredBooks.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  

  

  return (
    <div className="py-7 md:ml-[1%]">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      <div className="mb-8 flex gap-4 items-center">
        <select
          onChange={(event) => setSelectedCategory(event.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
                <select
                  onChange={(event) => setselectlan(event.target.value)}
                  name="category"
                  id="category"
                  className="border bg-[#EAEAEA] border-gray-300 rounded-md focus:outline-none"
                >
                  {lan.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
      </div>
      <div className="slider">
        <div
          className="slides-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {filteredBooks.length > 0 &&
            filteredBooks.map((book, index) => (
              <div className="slide" key={index}>
                <Bookscard book={book} />
              </div>
            ))}
        </div>
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
       
      </div>
    </div>
  );
};

export default TopSeller;
