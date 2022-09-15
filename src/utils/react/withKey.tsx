interface IBlockProps {
    id: string;
    title: string;
}

function Feed(props: {Blocks: IBlockProps[]}) {
    return (
        <div>
            {
                props.Blocks.map(withIdKey(Block))
            }
        </div>
    )
}

function Block(props: IBlockProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}

const withIdKey = withKey('id');

function withKey(key?: string) {
    return <E extends Object , T extends React.ComponentType<E>> (component: T) => 
         (props: E, index: number) => 
            React.createElement(
                component,
                {...props, key: key ? props[key as keyof E] : index}, 
                []
            )

}