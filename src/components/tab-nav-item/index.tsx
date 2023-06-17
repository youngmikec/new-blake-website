type Props = {
    id: string;
    title: string;
    activeTab: string;
    setActiveTab: any;
}

const TabNavItem = ({ id, title, activeTab, setActiveTab }: Partial<Props>) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <>
            <li onClick={handleClick} className={activeTab === id ? "active" : ""}>{title}</li>
        </>
    )
}

export default TabNavItem
