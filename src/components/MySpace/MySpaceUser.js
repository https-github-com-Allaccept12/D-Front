import React from "react";
import { Button, Image, Container } from "../../elements";

import { useHistory } from "react-router-dom";


const MySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>

        
        <div class="flex flex-col justify-center items-center">
         <Container size="large">
       
        </Container>   
        <Image size="5xl" min="top" />
            <div class="flex flex-col items-center">
                
                <div class="ml-2">
                    
                    <div className="flex flex-col px-28 p-2 shadow-lg rounded-2xl font-sanss2">
                    <h3 class="text-xl text-gray-800 font-medium">펭귄 님</h3>
                    <span class="text-gray-600">UX/UI Designer</span>
                    <span class="text-gray-600">성향 : 라라라라</span>
                    <button class="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="ml-1 text-sm">Follow</span> 
                </button>
                <div className="flex flex-row justify-center text-2xl">
                <span>🐧</span> <span>🐧</span> <span>🐧</span> <span>🐧</span>
                </div>
                    </div>
                    
                </div>
            </div>
            <div class="mt-2 sm:mt-0">
                
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">

        </div>
<div>
        <div class="mt-4">
            <h4 class="text-sm text-gray-600">45 Followers</h4>
            <div class="flex items-center overflow-hidden mt-2">
                <img class="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            </div>
        </div>
        <div class="mt-4">
            <h4 class="text-sm text-gray-600">250 Following</h4>
            <div class="flex items-center overflow-hidden mt-2">
                <img class="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                <img class="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            </div>
        </div>
        </div>


    </>

  );
};

export default MySpaceUser;