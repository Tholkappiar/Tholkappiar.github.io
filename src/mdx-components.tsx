import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
    return {
        img: (props) => {
            return <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...props}
            />
        },
        ...components
    };
}
