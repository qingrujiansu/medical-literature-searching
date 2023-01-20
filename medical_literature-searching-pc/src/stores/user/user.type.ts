import type {loginResponseType} from '@/api/userApi/types'
export type UserState = {
    phone:number
}
export type UserGetters = {
    // getterStudy: (state: StudyState) => Array<Datum>
}
export type UserActions = {
    // findAllFiles: () => void
    Login:() => void
}
  // 注意：如有导入导出的依赖数据或类型，自定义test类型需要使用export导出；否则可视为全局类型即可直接使用
