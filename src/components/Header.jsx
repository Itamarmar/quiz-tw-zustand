export default function Header() {
    const links = ["home","about"]
    return (
        <>
            <header className="h-16 bg-gray-950 text-white">
                <div className="container flex h-full items-center justify-between mx-auto">
                    <nav>
                        <ul className="flex gap-4">
                            {links.map((i)=>{
                               return <li key={i}>
                             <a className="font-bold hover:text-yellow-500" href="#">{i}</a>
                            </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}