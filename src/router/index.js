import Relax from '@/views/relax'
import Resume from '@/views/resume'
import Synopsis from '@/views/synopsis'
import Message from '@/views/message'
import Skill from '@/views/skill'

export default [{
    path: '/',
    exact: true,
    component: Synopsis
}, {
    path: '/resume',
    exact: true,
    component: Resume
}, {
    path: '/skill',
    exact: true,
    component: Skill
}, {
    path: '/relax',
    exact: true,
    component: Relax
}, {
    path: '/synopsis',
    exact: true,
    component: Synopsis
}, {
    path: '/message',
    exact: true,
    component: Message
}]
