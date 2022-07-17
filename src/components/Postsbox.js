const postsinfo =[
    {photo:"./media/img/meowed.svg", perfil:"meowed", image:"./media/img/gato-telefone.svg", 
    liked:"./media/img/respondeai.svg", text:"respondeai", textnumber:"101.523"},
    {photo:"./media/img/barked.svg", perfil:"barked", image:"./media/img/dog.svg",
    liked:"./media/img/adorable_animals.svg", text:"adorable_animals", textnumber:"99.159"}
]

function Posted (props){
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.autor} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedphoto} />
                    <div class="texto">
                        Curtido por <strong>{props.likedname}</strong> e <strong>outras {props.number} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Postbox(){
    return (
        <div class="posts">
            {postsinfo.map(post => <Posted 
                                    autor={post.photo} 
                                    name={post.perfil}
                                    img={post.image}
                                    likedphoto={post.liked}
                                    likedname={post.text}
                                    number={post.textnumber}
                                    />)}

        </div>
    )
}
