export default function UserLayout({children}:{children:React.ReactNode}){
    return (
        <div>
            <h1 className="text-2xl text-red-400 font-bold">Users Layout</h1>
            {children}
        </div>
    )
}