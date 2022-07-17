const sidebarsugestions =[ 
    {photo:"./media/img/bad.vibes.memes.svg" , perfil:"bad.vibes.memes", razao:"Segue você"},
    {photo:"./media/img/chibirdart.svg", perfil:"chibirdart", razao:"Segue você"},
    {photo:"./media/img/razoesparaacreditar.svg", perfil:"razoesparaacreditar", razao:"Novo no Instagram"},
    {photo:"./media/img/adorable_animals.svg", perfil:"adorable_animals", razao:"Segue você"},
    {photo:"./media/img/smallcutecats", perfil:"smallcutecats", razao:"Segue você"}
]

function Sugestions (props){
    return(
        <div class="sugestao">
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <div class="nome">{props.person}</div>
            <div class="razao">{props.sugest}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
}

export default function Sidebar(){
    <div class="sidebar">
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>

    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
    </div>

    {sidebarsugestions.map(sugestions => <Sugestions
                                                img={sugestions.photo}
                                                person={sugestions.perfil} 
                                                sugest={sugestions.razao}/>)}

    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>

    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>
}