import Styles from './BlogNewPost.module.scss'

export default function Page()
{
    return (
        <div className={Styles.main}>
            <div className={Styles.text}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, iusto optio praesentium similique, doloremque laudantium quam commodi dolores temporibus, dolorum nemo culpa hic dolore illo nostrum dolor et labore fugit?</p>
            </div>
                <img src="https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_1280x720.jpg" alt="" />
        </div>
    )
}