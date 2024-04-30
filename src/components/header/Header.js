import "./header.scss";

export const Header = () => {
    return(
        <header className="row align-cent flex header">
            <div className="container m-centr">
                <ul className="flex" style={{gap:"20px"}}>
                    <li>Ссылка 1</li>
                    <li>Ссылка 2</li>
                    <li>Ссылка 3</li>
                </ul>
            </div>
        </header>
    )
}