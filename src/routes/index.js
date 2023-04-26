import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { SingleLayout } from '~/components/layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Upload', component: Upload, layout: SingleLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
