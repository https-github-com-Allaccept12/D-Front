import React from "react";
import { Button, Image, Input } from "../../elements";

import { useHistory } from "react-router-dom";



const QNADimo = (props) => {
  let history = useHistory();
  return (
    <>
   
   <section class="bg-transparent dark:bg-gray-900">
        <div class="container px-6 py-6 ">
            <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">질문/답변</h1>

            <div class="space-x-8 space-y-4 lg:mt-12 flex flex-row flex-wrap p-4">
                <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <button class="flex items-center justify-between w-full">
                        <h1 class="font-semibold text-gray-700 dark:text-white">디자인을 잘 하는법?</h1>

                        <span class="text-gray-400 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                            </svg>
                        </span>
                    </button>

                    <p class="mt-6 mb-2 text-sm text-gray-500 dark:text-gray-300">
                        디자인을 잘 하려면 어떻게 해야 할까여?
                    </p>
                    <Input />
                </div>

                <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <button class="flex items-center justify-between w-full">
                        <h1 class="font-semibold text-gray-700 dark:text-white">디자인을 잘 하는법?</h1>

                        <span class="text-gray-400 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                            </svg>
                        </span>
                    </button>

                    <p class="mt-6 mb-2 text-sm text-gray-500 dark:text-gray-300">
                        디자인을 잘 하려면 어떻게 해야 할까여?
                    </p>
                    <Input />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default QNADimo;