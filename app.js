const assigmt_arry =[{
    name:"count_Down",
    date:"10-jan-2024",
    code:"https://arhamjawed66.github.io/bakraeid-countdown/ "},
     {
     name:"world clock",
     date:"20-jan-2024",
    code:"https://arhamjawed66.github.io/Digital-clock/ "},
    {
      name:"Table Work",
     date:"15-Nov-2023",
    code:"https://arhamjawed66.github.io/table.work-html/"
    },
    {
      name:"KIds Book",
     date:"20-Nov-2023",
    code:"https://arhamjawed66.github.io/kids-book/"
    },
    {
      name:"Todo Atendance",
     date:"05-Jan-2024",
    code:" https://arhamjawed66.github.io/Todo_atendance/"
    },
    {
      name:"Todo Card",
      date:"12-Feb-2024",
      code:" https://arhamjawed66.github.io/Todo-card/"
    },
    {
      name:"FireBase State",
      date:"10-jul-2024",
      code:"https://arhamjawed66.github.io/firebase-stattechange/"
    },
    {
      name:"Todo with React",
      date:"03-sep-2024",
      code:"https://reaxt-todo-fanicae.vercel.app/"
    },
    {
      name:"My_Protfolio",
      date:"20-sep-2024",
      code:"https://protfolio-work-sf5o.vercel.app/"
    },
];

assigmt_arry.forEach((data,index)=>{
    let assigmnt_list = document.getElementById("assigmnt_list")
  let div =  ` 
    
     
    <div class=" rounded  shadow-lg">
  <img class="h-auto max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s" alt="image">
  <div class="px-6 py-4">
    <div class="font-bold text-2xl mb-2">${data.name}=${index+1}</div>
    <p class="text-gray-500 text-base">${data.date}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  </div>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
     <a href="${data.code}">LInk Here</a>       
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </button>
  <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
   <a href="https://github.com/Arhamjawed66">Sign in with Github</a>   
  <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
    </svg>
    
    </button>
    
  

 `
  assigmnt_list.innerHTML += div;
  
});