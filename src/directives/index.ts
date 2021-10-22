
import { App } from 'vue';
export default {
    install: (app: App<Element>) => {
        // 按钮权限
        app.directive('rbac', {
            created() { }, // 新增
            beforeMount() { },
            mounted(el, binding, vnode, prevVnode) {
                const arr = ['1']
                if (arr.includes(binding.value)) {
                    el.parentNode.removeChild(el)
                }
            },
            beforeUpdate() { }, // 新增
            updated() { },
            beforeUnmount() { }, // 新增
            unmounted() { }
        })
    }
}