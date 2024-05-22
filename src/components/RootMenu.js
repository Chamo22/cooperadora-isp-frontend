import Link from "next/link"

export default function RootMenu(){
    return (
        <div className="layout-menu">
                    <h1 className="menu-tittle">Cooperadora ISP 20</h1>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/alumnos">Alumnos</Link></li>
                        <li><Link href="/">Cobros</Link></li>
                        <li><Link href="/"></Link>Reportes</li>
                    </ul>
                </div>
    )
}