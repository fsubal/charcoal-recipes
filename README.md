# charcoal-recipes

いろんな環境で https://github.com/pixiv/charcoal を使用します。

## 試した環境

`/examples` を見てね

- html-parcel-classless
- react-vite-styled
- react-webpack-tailwind
- vue-vite-tailwind

## わかったこと

- CRA (Webpack) 環境で styled と icons は問題なく動く
- Vite 環境で styled, tailwind-config は普通に動く、icons は工夫が必要
- Parcel で icons が動かない。tailwind-config は普通に動いた
- swc とか esbuild は試していないのでわからない

icons は SVG を dynamic import しており、この辺の挙動がバンドラーによって上手くいく・いかない生んでいる。
（ 現状の icons は主に webpack 環境を想定して実装されており、そこが課題っぽい ）
