import { LayoutOnly } from "~/components/Layouts";
import Home from "~/page/Home";
import PageChild from "~/page/PageChild";

// route ko cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/pagechild', component: PageChild, layout: LayoutOnly },

];
// route cần đăng nhập để xem
const privateRoutes = [];

export { publicRoutes, privateRoutes }