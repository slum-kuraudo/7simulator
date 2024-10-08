<template>
    <body class="bg-white h-screen flex flex-col justify-center items-center p-8">

        <!-- タイトル -->
        <!-- <h1 class="text-9xl mb-6">7simulator</h1> -->
        <img alt="7simu logo" class="h-2/5 bg-auto md:bg-contain mb-7" src="../assets/7LOGO.png">
        <!-- ボタン群 -->
        <button @click="() => $router.push({path: '/stage'})" type = "button" class="bg-orange-500 text-white font-bold rounded-lg py-4 px-9 mb-7 text-3xl " >スタート</button>

        <button @click="() => $router.push({path: '/regi'})" class="bg-orange-500 text-white rounded-lg font-bold py-5 px-9 text-3xl" type="button">業務モード</button>
    </body>
</template>