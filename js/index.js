import { Router } from "./router.js"

const router = new Router()
router.add("/","/pages/home.html")
router.add("/universo","/pages/universo.html")
router.add("/exploracao","/pages/exploracao.html")
router.add(404,"/404.html")


router.handle()

// window.onpopstate - permite que mude de pagina ao clicar no botão anterior/ próximo no navegador
window.onpopstate = () => router.handle()
window.route = () => router.route()