export const Contents = [
    {
        name:"Javascript練習",
        id:"javascript",//URLの一部になる文字列なのでURLで使用できない文字は使用しないでください
        mainColor:"grey",
        sections:[
            {
                name:"変数と関数",
                secId:1,//URLの一部になる文字列なのでURLで使用できない文字は使用しないでください
                question:[
                    {
                        main:"let a;\na = 'hello world';\nconsole.log(a);",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        isImg:false,
                        options:[
                            {text:"hello world",title:"A"},
                            {text:"Hello World",title:"B"},
                            {text:"helloworld",title:"C"},
                            {text:"Hello World",title:"D"}],
                        explanation:
                        `1行目の記述はaという名前の変数を宣言しています。
                        変数とは文字や数字などのデータを保管しておく場所のことです。
                        宣言とは変数を作成して使用できる状態にすることです。
                        letという記述を見たらデータを保管する場所を作成して使用できる状態にしていると考えてください
                        　
                        2行目では変数に'hello world'という文字列データを代入しています。
                        代入とは変数にデータを入れることを指します。
                        代入できるデータの種類には「文字列型」「整数型」「浮動小数型」などがあります
                        今回のように文字列型を扱うときは「クオーテーション→'」または「ダブルクオーテーション→"」で囲う必要があります
                        　
                        3行目では関数を使用して変数に保存してあるデータを画面に表示する処理を行っています
                        関数とは特定の機能を持っているものです。
                        今回のconsole.log()という関数はカッコの中に記述したデータを画面に表示してくれる機能を持っています
                        関数は自分で作ることもできますし、javascriptに標準搭載された関数を使用することもできます。
                        ちなみに今回3行目で使用しているconsole.log()という関数はjavascriptに標準搭載されている関数です
                        　
                        console.log()という関数は渡されたデータをそのまま表示するので答えはAとなります。

                        `
                    },
                    {
                        main:"const a = 2;\nconst b = 2;\nif(a===b){\n console.log('true')\n}else{\n console.log('false')\n}",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        isImg:true,
                        options:[
                            {text:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920",title:"A"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"B"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"C"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"D"}],
                        explanation:"このコードはaとbが同じ値ならtrueを出力するコードです。1行目にaに2を代入していて2行目でbにも2を代入しているのでaとbは同じ値になりtrueが出力されます"
                    },
                    {
                        main:"const a = 11\nconst b = 22\nconsole.log(a+b)",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        options:[{text:"33",title:"A"},{text:"44",title:"B"},{text:"22",title:"C"},{text:"11",title:"D"}],
                        explanation:"このコードはaとbが同じ値ならtrueを出力するコードです。1行目にaに2を代入していて2行目でbにも2を代入しているのでaとbは同じ値になりtrueが出力されます",
                    },
                ]
            },
            {
                name:"Javascript応用",
                secId:2,
                question:[
                    {
                        main:"const a = 2;\nconst b = 2;\nif(a===b){\n console.log('true')\n}else{\n console.log('false')\n}",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        isImg:true,
                        options:[
                            {text:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920",title:"A"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"B"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"C"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"D"}],
                        explanation:"このコードはaとbが同じ値ならtrueを出力するコードです。1行目にaに2を代入していて2行目でbにも2を代入しているのでaとbは同じ値になりtrueが出力されます"
                    },
                    {
                        main:"const a = 2;\nconst b = 2;\nif(a===b){\n console.log('true')\n}else{\n console.log('false')\n}",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        isImg:true,
                        options:[
                            {text:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920",title:"A"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"B"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"C"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"D"}],
                        explanation:"このコードはaとbが同じ値ならtrueを出力するコードです。1行目にaに2を代入していて2行目でbにも2を代入しているのでaとbは同じ値になりtrueが出力されます"
                    },
                ]
            },
        ]
    },
    {
        name:"Java",
        id:"java",
        mainColor:"blue",
        sections:[
            {
                name:"Java基礎",
                secId:2,
                question:[
                    {
                        main:"const a = 2;\nconst b = 2;\nif(a===b){\n console.log('true')\n}else{\n console.log('false')\n}",
                        answer:"A",
                        prompt:"このコードの出力結果は？",
                        isImg:true,
                        options:[
                            {text:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920",title:"A"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"B"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"C"},
                            {text:"https://www.nikon-image.com/products/mirrorless/lineup/z_50/img/sample/pic_01_l.jpg",title:"D"}],
                        explanation:"このコードはaとbが同じ値ならtrueを出力するコードです。1行目にaに2を代入していて2行目でbにも2を代入しているのでaとbは同じ値になりtrueが出力されます"
                    },
                ]
            },
        ]
    }
]