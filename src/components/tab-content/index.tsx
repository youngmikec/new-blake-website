import { Component } from "react";

type Props = {
    id: string;
    activeTab: string;
    children: any
}

const TabContent = ({ id, activeTab, children }: Partial<Props>) => {
    return (
        <>
            {
                activeTab === id ? <div>{children}</div> : null
            }
        </>
    )
}

export default TabContent
