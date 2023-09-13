const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado😥"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada 😥"}</p>
                                            <p>👥Seguidores ${user.followers}
                                            <br>👥Seguindo ${user.following}
                                            </p>
                                            </div>
                                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blanck">${repo.name}
                                                                    <div class="repo-status">
                                                                    <p>🍴 ${repo.forks_count}</p>
                                                                    <p>⭐ ${repo.stargazers_count}</p>
                                                                    <p>👀 ${repo.watchers_count}</p>
                                                                    <p>👨‍💻 ${repo.language ?? "indefinido"}</p>
                                                                    </div>
                                                                    </a>                                                               
                                                                 </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Reposit</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        console.log(repositoriesItens);

        let eventsItens = ''
        user.events.forEach(events => {

            if (events.type === "PushEvent" || events.type === "CreateEvent") {
                eventsItens += `<li>
                                    <p>${events.repo.name} </p>
                                    <p> - ${events.payload.commits[0].message}</p>
                                </li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events-data section">
                                                <h2>Events</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }

    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}


export { screen }



