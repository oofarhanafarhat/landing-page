import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#2A254B] text-white py-10 px-4 md:px-8 lg:px-16  w-full max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-start mb-6">
        Build ecom sites super fast
      </h1>
      <p className="text-start text-lg max-w-[950px]  mb-10">
        This template was built to help you rapidly and modularly build out
        high-quality e-commerce concepts using pre-built content blocks,
        components, and styles. Customize and play around with the template to
        match your specific requirements, and most of all, have fun with it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#4E4D93] p-6 border-2 border-gray-400 rounded-md">
          <h1 className="text-2xl  font-bold mb-4">Use the styles</h1>
          <p className="mb-6 text-gray-300  text-sm">
          Styles in Figma mean you don t have to repetitively enter values for typography colors and elevations minimising the risk of inconsistencies and streamlining the design process.

Within this template you can find color and type styles, and their definitions on the style
guide page. To use them simply select them from the Figma style panel as shown below. </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Image src="/o1.png" layout="responsive"  width={200} height={200} alt="" className="object-cover"/>
            <Image src="/o2.png" layout="responsive"  width={200} height={250} alt=" " className="object-cover"/>
            <Image src="/o3.png" layout="responsive"  width={200} height={200} alt=" " className="object-cover"/>
          </div>
        </div>

        <div className="bg-[#4E4D93] p-6 border-2 border-gray-400 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Use the components</h1>
          <p className="mb-6 text-gray-300 text-sm">
          There s a bunch of pre-configured components for you to use in this free template. Simply go to 
the Style Guide page and under the components header you can see everything included Buttons steppers filter options and more for you to integrate into your screens and modify to
your tastes and requirements. 
          </p>
          <div className="grid  grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 gap-4">
           <div className="flex flex-col"> <Image src="/c1.png" width={150} height={200} alt="Product 1" className="mt-4" />
           <h2 className="py-4  text-start lg:text-center text-[10px] lg:text-sm">The Dandy chair</h2>
           </div>
          
           <div className="flex flex-col"> <Image src="/c2.png" width={150} height={200} alt="Product 2" className="mt-4" />
           <h2 className=" py-4 text-start lg:text-center text-[10px] lg:text-sm">Small tables</h2>
           </div>
         
          <div className="space-y-4 flex gap-10">
          <div className="flex  justify-between items-center flex-col  space-y-5 mt-6 text-[10px] ">
            <button className="bg-[#FFFFFF] text-[#000000] px-2 py-3 rounded-md">Button</button>
            <button className="bg-[#2A254B] text-white px-2 py-3 rounded-md">Button</button>
            <button className="bg-[#F9F9F9] text-[#000000] px-2 py-3 rounded-md">Button</button>
            <button className="bg-[#F9F9F926] text-white px-2 py-3 rounded-md">Button</button>
          </div>
          <div className="flex flex-col  justify-between items-center space-y-5 text-[14px]  ">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-white py-4 " />
              Furniture
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-white sm:mr-3 " />
              Homeware
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-white sm:mr-2 " />
              Vases
            </label>
            <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-white " />
              Products
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-white " />
              Components
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-white" />
              Styleguide
            </label>
          </div>
          </div>
          </div>
          </div>
        <section className="bg-[#4E4D93] p-6 border-2 border-gray-400 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Use the content blocks</h2>
          <p className="text-gray-300">
          As well as components and styles we ve built a bunch of layouts in both mobile and desktop sizes.Play around with replacing and modifying the nested content blocks and to switch device, simply use
the content block property device to toggle between mobile and desktop.
          </p>
          <div className=" md:mb-10 md:flex w-full lg:h-[265px] mt-4">
            <div className="w-full lg:w-1/2 h-full">
              <Image
                src={"/p1.png"}
                width={365}
                height={265}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-white text-gray-800 p-4 rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">
                Join the club and get the benefits
              </h3>
              <p className="text-sm mb-4">
                Sign up for our newsletter and receive exclusive offers.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-2 border rounded-md mb-2"
              />
              <button className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </section>
        <div className="bg-[#4E4D93] p-6 border-2 border-gray-400 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Check the layouts</h1>
          <p className="mb-6 text-gray-300">
          We ve built out a multitude of content blocks for you to use in your landing pages. From hero sections forms CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <div className="bg-[#2A254B] w-full text-white text-center py-2">
                <p className="text-[10px]">Free delivery on all orders over $50</p>
              </div>
              <div className="bg-white flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-bold text-black">Avion</h1>
                <div className="flex space-x-2">
                  <Image
                    src="/S1.png"
                    width={15}
                    height={15}
                    alt="Search"
                  />
                  <Image src="/cart.png" width={15} height={15} alt="Cart" />
                  <Image src="/user.png" width={15} height={15} alt="User" />
                </div>
              </div>
              <div className="bg-[#2A254B] w-full flex justify-center items-center">
                <Image
                  src="/a1.png"
                  width={800}
                  height={500}
                  alt="Chair"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="bg-[#2A254B] w-full text-white text-center py-2">
                <p className="text-[10px]">Free delivery on all orders over $50</p>
              </div>
              <div className="bg-white flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-bold text-black">Avion</h1>
                <div className="flex space-x-2">
                  <Image
                    src="/S1.png"
                    width={15}
                    height={15}
                    alt="Search"
                  />
                  <Image src="/cart.png" width={15} height={15} alt="Cart" />
                  <Image src="/user.png" width={15} height={15} alt="User" />
                </div>
              </div>
              <div className="bg-[#2A254B] w-full flex justify-center items-center">
                <Image
                  src="/a2.png"
                  width={800}
                  height={500}
                  alt="Chair"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="bg-[#2A254B] w-full text-white text-center py-2">
                <p className="text-[10px]">Free delivery on all orders over $50</p>
              </div>
              <div className="bg-white flex justify-between items-center px-4 pt-2">
                <h1 className="text-lg font-bold text-black">Avion</h1>
                <div className="flex space-x-2">
                  <Image
                    src="/S1.png"
                    width={15}
                    height={15}
                    alt="Search"
                  />
                  <Image src="/cart.png" width={15} height={15} alt="Cart" />
                  <Image src="/user.png" width={15} height={15} alt="User" />
                </div>
              </div>
              <div className="bg-white text-gray-400 flex justify-between py-5 h-[12px]">
                <button className=" text-[10px] rounded-lg shadow-md  ">
                  All products
                </button>
                <button className="  text-[9px] rounded-lg shadow-md  ">
                  Plant pots
                </button>
                <button className=" text-[10px] rounded-lg shadow-md ">
                  Ceramics
                </button>
              </div>
              <div className="bg-[#2A254B] w-full flex justify-center items-center">
                <Image
                  src="/a3.png"
                  width={800}
                  height={500}
                  alt="Chair"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
