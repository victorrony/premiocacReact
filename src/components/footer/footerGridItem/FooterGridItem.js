

export default function FooterGridItem ({img,name}) {

    return (
        <img src={process.env.NEXT_PUBLIC_API + img.url} className="footer_grid_item" />
    )
}