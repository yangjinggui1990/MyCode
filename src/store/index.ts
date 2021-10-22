

import { createStore } from 'vuex'

import { RECEIVE } from './mutationTypes'

const modulesFiles = import.meta.globEager('./common/**/*.ts')

const modules = Object.keys(modulesFiles).reduce((module: any, modulePath: any) => {
    const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/ig, '$2');
    if (!(["index", "Index"].includes(moduleName))) {
      module[moduleName] =  modulesFiles[modulePath]?.default || {};
    }
    return module;
}, {});

// Create a new store instance.
export default createStore({
    state: {

    },
    getters: {

    },
    mutations: {
        [RECEIVE](state) { }
    },
    actions: {
        receive({ commit }) {
            commit(RECEIVE)
        }
    },
    modules
})
