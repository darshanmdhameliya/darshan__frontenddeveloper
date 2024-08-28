import Card from './card'

const data = [
  {
    link: ["https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg", "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&s", "https://tinypng.com/images/social/website.jpg"],
    name: ["owl", "tower", "flower", "panda"],
    disc: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, expedita? Saepe dolorem, asperiores ex illum numquam fugiat non! Repudiandae, sit!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, expedita? Saepe dolorem, asperiores ex illum numquam fugiat non! Repudiandae, sit!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, expedita? Saepe dolorem, asperiores ex illum numquam fugiat non! Repudiandae, sit!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, expedita? Saepe dolorem, asperiores ex illum numquam fugiat non! Repudiandae, sit!"],
  }
]


function App(props) {

  return (
    <div className='flex'>
      {data.map((item) => {
        return (
          <>
            <Card key={item} links={item.link[0]} names={item.name[0]} discs={item.disc[0]} />
            <Card key={item} links={item.link[1]} names={item.name[1]} discs={item.disc[1]} />
            <Card key={item} links={item.link[2]} names={item.name[2]} discs={item.disc[2]} />
            <Card key={item} links={item.link[3]} names={item.name[3]} discs={item.disc[3]} />
          </>
        )
      })}

    </div>
  )
}

export default App
