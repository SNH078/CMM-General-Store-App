const NewsLetter = () => {
  return (
    <div className="my-16 flex flex-col items-center justify-center text-center space-y-2">
     
 
      <h1 className="md:text-4xl text-2xl font-semibold">Fresh Discounts, Delivered Fast!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
       Stay connected to the store you trust – real products, real offers.
      </p>

      <div className="flex flex-row  gap-3">
   <img src='https://i.pinimg.com/originals/39/79/6a/39796ac6bf7fb5abd5814c8f61bf3ab1.gif' className="h-30 w-30"></img>
   
  
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 mt-13">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />
    <button
  type="submit"
  className="md:px-12 px-5 h-full text-white bg-orange-400 hover:bg-orange-500 transition-all cursor-pointer rounded-md rounded-l-none"
>
  <span className="hidden sm:inline">Subscribe</span>
  <span className="inline sm:hidden">→ </span>
</button>

      </form>
     </div>
  </div>
  );
};
export default NewsLetter;
