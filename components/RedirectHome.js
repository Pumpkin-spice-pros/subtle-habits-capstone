


export default function RedirectHome({ router }) {
    if(router !== 'home'){
        router.push('/home')
    }
}
