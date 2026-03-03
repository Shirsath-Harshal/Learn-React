import React from 'react'

function Card({userName,index,body = "This is a simple card component built using Tailwind CSS."}){
    // console.log(userName);
    // 
    //       You can use it for products, profiles, or blog posts.
    
    return(
         <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-3">
  

      <img 
        src={`https://picsum.photos/400/300?random=${index}`}
        alt="Card Image" 
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {userName}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {body}
        </p>


        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Read More
        </button>
      </div>

    </div>
    )
}

export default Card;