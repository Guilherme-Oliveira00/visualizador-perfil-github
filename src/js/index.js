const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = '<p class="loading" role="status">Carregando...</p>';

        try {
        const response = await fetch(`${BASE_URL}/users/${userName}`)

        if(!response.ok) {
            alert('Usuário não encontrado. POr favor, verifique o nome do usuário e tente novamente.')
            return;
        }

        const userData = await response.json();
        console.log(userData);

        profileResults.innerHTML = `
        <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
        <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'Nao possui bio cadastrada😢.'}</p>
        </div>`
    } catch (error){
        console.error('Error ao buscar o perfil do usuário:', error)
    } finally {
        const loading = profileResults.querySelector('.loading');
        if (loading) loading.remove();
    }
       
    } else {
        alert('Por favor, preencha o campo com o nome do usuário do GitHub');
    }
});
