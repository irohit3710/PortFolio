import React from 'react'
// import { Link } from 'react-router-dom'

const FooterListItems = ({listData,Title}) => {
    return (
        <>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    {Title}
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    {listData.map((items) => (
                        <li id={items._id}>
                            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                                {/* <Link to={items.link} target='_blank' rel='noopener'>{items.text}</Link> */}
                                <a href={items.link} target='_blank' rel='noreferrer'>{items.text}</a>
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FooterListItems