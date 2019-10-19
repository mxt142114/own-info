import Relax from './../views/relax'
import Resume from './../views/resume/index'
import Synopsis from './../views/synopsis/index'
import Technology from './../views/technology/index'


export default [{
    path: '/relax',
    component: Relax
}, {
    path: '/resume',
    component: Resume
}, {
    path: '/synopsis',
    component: Synopsis
}, {
    path: '/technology',
    component: Technology
}, {
    path: '/',
    component: Synopsis
}]