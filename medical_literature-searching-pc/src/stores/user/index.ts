import { defineStore } from 'pinia'
import to from 'await-to-js'
import type { UserState,UserGetters,UserActions } from './user.type'
import {reqLogin} from '@/api/userApi'
export const useUserStore = defineStore<string, UserState, UserGetters, UserActions>({
  id: 'user', // id必填，且需要唯一
  persist: true,//开启数据持久化
  state: () => {
    return {
     phone: 0

    }
  },
  getters: {
   
  },
  actions: {
    async Login() {
      const [err, res] = await to(reqLogin());
      if (err) {
        console.log(err);
      }
      console.log('用户信息',res)
      this.phone = res?.data.phone as any
     
    }
  }
})
