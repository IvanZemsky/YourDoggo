declare module '*.module.scss' {
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