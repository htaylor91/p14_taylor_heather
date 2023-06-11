export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className={"px-2 overflow-hidden"}>{children}</main>;
}