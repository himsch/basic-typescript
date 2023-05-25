{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    age: 1,
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "song",
    description: "hi hi",
  };
  // video.title = ""; 재할당 불가.

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const video2: Nullable<Video> = {
    title: "hi",
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>; // 기존 type 을 Proxy 타입으로 한단계 랩핑한다.
  };

  type ProxyWrapperFn = <T>(value: T) => Proxy<T>;

  const wrappedProxy: ProxyWrapperFn = (value) => {
    let _value = value;
    return {
      get: () => _value,
      set: (value) => (_value = value),
    };
  };

  const video3: Proxify<Video> = {
    title: wrappedProxy("song"),
    author: wrappedProxy("hong"),
    description: wrappedProxy("gyu"),
  };

  console.log(video3.title.get()); // 'song'
  console.log(video3.title.set("hong"));
  console.log(video3.title.get()); // 'hong'
}
