import './Header.css'

const Header = () => {
    return (
        <section className='header'>
            <div className='background'>
                <div className='content'>
                    <a className='logo' src="">
                    <img src='./madeinsertao_logo.png' alt="logo made in sertao"/>
                    </a>

                    <div className='menu'>
                        <a src="">Home</a>
                        <a src="">Quem Somos</a>
                        <a src="">Professores</a>
                        <a src="">Aulas</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;