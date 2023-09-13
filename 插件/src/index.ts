import { Storageclg, Key, Expire, Data, Result } from "./type";
import { Dictionaries } from "./enum";
export class Storage implements Storageclg {
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    // localStorage.setItem(key,value)
    let data = {
      value,
      [Dictionaries.expire]: expire,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: Key): Result<T> {
    let value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      //属性失效
      if (
        typeof data[Dictionaries.expire] === "number" &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key);
        return {
          message: `您设置的${key}已失效`,
          value: null,
        };
      }else{
        return{
            message:'success',
            value:data.value
        }
      }
    } else {
      return {
        message: "失效",
        value: null,
      };
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
