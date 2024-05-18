import Logo from '/acunmedya-akademi-logo-siyah.png'

export default function Header(){
    return(
        <>
        <header className="header">
            <img src={Logo} alt="" />
            <h2>Acunmedya Akademi Öğrenci Yoklama</h2>
        </header>
        </>
    )
}