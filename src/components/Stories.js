const stores =[
    {image:"./media/img/9gag.svg", person: "9gag"},
    {image:"./media/img/meowed.svg", person: "meowed"},
    {image:"./media/img/barked.svg", person: "barked"},
    {image:"./media/img/nathanwpylestrangeplanet.svg", person: "nathanwpylestrangeplanet"},
    {image:"./media/img/wawawicomics.svg", person:"wawawicomics"},
    {image:"./media/img/respondeai.svg", person: "respondeai"},
    {image:"./media/img/filomoderna.svg", person: "filomoderna"},
    {image:"./media/img/memeriagourmet.svg", person: "memeriagourmet"}
]

function Stories (props){
    return(
        <div class="story">
        <div class="imagem">
          <img src={props.img} />
        </div>
        <div class="usuario">
          {props.perfil}
        </div>
      </div>
    )
}

export default function Storiesbox (){
    <div class="stories">
        {stores.map(store => <Stories 
                                    img={store.image}
                                    perfil={store.person} /> )}        

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
}