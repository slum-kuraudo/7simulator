<template>
    <body class="bg-white h-screen flex flex-col justify-center items-center p-8">

        <!-- タイトル -->
        <h1 class="text-9xl mb-6">7simulator</h1>

        <!-- ボタン群 -->
        <button @click="() => $router.push({path: '/stage'})" type = "button" class="bg-orange-500 text-white rounded-lg py-4 px-9 mb-7 text-lg " >スタート</button>

        <button class="bg-orange-500 text-white rounded-lg py-5 px-9 text-lg" type="button">実装モード</button>
    </body>
</template>