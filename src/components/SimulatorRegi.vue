<template>
<body class="bg-gray-200 h-screen">

  <div class="grid grid-cols-2 grid-rows-2 h-screen">
      <!-- Placeholder for top-left quadrant -->
      <div></div>
  
      <!-- Placeholder for top-right quadrant -->
      <div></div>
  
      <!-- Placeholder for bottom-left quadrant -->
      <div></div>
  
      <!-- Actual layout in the bottom-right quadrant -->
      <div class="bg-gray-400 p-4">
          <!-- Top buttons -->
          <div class="flex justify-between mb-4">
              <button class="bg-blue-600 text-white px-4 py-2 rounded">Button1</button>
              <button class="bg-blue-600 text-white px-4 py-2 rounded">Button2</button>
          </div>
  
          <!-- Calculator layout -->
          <div class="grid grid-cols-4 gap-4 mb-4">
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">C</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">X</button>
              <button class="bg-blue-500 text-white p-4 col-span-2 rounded">1</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">2</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">3</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">4</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">5</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">6</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">7</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">8</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">9</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">0</button>
          </div>
  
          <!-- Other buttons -->
          <div class="grid grid-cols-3 gap-4">
              <button class="bg-green-600 text-white p-4 col-span-1 rounded">Green1</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">Blue1</button>
              <button class="bg-green-600 text-white p-4 col-span-1 rounded">Green2</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">Blue2</button>
              <button class="bg-purple-600 text-white p-4 col-span-1 rounded">Purple</button>
              <button class="bg-blue-500 text-white p-4 col-span-1 rounded">Blue3</button>
          </div>
      </div>
  </div>
  
  </body>
</template>