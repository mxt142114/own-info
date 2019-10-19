import React from 'react'
import Iconfont from '@/data/iconfont'

export default (props) => {
    return (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${props.type}`} />
            <style jsx>{`
		.icon {
       		width: 1em; height: 1em;
       		vertical-align: -0.15em;
       		fill: currentColor;
       		overflow: hidden;
       	}
	  `}</style>
        </svg>
    )
}