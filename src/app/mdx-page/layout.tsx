export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return <div className="prose prose-sm sm:prose-base lg:prose-lg text-white mx-auto max-w-none px-4 sm:px-6 lg:px-8">{children}</div>;
}
