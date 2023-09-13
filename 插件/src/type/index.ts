


import { Dictionaries } from "../enum";

export type Key=string
export type Expire=Dictionaries.permanent | number;// 永久 | 时间戳

export interface Result<T>{
    message:string
    value:T | null
}

export interface Data<T>{
    value:T
    [Dictionaries.expire]:Expire
}

export interface Storageclg{
    get<T>(key:Key):Result<T>;
    set<T>(key:Key,value:T,expire:Expire):void;
    remove(key:Key):void;
    clear():void;
}