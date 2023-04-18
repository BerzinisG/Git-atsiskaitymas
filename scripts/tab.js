export default class Modal {
    constructor(props) {
    this.#props = props

  }

  render() {
    const divFooter = document.createElement('div')
    divFooter.classList.add('footer')

    const intro1 = document.createElement('h1')
    const intro1Text = document.createTextNode('INTRO')
    intro1.appendChild(intro1Text)

    const icon = document.createElement('i')
    icon.classList.add('fa-solid', 'fa-x')
    this.close(icon, divFooter)

    const divMain = document.createElement('div')
    divMain.classList.add('hero')

    const img = document.createElement('img')
    img.setAttribute('src' (''))

    const par1 = document.createElement('p')
    const par1Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae eveniet asperiores doloremque! Nemo adipisci incidunt iusto quo molestiae, voluptatem ea dignissimos magnam labore unde? Voluptates sint illo quia corrupti.')
    par1.append(par1Text)
    const par2 = document.createElement('p')
    const par2Text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae eveniet asperiores doloremque! Nemo adipisci incidunt iusto quo molestiae, voluptatem ea dignissimos magnam labore unde? Voluptates sint illo quia corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae eveniet asperiores doloremque! Nemo adipisci incidunt iusto quo molestiae, voluptatem ea dignissimos magnam labore unde? Voluptates sint illo quia corrupti.')
    par2.append(par2Text)
    divMain.append(img,par1,par2)
  }
}