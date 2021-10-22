
import { App } from 'vue'

const componentFiles = import.meta.globEager('/src/components/common/*.vue')

export default {
    install: function (app: App<Element>) {
        Object.keys(componentFiles).forEach((file: any) => {
            const fileName = file.replace(/(.*\/)*([^.]+).*/ig, '$2');
            const files = componentFiles[file]?.default || {};
            if (!(["index", "Index"].includes(files?.name || fileName))) {
                app.component(files?.name || fileName, files);
            }
        });
    }
}
