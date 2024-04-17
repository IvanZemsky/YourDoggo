declare module '*.module.css' {
   interface IClassNames {
      [className: string]: string
   }
   const classNames: IClassNames
   export = classNames
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.svg'
declare module '*.ttf'
declare module '*.woff'
declare module '*.woff2'
declare module '*.eot'
declare module '*.oft'