import React from 'react';

export default function MPayment() {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="flex justify-center items-center px-4 mx-auto sm:px-4 lg:px-8 max-w-[90rem]">
          <section className="bg-gray-500 py-8 px-4 mx-auto sm:px-4 lg:px-8 max-w-[90rem] mt-10 rounded-lg">
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
              
                
                {/* Form Section */}
                <div className="min-w-0 flex-1 space-y-8 ">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">Payment Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="your_name"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          Your name
                        </label>
                        <input
                          type="text"
                          id="your_name"
                          className="block w-full rounded-lg border p-2.5 text-sm focus:border-third-500 focus:ring-third-500 border-gray-600 bg-gray-700 text-white"
                          placeholder="Bonnie Green"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="your_email"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          Your email*
                        </label>
                        <input
                          type="email"
                          id="your_email"
                          className="block w-full rounded-lg border p-2.5 text-sm focus:border-third-500 focus:ring-third-500 border-gray-600 bg-gray-700 text-white"
                          placeholder="name@flowbite.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone-input-3"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          Phone Number*
                        </label>
                        <div className="flex items-center">
                          <div className="relative w-full">
                            <input
                              type="text"
                              id="phone-input"
                              className="block w-full rounded-lg border p-2.5 text-sm focus:border-third-500 focus:ring-third-500 border-gray-600 bg-gray-700 text-white"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="123-456-7890"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="vat_number"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          ID card
                        </label>
                        <input
                          type="text"
                          id="vat_number"
                          className="block w-full rounded-lg border p-2.5 text-sm focus:border-third-500 focus:ring-third-500 border-gray-600 bg-gray-700 text-white"
                          placeholder="DE42313253"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-gray-100 hover:text-third-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 border-gray-600 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700"
                        >
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h14m-7 7V5"
                            />
                          </svg>
                          Upload Your Slip Here
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Payment</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="credit-card"
                              aria-describedby="credit-card-text"
                              type="radio"
                              name="payment-method"
                              defaultValue
                              className="h-4 w-4 border-gray-300 bg-white text-third-600 focus:ring-2 focus:ring-third-600 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-third-600"
                              defaultChecked
                            />
                          </div>
                          <div className="ms-4 text-sm">
                            <label
                              htmlFor="credit-card"
                              className="font-medium leading-none text-gray-900 dark:text-white"
                            >
                              QR Code
                            </label>
                            <p
                              id="credit-card-text"
                              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                            >
                              Pay with QR Code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="paypal-2"
                              aria-describedby="paypal-text"
                              type="radio"
                              name="payment-method"
                              defaultValue
                              className="h-4 w-4 border-gray-300 bg-white text-third-600 focus:ring-2 focus:ring-third-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-third-600"
                            />
                          </div>
                          <div className="ms-4 text-sm">
                            <label
                              htmlFor="paypal-2"
                              className="font-medium leading-none text-gray-900 dark:text-white"
                            >
                              Paypal account
                            </label>
                            <p
                              id="paypal-text"
                              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                            >
                              Connect to your account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Section */}
                <div className="w-full lg:max-w-xs xl:max-w-md  border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                  <div className="mx-auto max-w-3xl">
                    <h2 className="text-xl font-semibold text-white sm:text-xl">
                      ข้อมูลการจอง
                    </h2>
                    
                      
                        <dd className="mt-1 text-base font-normal text-gray-400">
                          บริการ ตัดผม
                          ช่าง   จ๊อบ
                          วันที่   13/8/2567
                          เวลา   13:00
                          ราคา  200

                        </dd>
                      
                    
                    
                  </div>
                </div>
                <button
                      type="submit"
                      className="flex w-full items-center justify-center lg:flex-row rounded-lg bg-limegreen px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                    >
                      Proceed to Payment
                    </button>
              
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
