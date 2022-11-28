export const goToHome = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/simulador")
}

export const goToCadastro = (history) => {
    history.push("/contador")
}

export const goToExperiencia= (history) => {
    history.push("/experiencia")
}

export const goBack = (history) => {
    history.goBack()
}
