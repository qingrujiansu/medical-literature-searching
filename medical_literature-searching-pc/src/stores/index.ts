//模块化pinia
import { useUserStore } from './user'
export default function useStore() {
    return {
        userStore: useUserStore(),
    }
}


