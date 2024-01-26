/**
 * 根据传入的初始值猜测序列化类型
 * @param rawInput 初始值
 * @returns 序列化类型
 */
const guessInputType = <T extends string | number | boolean | object | null>(rawInput: T) => {
  return rawInput === null
    ? 'any' // 如果初始值为null，则类型为any
    : rawInput instanceof Set
    ? 'set' // 如果初始值为Set实例，则类型为set
    : rawInput instanceof Map
    ? 'map' // 如果初始值为Map实例，则类型为map
    : rawInput instanceof Date
    ? 'date' // 如果初始值为Date实例，则类型为date
    : typeof rawInput === 'boolean'
    ? 'boolean' // 如果初始值为布尔值，则类型为boolean
    : typeof rawInput === 'string'
    ? 'string' // 如果初始值为字符串，则类型为string
    : typeof rawInput === 'object'
    ? 'object' // 如果初始值为对象，则类型为object
    : !Number.isNaN(rawInput)
    ? 'number' // 如果初始值为数字，则类型为number
    : 'any'; // 其他情况，类型为any
};

const res = guessInputType(null);
console.log('res->', res);

// 重点看下面：
interface Serializer<T> {
  read(key: string): T;
  write(value: T): string;
}

const storageSerializers: Record<
  'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date',
  Serializer<any>
> = {
  boolean: {
    read: (key: any) => key === 'true',
    write: (value: any) => String(value)
  },
  object: {
    read: (key: any) => JSON.parse(key),
    write: (value: any) => JSON.stringify(value)
  },
  number: {
    read: (key: any) => Number.parseFloat(key),
    write: (value: any) => String(value)
  },
  any: {
    read: (key: any) => key,
    write: (value: any) => String(value)
  },
  string: {
    read: (key: any) => key,
    write: (value: any) => String(value)
  },
  map: {
    read: (key: any) => new Map(JSON.parse(key)),
    write: (value: any) => JSON.stringify(Array.from(value as Map<any, any>).entries())
  },
  set: {
    read: (key: any) => new Set(JSON.parse(key)),
    write: (value: any) => JSON.stringify(Array.from(value as Set<any>))
  },
  date: {
    read: (key: any) => new Date(key),
    write: (value: any) => value.toISOString()
  }
};

export const useLocalStorage = (key: string, defaultValue: any) => {
  let localStorage: {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
  };

  if (typeof window !== 'undefined') {
    // 在浏览器环境中
    localStorage = window.localStorage;
  } else {
    // 不在浏览器环境，使用一个简化版的对象
    const storage: Record<string, string> = {};
    localStorage = {
      getItem: (key: string) => storage[key] || null,
      setItem: (key: string, value: string) => {
        storage[key] = value;
      }
    };
  }

  // 判断类型
  const type = guessInputType(defaultValue);
  const serializer = storageSerializers[type];

  // 读取
  const read = () => {
    const value = localStorage.getItem(key);
    return value ? serializer.read(value) : defaultValue;
  }

  // 写入
  const write = (val: any) => {
    localStorage.setItem(key, serializer.write(val));
  }

  return {
    read,
    write
  }
};

const { read, write } = useLocalStorage("user", {});

write({ name: "hei", age: 20});
console.log("read->", read());
