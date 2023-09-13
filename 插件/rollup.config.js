
// console.log('process.env',process.env)

import path from 'path'
import ts from 'rollup-plugin-typescript2'
import server from "rollup-plugin-serve" 
import livereload from 'rollup-plugin-livereload' //热更新
import { terser } from 'rollup-plugin-terser' //代码压缩

import replace from 'rollup-plugin-replace'

function isDev(){
  return  process.env.NODE_ENV==='development'
}
export default{
    input:'./src/index.ts',
    output:{
        file:path.resolve(__dirname,'./dist/index.js'),
        fromat:'umd',
        sourcemap:true
    },
    plugins:[
        ts(),
        // isDev() && livereload(),
        // !isDev() && terser({
        //     compress:{
        //         drop_console:true
        //     }
        // }),
        // replace({
        //     'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        // }),
        // isDev() &&  server({
        //     open:true,
        //     port:1995,
        //     openPage:'/public/index.html'
        // }),
        
    ]

}