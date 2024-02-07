<template>
    <body>
        <div class="grid grid-cols-2 h-screen">
            <div class="bg-gray-100">
                <div class="bg-green-500 rounded-lg p-4">
                    <!-- Your tutorial content goes here -->
                    <h2 class="text-white text-6xl font-bold text-center">各ボタンの機能を見てみよう</h2>
                    <p class="text-white text-2xl">各ボタンをクリックしてどの用途に使われるか確認してみましょう<br>
                        <button @click="() => $router.push({path: '/stage'})" class="bg-red-500 rounded px-4 py-2">完了</button>
                    </p>
                </div>

            </div>
            <div class="bg-grays-100">
                <div class="flex items-center ml-7">
                    <div class="flex flex-col mr-2">
                        <div class="date w-13 h-5 text-center text-black font-bold font-['Inter'] mb-1 mr-4">02/02</div>
                        <div class="time w-15 h-6 text-center text-black text-2xl font-bold font-['Inter'] mr-4">11:15</div>
                    </div>
                    <div class="relative">
                        <button
                            class="bg-white border text-3xl border-gray-500 text-green-700 font-bold py-2 px-7 rounded">登録
                        </button>

                    </div>
                    <span class="w-10 h-5 text-black font-bold self-start">demo</span>
                </div>
                <div class="h-2 bg-green-700 mb-1"></div>
                <div class="h-1 bg-orange-500"></div>
                <div class="">
                    <table class="min-w-full border-collapse">
                        <table class="min-w-full border-collapse">
                            <thead>
                                <tr>
                                    <th class="border-black px-4 py-2">行</th>
                                    <th class="border-black px-4 py-2">製品名</th>
                                    <th class="border-black px-4 py-2">価格</th>
                                    <th class="border-black px-4 py-2">個数</th>
                                    <th class="border-black px-4 py-2">税込み価格</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-gray-100">
                                    <td class="border px-4 py-2">1</td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="border px-4 py-2">2</td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="border px-4 py-2">3</td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="border px-4 py-2">4</td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="border px-4 py-2">5</td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                    <td class="border px-4 py-2"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="min-w-full border-collapse">
                            <tr>
                                <td class="border-black border px-4 py-2 text-black-600 font-bold text-right">お預かり</td>
                                <!--v-if-->
                            </tr>
                            <tr>
                                <td class="border-black border px-4 py-2 text-black-600 font-bold text-right">合計</td>
                                <td class="border-black border px-4 py-2 text-right">0</td>
                            </tr>
                            <tr>
                                <td class="border-black border px-4 py-2 text-black-600 font-bold text-right">お釣り</td>
                                <!--v-if-->
                            </tr>
                        </table>
                        <div class="flex">
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Bag</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Flyer</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Coffee</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Nikuman</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Newspaper</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Oden</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Bag</button>
                            <button @click="flyeralert"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">Bag</button>
                            <!--v-if-->
                        </div>
                    </table>
                </div>
                <div class="flex item-center">
                    <div class="rounded bg-white">
                        <div class="flex flex-wrap w-64 p-4 bg-white rounded">
                            <div class="py-4 grid grid-cols-3 gap-1">
                                <!-- 数字ボタンと機能ボタンを動的に生成 -->
                                <button @click="reciptalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">レシート送り</button>
                                <button @click="ryougaealert"
                                    class="w-16 h-16 bg-green-500 text-white rounded hover:bg-blue-600">両替</button>
                                <button @click="backalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">取消</button>
                                <button @click="clearalert"
                                    class="w-32 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2">C</button>
                                <button @click="kakerualert"
                                    class="w-16 h-16 bg-green-500 text-white rounded hover:bg-blue-600">X</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">7</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">8</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">9</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">4</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">5</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">6</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">2</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">3</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">0</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600">00</button>
                                <button @click="numalert"
                                    class="w-16 h-16 bg-white text-black rounded hover:bg-blue-600">万</button>
                            </div>
                            <!--v-if-->
                            <!--v-if-->
                        </div>
                    </div>
                    <div class="rounded bg-gray-200">
                        <div class="flex flex-wrap w-48 h-90 p-4 bg-white">
                            <div class="flex flex-wrap">
                                <button id="7co" @click="nanacoalert"
                                    class="w-16 h-16 p-4 m-1 bg-green-500 text-white rounded  hover:bg-blue-600 col-span-2">7co</button>
                                <button id="pay" @click="payalert"
                                    class="w-16 h-16 p-2 m-1 bg-green-500 text-white rounded hover:bg-blue-600 text-xs whitespace-nowrap col-span-2">電子マネー</button>
                                <button id="m9" @click="agealert"
                                    class="w-16 h-16 p-4 m-1  bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">9</button>
                                <button id="f9" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">9</button>
                                <button id="m19" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">19</button>
                                <button id="f19" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">19</button>
                                <button id="m29" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">29</button>
                                <button id="f29" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">29</button>
                                <button id="m49" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">49</button>
                                <button id="f49" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">49</button>
                                <button id="m50" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">50</button>
                                <button id="f50" @click="agealert"
                                    class="w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2">50</button>
                                <button id="enter" @click="enteralert"
                                    class="w-32 h-16 m-1 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2">登録/リピート</button>
                            </div>
                        </div>
                    </div>
                    <div class="rounded bg-white">
                        <div class="flex flex-wrap w-80 h-40 py-40 bg-white">
                            <button
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">ポイント交換
                                <div class="tooltip">
                                    <!-- &lt;div class=&quot;tooltip_message&quot;&gt;nanacoのポイントを交換できるようになります
                                  &lt;/div&gt; -->
                                </div>
                            </button>
                            <button @click="chargealert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">チャージ</button>
                            <button @click="balancealert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">残高照会</button>
                            <button @click="nanacoalert"
                                class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">7co</button>
                            <button @click="internetalert"
                                class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">インターネット</button>
                            <button @click="payalert"
                                class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">電子マネー</button>
                            <button @click="ticketalert"
                                class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">チケット</button>
                            <button @click="ryousyualert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">領収書</button>
                            <button @click="CGalert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">CG</button>
                            <button @click="returnalert"
                                class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">返品</button>
                            <button @click="loginalert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">責任者</button>
                            <button @click="cancelalert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">キャンセル</button>
                            <button @click="infoalert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">情報</button>
                            <!--v-if-->
                            <button @click="callalert"
                                class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">呼出</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </body>
    <RouterView />
