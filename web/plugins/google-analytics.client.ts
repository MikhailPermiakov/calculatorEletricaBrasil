export default defineNuxtPlugin(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
        window.dataLayer.push(args);
    }

    gtag('js', new Date());
    gtag('config', 'G-FS8M1BQ6H2');
});