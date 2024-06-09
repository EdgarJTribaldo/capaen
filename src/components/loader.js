// src/components/loader.js
import Spinner from "./Spinner.svelte";

export const loader = (node, loading) => {
    let Spin;
    const unsubscribe = loading.subscribe(value => {
        if (value) {
            Spin = new Spinner({
                target: node,
                intro: true
            });
        } else {
            if (Spin) {
                Spin.$destroy();
                Spin = undefined;
            }
        }
    });

    return {
        destroy() {
            unsubscribe();
            if (Spin) {
                Spin.$destroy();
            }
        }
    };
};