</template>

<script>
export default {
    methods: {
        flyeralert() {
            alert('主にレジ袋、フライヤー、肉まん、新聞雑誌を登録するボタンです。お客様に注文されたらここのボタンを使いましょう');
        },
        reciptalert() {
            alert('短いレシートを出力します。あまり使いません');
        },
        ryougaealert() {
            alert('ドロワーが開けたい時に使います。');
        },
        backalert() {
            alert('お客様が商品を購入するのを辞める時に使います。このシミュレーターでも実装予定です。');
        },
        clearalert() {
            alert('入力した数字をクリアしたい時に使います。所謂バックスペースキーはないのでこれで入力した数値を消します');
        },
        kakerualert() {
            alert('お客様が同じ商品を複数購入した際に使います。このキーを押して購入数を入力して「登録・リピート」ボタンを押してください');
        },
        numalert() {
            alert('数字を入力する時に使います。');
        },
        nanacoalert() {
            alert('お客様がnanacoで支払う時に押します。この機能も実装予定です');
        },
        payalert() {
            alert('edyだのidだのquickpayだのicocaだので支払われるときに使います');
        },
        agealert() {
            alert('お預かり金額を入力した後、お客様の年齢を推定して押します。するとドロワーが開いてお釣りを渡せるようになります');
        },
        enteralert() {
            alert('お客様が同じ商品を複数個購入する時に追加ます。こちらのボタンは1ずつ個数が加算されていきます');
        },
        chargealert() {
            alert('お客様がnanacoやICOCAなどの電子マネーをチャージする時に使います');
        },
        balancealert() {
            alert('お客様がnanacoやICOCAなどの電子マネーの残高を確認する時に使います');
        },
        internetalert() {
            alert('お客様がインターネットの支払いをする時に使います');
        },
        ticketalert() {
            alert('お客様がチケットの代金の支払いをする時に使います。この機能も実装予定です。');
        },
        ryousyualert() {
            alert('お客様が領収書を発行して欲しい時に使います。領収書には必ずストアスタンプを押してください');
        },
        CGalert() {
            alert('ドロワーの中のお金が八万を超えるとレジ画面に表示がでます。このボタンはそのお金を回収して指定の場所に保管する時に使います。実装予定');
        },
        returnalert() {
            alert('お客様が商品を返品する時に使います。この機能も実装予定です');
        },
        loginalert() {
            alert('店員がレジから離れる際に押します。');
        },
        cancelalert() {
            alert('使ったこと無い');
        },
        infoalert() {
            alert('主にジャーナルを出力する際に使います。余り使いません');
        },
        callalert() {
            alert('バックヤードにいる店員にレジに入ってほしい時に使います。');
        }
    }
};
</script>